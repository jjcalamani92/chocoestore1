import { NextPage, GetServerSideProps } from 'next';
import { PRODUCT_BY_SLUG } from '../../../src/gql/query';
import { IHardware } from "../../../src/interfaces";
import { GraphQLClient } from 'graphql-request';
import Hardware from '../../../src/db/hardware.schema';
import { FormHardware } from '../../../components/Components';
import { LayoutAdmin } from '../../../components/Layout';
interface Props {
	product: IHardware;
}
const client = new GraphQLClient(`${process.env.APIP_URL}/graphql`)
const ProductPage: NextPage<Props> = ({ product }) => {
	return (
		<>
			<LayoutAdmin>
				<FormHardware product={product} />
			</LayoutAdmin>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { slug = '' } = query
	let product:IHardware | null | any;
	if (slug === 'new') {
		const tempProduct = JSON.parse( JSON.stringify( new Hardware() ) );
		delete tempProduct._id;
    product = tempProduct;
	} else {
		const data = await client.request(
			PRODUCT_BY_SLUG, { slug: query.slug, site: process.env.API_SITE }
		);
		product = data.hardwareBySlug
	}
return {
	props: {
		product
	},
};
}

export default ProductPage;