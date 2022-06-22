import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext, useState } from "react";
import { UiContext } from "../../src/context";
export const Footer01 = () => {
    const [mode, setMode] = useState("auto");
    const { site, toggleSideSearch, toggleSideCart } = useContext(UiContext)

    return (
        <div className="pt-12">
            <footer id="footer" className="relative z-30 ">
                {/* <footer id="footer" className="relative z-30 dark:bg-gray-900 pt-24"> */}
                <div className=" border-t border-b border-gray-200  py-16">
                    <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                        <div className="lg:flex">
                            <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">

                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        {site.categories.map((category,i) => (
                                            <li key={i} className="mb-6">
                                                <Link href={`/${category.href}`}>
                                                    <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">{category.name}
                                                    </a>
                                                </Link>
                                            </li>

                                        ))}
                                        

                                    </ul>
                                </div>

                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">Contacto</a>
                                            </Link>
                                        </li>

                                        <li className="mt-6">
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">Blog</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">FAQs</a>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex">
                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li>
                                            <a href="#" className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">
                                                Politicas de Privacidad
                                            </a>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">Términos de Servicio</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                                    <div className="flex items-center mb-6">
                                        <a href="#">
                                            <div className="text-gray-800  cursor-pointer hover:text-brand  ">
                                                <FontAwesomeIcon
                                                    className="w-6 h-6"
                                                    icon={faFacebookF}
                                                />
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="pl-4">
                                                <FontAwesomeIcon
                                                    className="w-6 h-6"
                                                    icon={faTwitter}
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-16 flex flex-col justify-center items-center">
                    <Link href="/">
                        <a >
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-20 w-auto"
                                src={site.logo}
                                alt=""
                            />
                        </a>
                    </Link>
                    <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 ">2022 {site.title}. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};
