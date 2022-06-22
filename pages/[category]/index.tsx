import { GetStaticPaths, GetStaticProps } from "next";
import { IHardware, } from "../../src/interfaces";
import { CATEGORY } from "../../src/gql/query";
import { Category, ISeo} from '../../src/interfaces/Site';
import { SBS } from "../../src/gql/siteQuery";
import { CategoryPreviews01, CategoryPreviews02, HeadingPrimary } from "../../components/Components";
import { Layout } from "../../components/Layout/Layout";
import { graphQLClientS, graphQLClientP } from '../../src/graphQLClient';
import { FC, useContext } from 'react';
import { UiContext } from "../../src/context";

interface Props {
	category: Category
	seo: ISeo
}

const CategoryPage:FC<Props>= ({seo, category}) => {
	const { site } = useContext(UiContext)
	return (
		<Layout
			title={`${site.title} - ${seo.category.name}`}
			pageDescription={`${seo.category.description}`}
			imageFullUrl={`${seo.category.imageSrc}`}
		>
			<HeadingPrimary seo={seo} />
			<CategoryPreviews01 section={category.sections} category={`${category.href}`}/>
			{/* {
				category.featured.length === 0
				? null
				: <CategoryPreviews02 featured={category.featured}/>
			} */}
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { hardwareAll } = await graphQLClientP.request(CATEGORY, { site: `${process.env.API_SITE}`})
	const paths = hardwareAll.map((data:IHardware) => ({
    params: { category: data.category}
  }))
	return {
		paths,
		fallback: "blocking"
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { category = "" } = params as { category: string };
	const { site } = await graphQLClientS.request(SBS, {id: process.env.API_SITE})
	const res = site.categories.find(findCategory)
	function findCategory(res:Category){
		return res.href === `${category}`;
	}
	return {
		props: { 
			category: res,
			seo: {
        category: {
          name: res.name,
          href: res.href,
					description: res.description,
          imageSrc: res.imageSrc
        },
      },
		},
		revalidate: 10
	};
};
export default CategoryPage;








// import { GetStaticPaths, GetStaticProps, NextPage } from "next";

// import { IHardware, } from "../../src/interfaces";
// import { CATEGORY } from "../../src/gql/query";
// import { client } from "../../src/apollo";
// import { Category} from '../../src/interfaces/Site';
// import { GraphQLClient, request, RequestDocument } from "graphql-request";
// import useSWR from "swr";
// import { useRouter } from "next/router";
// import { SBS } from "../../src/gql/siteQuery";
// import { CategoryPreviews01, Spinner01, CategoryPreviews02 } from "../../components/Components";
// import { Layout } from "../../components/Layout/Layout";
// import Heading01 from "../../components/Components/Heading01";
// import { graphQLClientS, graphQLClientP } from '../../src/graphQLClient';
// import { FC } from "react";

// const fetcher = (query: RequestDocument, variables: string) => request(`${process.env.APIS_URL}/graphql`, query, variables);

// interface Props {
// 	category:Category
// }

// const CategoryPage:FC<Props>= ({category}) => {
// 	// const router = useRouter();
// 	// const { category } = router.query
// 	console.log(category)
// 	// const { isValidating, data, error } = useSWR( [SBS, { id: process.env.API_SITE }], fetcher );
// 	// if (isValidating) return <Spinner01 />;
	
//   // const res = data.site.categories.find(findCategory)
// 	// function findCategory(res:Category){
// 	// 	return res.href === `${category}`;
// 	// }
// 	return (
// 		<Layout
// 			title='{`- ${res.name}`}'
// 			pageDescription='{res.name}'
// 			imageFullUrl='{res.imageSrc}'
// 		>
//       <Heading01 category={`${category.name}`} />
// 			<CategoryPreviews01 section={category.sections} category={`${category.name}`}/>
// 			{
// 				category.featured.length === 0
// 				? null
// 				: <CategoryPreviews02 featured={category.featured}/>
// 			}
// 		</Layout>
// 	);
// };

// export const getStaticPaths: GetStaticPaths = async (ctx) => {
// 	// const endpoint = `${process.env.APIS_URL}/graphql`
// 	// const graphQLClient = new GraphQLClient(endpoint, {
// 	// 	credentials: 'include',
// 	// 	mode: 'cors',
// 	// })
// 	// const datas = await graphQLClient.request(SBS, { id: process.env.API_SITE })
// 	// console.log(JSON.stringify(datas, undefined, 2))
// 	// const {site} = await graphQLClientS.request(SBS, {id: process.env.API_SITE})
// 	// console.log(JSON.stringify(site, undefined, 2))
//   const { hardwareAll } = await graphQLClientP.request(CATEGORY, { site: `${process.env.API_SITE}`})
// 	// console.log(JSON.stringify(hardwareAll, undefined, 2 ));
// 	// console.log(hardwareAll)
// 	// const { data } = await client.query({
// 	// 	query: CATEGORY,
//   //   variables: { site: `${process.env.API_SITE}`},
// 	// });
// 	// console.log(data)
// 	const paths = hardwareAll.map((data:IHardware) => ({
//     params: { category: data.category}
//   }))
// 	return {
// 		paths,
// 		fallback: false
// 	};
// };


// export const getStaticProps: GetStaticProps = async ({ params }) => {
// 	const { category = "" } = params as { category: string };
// 	const {site} = await graphQLClientS.request(SBS, {id: process.env.API_SITE})
// 	// console.log(JSON.stringify(site, undefined, 2))
// 	// console.log(site.categories)
// 	// const category = site.categories
// 	const res = site.categories.find(findCategory)
// 	function findCategory(res:Category){
// 		return res.href === `${category}`;
// 	}
// 	// console.log('hola',res)
// 	return {
// 		props: {
// 			category: res
// 		},
// 		revalidate: 60 * 60 * 24
// 	};
// };



// export default CategoryPage;