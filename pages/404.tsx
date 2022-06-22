import { Layout, LayoutError } from "../components/Layout";


const Page404 = () => {
	return (
		<Layout
			title="Page Not Found"
			pageDescription="No hay nada que mostrar aqui"
		>
			<LayoutError />
		</Layout>
	);
};

export default Page404;
