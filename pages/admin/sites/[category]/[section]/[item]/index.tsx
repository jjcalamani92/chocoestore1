import { NextPage, GetServerSideProps } from 'next';
import { Category, Item, Section } from "../../../../../../src/interfaces";
import { LayoutAdmin } from '../../../../../../components/Layout';
import { graphQLClientS } from '../../../../../../src/graphQLClient';
import { SBS } from '../../../../../../src/gql/siteQuery';
import { FormItem } from '../../../../../../components/Layout/admin/FormItem';
import { HeadingAdmin } from '../../../../../../components/Components/HeadingAdmin';
import { useRouter } from 'next/router';
interface Props {
	item: Item;
	category: string
	section: string
}
const ProductPage: NextPage<Props> = ({ item, category, section }) => {
	const router = useRouter()
	return (
		<>
			<LayoutAdmin>
				<HeadingAdmin category={`${router.query.category}`} section={`${router.query.section}`}/>
				<FormItem item={item} category={category} section={section} />
			</LayoutAdmin>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { item='', section = '', category='' } = query
	let data: Item | null | any

	if (item === 'new') {
		data = {
			name: '',
			href: '',
			description: '',
			imageSrc: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg',
			imageAlt: ''
		}
	} else {
		const { site } = await graphQLClientS.request(SBS, { id: process.env.API_SITE })
		const da = site.categories.find((data: { href: string; }) => data.href === `${category}`)

		const dat = da.sections.find((data: { href: string; }) => data.href === `${section}`)

		data = dat.items.find((data: { href: string; }) => data.href === `${item}`)
	}
	const { site } = await graphQLClientS.request(SBS, { id: process.env.API_SITE })
	const res = site.categories.find((data: { href: string; }) => data.href === `${category}`)
	const re = res.sections.find((data: { href: string; }) => data.href === `${section}`)
	return {
		props: {
			item: data,
			category: res._id,
			section: re._id
		},
	};
}

export default ProductPage;