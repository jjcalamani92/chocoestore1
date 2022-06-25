import { NextPage, GetServerSideProps } from 'next';
import { Category, IHardware, Section } from "../../../../../src/interfaces";
import { LayoutAdmin } from '../../../../../components/Layout';
import { graphQLClientS } from '../../../../../src/graphQLClient';
import { SBS } from '../../../../../src/gql/siteQuery';
import Link from 'next/link';
import { FormSection } from '../../../../../components/Layout/admin/FormSection';
import { TableItem } from '../../../../../components/Components/table/TableItem';
import { useRouter } from 'next/router';
import { LayoutItemsListAdmin } from '../../../../../components/Components';
import { HeadingAdmin } from '../../../../../components/Components/HeadingAdmin';
interface Props {
	section: Section;
	category: string
}
const ProductPage: NextPage<Props> = ({ section, category }) => {
	const router = useRouter()
	return (
		<>
			<LayoutAdmin>
				<HeadingAdmin category={`${router.query.category}`} section={`${router.query.section}`}/>
				{
					router.query.section === 'new'
					? null
					:
					<>
							<TableItem items={section.items} category={category} section={section._id}/>
							<LayoutItemsListAdmin data={section.items} category={category} section={section._id}/>
						</>
				}
				<FormSection section={section} category={category} />

			</LayoutAdmin>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { section = '', category = '' } = query
	let data: Section | null | any

	if (section === 'new') {
		data = {
			name: '',
			href: '',
			description: '',
			imageSrc: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg',
			imageAlt: ''

		}
	} else {
		const { site } = await graphQLClientS.request(SBS, { id: process.env.API_SITE })
		const dat = site.categories.find((data: { href: string; }) => data.href === `${category}`)

		data = dat.sections.find((data: { href: string; }) => data.href === `${section}`)
	}

	const { site } = await graphQLClientS.request(SBS, { id: process.env.API_SITE })
	const res = site.categories.find((data: { href: string; }) => data.href === `${category}`)
	return {
		props: {
			section: data,
			category: res._id
		},
	};
}

export default ProductPage;