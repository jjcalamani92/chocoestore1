import Head from "next/head";
import { FC } from "react";
import { Footer01, HeaderHardware, Search01 } from "../Components";

interface Props {
	title: string;
	pageDescription: string;
	imageFullUrl?: string;
}

export const Layout: FC<Props> = ({
	title,
	children,
	pageDescription,
	imageFullUrl
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="keywords" />
				<meta name="description" content={pageDescription} />

				<meta property="og:title" content={title} />
				<meta property="og:description" content={pageDescription} />
				<meta property="og:type" content="og:product" />
				{imageFullUrl && <meta property="og:image" content={imageFullUrl} />}
			</Head>
			{/* <HeaderWear /> */}
			<HeaderHardware />
			<Search01 />
			<main>{children}</main>
      <Footer01 />
		</>
	);
};
