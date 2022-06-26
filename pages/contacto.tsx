import type { NextPage } from "next";
import { useContext } from "react";
import { Home, Layout } from "../components/Layout";
import { UiContext } from "../src/context";

const Index: NextPage = () => {
	const { site } = useContext(UiContext)
	return (
		<Layout
			title={site.title}
			pageDescription={site.description}
			imageFullUrl={site.logo}
		>
			<section className="text-gray-600 body-font relative">
        <div className="container px-5 py-6 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src={site.location}
            />
            <div className="bg-white relative grid grid-cols-2 gap-6 p-6 rounded shadow-md">
              <div className="">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  Dirección:
                </h2>
                <p className="mt-1">
                  {site.address}
                </p>
              </div>
              <div className="">
                {/* <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  email:
                </h2> */}
                {/* <a className="text-orange-500 leading-relaxed">info@info.com</a> */}
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs ">
                  Telefóno:
                </h2>
                <p className="leading-relaxed">{site.numberPhone}</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Envianos tus sugerencias
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Correo electronico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-600 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
              Enviar Mensaje
            </button>
            <p className="text-xs text-gray-500 mt-3">
              {site.description}
            </p>
          </div>
        </div>
      </section>
		</Layout>
	);
};

export default Index;
