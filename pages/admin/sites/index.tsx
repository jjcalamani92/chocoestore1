import { FC, useState } from "react";
import Link from 'next/link';
import { LayoutAdmin } from "../../../components/Layout";
import { graphQLClientS } from "../../../src/graphQLClient";
import { S } from "../../../src/gql/siteQuery";
import { GetStaticProps } from "next";
import { Category, ISeo, Item, Section, Site } from "../../../src/interfaces";
import { FormSite } from "../../../components/Layout/admin/FormSite";
import { LayoutSiteListAdmin } from "../../../components/Components";
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
				
        <div className="my-6 container px-2 mx-auto flex flex-row lg:flex-row items-center lg:items-center justify-between ">
					<h4 className="text-2xl font-bold leading-tight text-gray-800">Categorias</h4>
					<Link href="/admin/sites/new">
						<a  className="transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-none border bg-orange-500 rounded text-white px-8 py-2 text-sm">Nueva Categoría</a>
					</Link>
				</div>
				<TableCategory categories={site.categories} />
				<LayoutSiteListAdmin data={site.categories}/>
				<div className="my-6 container px-2 mx-auto flex flex-row lg:flex-row items-center lg:items-center justify-between ">
					<h4 className="text-2xl font-bold leading-tight text-gray-800">Sitio</h4>
				</div>
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
