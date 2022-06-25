import { faFacebookF, faInstagram, faLinkedin, faPinterest, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC, useContext, } from "react";
import { UiContext } from "../../src/context";
import { IHardware } from "../../src/interfaces";
import { SwiperDetail } from "./Swiper";
import { useRouter } from 'next/router';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

interface Props {
	product: IHardware;
}

export const ProductOverviews: FC<Props> = ({ product }) => {
	const { site } = useContext(UiContext)
	console.log(site.domain)
	const router = useRouter()
	console.log(router.asPath)
	return (
		<>
			<section className="bg-white" >
				{/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl grid  grid-cols-1 md:gap-4 lg:grid-cols-5"> */}
				<div className="max-w-2xl mx-auto py-1 px-4 sm:px-0 lg:max-w-7xl lg:py-3 lg:px-8 grid grid-cols-1 lg:gap-6 lg:grid-cols-5">
					<div className="col-span-3" >
						<SwiperDetail image={product.image} />
					</div>
					<div className="col-span-2 mt-3 lg:mt-0" >
						<div className="mb-4">
							<h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
								{product.name}
							</h1>
						</div>
						<div className="mb-4">
							<p className="text-3xl text-gray-900 ">{product.price}.00 Bs </p>
						</div>
						<div className="mb-4">
							{/* <form className="mt-5">
								<button
									type="submit"
									className="mt-4 w-full bg-orange-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
								>
									Agregar al carrito
								</button>
							</form> */}
							<a
								href={`https://wa.me/591${site.numberPhone}?text=Hola%20me%20interesa%20este%20producto:%20https://${site.domain}/detalles/${product.slug}`}
								target={'blank'}
								className=" w-full bg-orange-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
							>
								Preguntar por WhatsApp
							</a>
						</div>
						<div className="mb-4">
							<h2 className="text-sm font-medium text-gray-900">Detalles</h2>
							<div className="mt-4 space-y-3">
								<p className="text-sm text-gray-600">{product.description}</p>
							</div>
						</div>
						<div className="mb-4">
							<h2 className="text-sm font-medium text-gray-900 mb-4">Compartir</h2>
							<div className="grid grid-cols-7 gap-2 text-orange-500 ">

								<Link href={`https://www.facebook.com/sharer.php?u=https://${site.domain}${router.asPath}`}>
									<a target={'_blank'}>
										<FontAwesomeIcon
											className="w-6 h-6 hover:text-orange-600"
											icon={faFacebookF}
										/>
									</a>
								</Link>
								<Link href={'#'}>
									<a target={'_blank'}>
										<FontAwesomeIcon
											className="w-6 h-6 hover:text-orange-600"
											icon={faInstagram}
										/>
									</a>
								</Link>
								<Link href={'#'}>
									<a target={'_blank'}>
										<FontAwesomeIcon
											className="w-6 h-6 hover:text-orange-600"
											icon={faTwitter}
										/>
									</a>
								</Link>
								<Link href={'#'}>
									<a target={'_blank'}>
										<FontAwesomeIcon
											className="w-6 h-6 hover:text-orange-600"
											icon={faLinkedin}
										/>
									</a>
								</Link>
								<Link href={'#'}>
									<a target={'_blank'}>
										<FontAwesomeIcon
											className="w-6 h-6 hover:text-orange-600"
											icon={faPinterest}
										/>
									</a>
								</Link>
								<Link href={'#'}>
									<a target={'_blank'}>
										<FontAwesomeIcon
											className="w-6 h-6 hover:text-orange-600"
											icon={faWhatsapp}
										/>
									</a>
								</Link>
								<Link href={'#'}>
									<a target={'_blank'}>
										<FontAwesomeIcon
											className="w-6 h-6 hover:text-orange-600"
											icon={faTelegram}
										/>
									</a>
								</Link>

							</div>
						</div>
					</div>

				</div>
			</section>
		</>
	)
}
