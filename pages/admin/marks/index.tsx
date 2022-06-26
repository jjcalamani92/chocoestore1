import { FC, useState } from "react";
import Link from 'next/link';
import { LayoutAdmin } from "../../../components/Layout";
import { graphQLClientP, graphQLClientS } from "../../../src/graphQLClient";
import { S } from "../../../src/gql/siteQuery";
import { GetStaticProps } from "next";
import { Category, IMark, ISeo, Item, Section, Site } from "../../../src/interfaces";
import { FormSite } from "../../../components/Layout/admin/FormSite";
import { LayoutCategoryListAdmin, LayoutMarkListAdmin } from "../../../components/Components";
import { TableCategory } from "../../../components/Components/table/TableCategory";
import { MARKS } from "../../../src/gql/markQuery";
import { TableMark } from "../../../components/Components/table/TableMark";


interface Props {
  seo: ISeo
	markAll: IMark[]
}
const AdminPages:FC<Props> = ({seo, markAll}) => {
  // console.log(markAll)
	return (
		<>
			<LayoutAdmin>
        <TableMark markAll={markAll} />
				{/* <TableCategory categories={site.categories} /> */}
				{/* <LayoutCategoryListAdmin data={site.categories}/> */}
        <LayoutMarkListAdmin marks={markAll} />
				{/* <FormSite site={site} /> */}
			</LayoutAdmin>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { markAll } = await graphQLClientP.request(MARKS, {site: process.env.API_SITE, fetchPolicy: 'network-only', onCompleted: () => console.log('called'),})
  // const { site } = await graphQLClientS.request(S, {id: process.env.API_SITE})
  // console.log( markAll )
  return {
    props: {
      markAll
    },
    revalidate: 10
  };
};

export default AdminPages;
