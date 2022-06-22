import { GraphQLClient } from "graphql-request"

export	const graphQLClientS = new GraphQLClient(`${process.env.APIS_URL}/graphql`, {
		credentials: 'include',
		mode: 'cors',
	})
export	const graphQLClientP = new GraphQLClient(`${process.env.APIP_URL}/graphql`, {
		credentials: 'include',
		mode: 'cors',
	})
