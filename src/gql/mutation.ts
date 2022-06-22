import { gql } from "@apollo/client";

// export const CREATE_PRODUCT = gql`
//   mutation CreateProduct($title: String!, $brand: String!, $description: String!, $image: [String!], $inStock:[Float], $category: String!, $subCategory: String!, $price: Float!, $tags: [String!], $site: String!, $color: String!, $sizes: [String!]) {
//     createProduct(
//       title: $title
//       brand: $brand
//       description: $description
//       image: $image 
//       inStock: $inStoc
//       category: $category
//       subCategory: $subCategory
//       price: $pric
//       tags: $tags 
//       site: $site
//       color: $color
//       sizes: $sizes 
//     ){
//       title
// 			brand
// 			description
// 			image
// 			inStock
// 			category
// 			subCategory
// 			price
// 			tags
//       site
//       color
// 			sizes
//     }
//   }
// `


// export const CREATED_PRODUCT = gql`
// 	mutation createWear($title: String!, $brand: String!, $description: String!, $image: [String!], $inStock: Float!, $category: String!, $subCategory: String!, $price: Float!, $tags: [String!], $site: String!, $color: String!, $sizes: [String!]) {
// 		createWear(
//       title: $title
//       brand: $brand
//       description: $description
//       image: $image 
//       inStock: $inStock
//       category: $category
//       subCategory: $subCategory
//       price: $price
//       tags: $tags 
//       site: $site
//       color: $color
//       sizes: $sizes 
// ) {
// 			title
// 			brand
// 			description
// 			image
// 			inStock
// 			category
// 			subCategory
// 			price
// 			tags
//       site
//       color
// 			sizes
// 		}
// 	}
// `;
export const CREATED_PRODUCT = gql`
	mutation createWear($input: input) {
		createWear(input: $input
) {
			title
			brand
			description
			image
			inStock
			category
			subCategory
			price
			tags
      site
      color
			sizes
		}
	}
`;
export const UPDATED_PRODUCT = gql`
	mutation UpdateWear($_id: String, $input:UpdateWearInput!) {
		updateWear(_id: $_id, input:$input) {
			title
			brand
			description
			image
			inStock
			category
			subCategory
			price
			tags
      site
      color
			sizes
		}
	}
`;

export const DELETE_PRODUCT = gql`
  mutation RemoveWear($_id: String) {
    removeWear(_id: $_id)
  }
`