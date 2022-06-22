import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { Login } from "../../components/Layout";

const LoginPage = () => {
	return (
		<>
			<Login />
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
export default LoginPage;
