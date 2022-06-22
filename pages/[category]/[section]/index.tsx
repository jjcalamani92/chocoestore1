import { GetStaticPaths, GetStaticProps } from "next";
import { Category,Section, IHardware, ISeo } from "../../../src/interfaces";
import React, { FC, useContext } from "react";
import { SECTION } from "../../../src/gql/query";
import { SBI } from "../../../src/gql/siteQuery";
import { Layout } from "../../../components/Layout";
import { HeadingPrimary, LayoutSectionList } from "../../../components/Components";
import { graphQLClientP, graphQLClientS } from '../../../src/graphQLClient';
import { UiContext } from "../../../src/context";

interface Props {
  seo: ISeo
  section: Section
}

const SectionPage:FC<Props> = ({seo, section}) => {
	const { site } = useContext(UiContext)
  return (
    <>
      <Layout
			  title={`${site.title} - ${seo.section.name}`}
        pageDescription={`${seo.section.description}`}
        imageFullUrl={seo.section.imageSrc}
      >
        <HeadingPrimary seo={seo} />
			  <LayoutSectionList products={section.items} />
      </Layout>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { hardwareAll } = await graphQLClientP.request(SECTION , {site: `${process.env.API_SITE}`})
  const paths = hardwareAll.map((data:IHardware) => ({
    params: data
  }))
  return {
    paths,
    fallback: "blocking"
  };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category="", section = "" } = params as { section: string, category: string };

  const { site } = await graphQLClientS.request(SBI, {id: process.env.API_SITE})
	const res = site.categories.find(findCategory)
	function findCategory(res:Category){
		return res.href === `${category}`;
	}
  const re = res.sections.find(findSection)
	function findSection(re:Section){
		return re.href === `${section}`;
	}
  return {
    props: { 
      section: re, 
      seo: {
        category: {
          name: res.name,
          href: res.href
        },
        section: {
          name: re.name,
          href: re.href,
          description: re.description,
          imageSrc: re.imageSrc
        },
      },
    },
    revalidate: 10
  };
};

export default SectionPage;

// import { GetStaticPaths, GetStaticProps, NextPage } from "next";

// import { Category,Section, IHardware } from "../../../src/interfaces";

// import { client } from "../../../src/apollo";
// import React from "react";
// import { useRouter } from "next/router";
// import { SECTION } from "../../../src/gql/query";
// import useSWR from "swr";
// import request, { RequestDocument } from "graphql-request";
// import { SBI } from "../../../src/gql/siteQuery";
// import { Layout } from "../../../components/Layout";
// import Heading01 from "../../../components/Components/Heading01";
// import { LayoutCategoryList, Spinner01 } from "../../../components/Components";

// const fetcher = (query: RequestDocument, variables: string) => request(`${process.env.APIS_URL}/graphql`, query, variables);


// const SectionPage = () => {
//   const router = useRouter();
//   const { category, section } = router.query
//   const { isValidating, data, error } = useSWR( [SBI, { id: process.env.API_SITE }], fetcher );
// 	if (isValidating) return <Spinner01 />;
//   const res = data.site.categories.find(findCategory)
// 	function findCategory(res:Category){
// 		return res.href === `${category}`;
// 	}
//   const re = res.sections.find(findSection)
// 	function findSection(re:Section){
// 		return re.href === `${section}`;
// 	}
//   return (
//     <>
//       <Layout
//         title={`- ${re.name}`}
//         pageDescription={re.name}
//         imageFullUrl={re.imageSrc}
        
//       >
//         <Heading01 category={`${category}`} section={`${section}`} />
//         {/* <LayoutProductlist01 products={re.items} /> */}
// 			{/* <LayoutCategoryList products={re.items} /> */}
//       {
// 				re.items.length === 0
// 				? null
// 				: <LayoutCategoryList products={re.items} />
// 			}

//       </Layout>
//     </>
//   );
// };
// export const getStaticPaths: GetStaticPaths = async (ctx) => {
//   const { data } = await client.query({
// 		query: SECTION,
//     variables: { site: `${process.env.API_SITE}`},
// 	});
//   const paths = data.hardwareAll.map((data:IHardware) => ({
//     params: { category: data.category, section: data.section }
//   })
//   )
//   return {
//     paths,
//     fallback: false
//   };
// };


// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { section = "" } = params as { section: string };
//   return {
//     props: {
//       section
//     },
//     revalidate: 60 * 60 * 24
//   };
// };

// export default SectionPage;


