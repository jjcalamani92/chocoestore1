import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { Register } from "../../components/Layout";

const RegisterPage = () => {
	return (
		<>
			<Register/>
		</>
	);
};
export const getServerSideProps: GetServerSideProps = async ({req, query}) => {
	const session = await getSession({req})
	const {p='/'} = query;
	if (session) {
		return {
			redirect: {
				destination: p.toString(),
				permanent: false
			}
		}
	}
	return {
		props: { }
	}
}
export default RegisterPage;
