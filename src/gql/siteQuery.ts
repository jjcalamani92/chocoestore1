import { gql } from "@apollo/client";



export const SBS = gql`
	query Site($id: String!) {
		site(id: $id) {
			categories {
				_id
				name
				description
				href
				imageSrc
				imageAlt
				sections {
					_id
					name
					href
					description
					imageSrc
					imageAlt
					items {
						_id
						name
						href
						description
						imageSrc
						imageAlt
					}
				}
				featured {
					_id
          name
					href
					description
					imageSrc
					imageAlt
        }
			}
		}
	}
`;

export const SBI = gql`
	query Site($id: String!) {
		site(id: $id) {
			categories {
				name
				href
				sections {
					name
					href
					description
					imageSrc
					imageAlt
					items {
						name
						href
						description
						imageSrc
						imageAlt
					}
				}
			}
		}
	}
`;

export const S = gql`
	query Site($id: String!) {
		site(id: $id) {
			_id
			title
			domain
			logo
			numberPhone
			address
			type
			categories {
				_id
				name
				href
				description
				imageSrc
				imageAlt
				sections {
					_id
					name
					href
					description
					imageSrc
					imageAlt
					items {
						_id
						name
						href
						description
						imageSrc
						imageAlt
					}
				}
				featured {
					_id
					name
					href
					description
					imageSrc
					imageAlt
				}
			}
		}
	}
`;
