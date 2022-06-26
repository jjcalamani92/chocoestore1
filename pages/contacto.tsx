import type { NextPage } from "next";
import { useContext } from "react";
import { Contact, Home, Layout } from "../components/Layout";
import { UiContext } from "../src/context";

const Index: NextPage = () => {
	const { site } = useContext(UiContext)
	return (
		<Layout
			title={site.title}
			pageDescription={site.description}
			imageFullUrl={site.logo}
		>
			<Contact site={site} />
		</Layout>
	);
};

export default Index;
