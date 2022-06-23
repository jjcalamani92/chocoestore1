import { useState } from "react";
import { PRODUCT_ALL } from '../../src/gql/query';
import request, { RequestDocument } from "graphql-request";
import Link from 'next/link';
import { Spinner04, TableProduct, Pagination01, LayoutItemListAdmin } from "../../components/Components";
import { LayoutAdmin } from "../../components/Layout";
import { useQuery } from "@apollo/client";


const PAGE_SIZE = 8;

const AdminPage = () => {
	const [page, setPage] = useState(0)
	const { loading, error, data, fetchMore } = useQuery(PRODUCT_ALL, {
		variables: { limit: PAGE_SIZE, offset: page*PAGE_SIZE, site: process.env.API_SITE },  
		fetchPolicy: 'network-only',
		onCompleted: () => console.log('called'),
});
	if (loading) return <Spinner04 />;
	return (
		<>
			<LayoutAdmin>
				<TableProduct products={data.hardwaresAll} />
				<LayoutItemListAdmin products={data.hardwaresAll}/>
				<Pagination01 setPage={setPage} page={page} length={data.hardwaresAll.length} all={PAGE_SIZE} />
			</LayoutAdmin>
		</>

	);
};

export default AdminPage;
