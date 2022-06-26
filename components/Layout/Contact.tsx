import { FC } from "react";
import { Site } from "../../src/interfaces";
interface Props {
  site: Site
}
export const Contact: FC<Props> = ({ site }) => {
  return (
    <>
      <div className="bg-white mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="col-span-1 lg:col-span-3 relative flex flex-col">
                <iframe
                  width="100%"
                  height="100%"
                  className="h-96 lg:h-full lg:absolute"
                  frameBorder={0}
                  title="map"
                  marginHeight={0}
                  marginWidth={0}
                  scrolling="no"
                  src={site.location}
                />
                <div className="bg-white absolute grid grid-cols-2 gap-6 p-6 rounded shadow-md left-6 bottom-6 ">
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
              <div className="col-span-1">
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
                {/* <p className="text-xs text-gray-500 mt-3">
                  {site.description}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
