import { FC, useState } from "react";
import Link from 'next/link';
import { LayoutAdmin } from "../../../components/Layout";
import { graphQLClientS } from "../../../src/graphQLClient";
import { S } from "../../../src/gql/siteQuery";
import { GetStaticProps } from "next";
import { Category, ISeo, Item, Section, Site } from "../../../src/interfaces";
import { FormSite } from "../../../components/Layout/admin/FormSite";
import { LayoutCategoryListAdmin } from "../../../components/Components";
import { TableCategory } from "../../../components/Components/table/TableCategory";


interface Props {
  seo: ISeo
	site: Site
}
const AdminPages:FC<Props> = ({seo, site}) => {
	const [page, setPage] = useState(0)
	return (
		<>
			<LayoutAdmin>
				<TableCategory categories={site.categories} />
				<LayoutCategoryListAdmin data={site.categories}/>
				<FormSite site={site} />
			</LayoutAdmin>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { site } = await graphQLClientS.request(S, {id: process.env.API_SITE})
  return {
    props: {
      site
    },
    revalidate: 10
  };
};

export default AdminPages;
