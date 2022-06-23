import Image from "next/image";
import { useRouter } from 'next/router';
import Link from "next/link";
import React, { FC, useState } from "react";
import { Category, Featured, IHardware, Section, Site } from "../../../src/interfaces";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

interface Props {
  sections: Section[];
  category: string;
}


export const TableSection: FC<Props> = ({ sections, category }) => {
  const router = useRouter()

  const [show, setShow] = useState(null);

  const onDeleteData = async (id: string) => {
    const data = { section: id, category: category }
    await axios.put(`${process.env.APIS_URL}/api/site/removesection/${process.env.API_SITE}`, data)
    router.reload()
  }
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
          <div className="my-6 container mx-auto flex flex-row lg:flex-row items-center lg:items-center justify-between ">
            <h4 className="text-2xl font-bold leading-tight text-gray-800">Secciones</h4>
						<Link href={`/admin/sites/${router.query.category}/new`}>
							<a className="transition duration-150 ease-in-out hover:bg-orange-500 focus:outline-none border bg-orange-600 rounded text-white px-8 py-2 text-sm">Nueva Sección</a>
						</Link>
            </div>
          <div className="overflow-x-auto hidden lg:flex">
              <table className="table-auto  whitespace-nowrap w-full">
                <thead>
                  <tr className="h-16 border border-gray-100 rounded">
                    <th className="w-3/10" >
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-900 mr-2">
                          Nombre de la Sección
                        </p>
                      </div>
                    </th>
                    <th className="w-3/10" >
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-900 mr-2">
                          Descripción
                        </p>
                      </div>
                    </th>

                    <th className="w-1/10" >
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-900 mr-2">
                          Imagen
                        </p>
                      </div>
                    </th>
                    <th className="w-1/10" >
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-900 mr-2">
                          Descripcion de la imagen
                        </p>
                      </div>
                    </th>
                    {/* <th className="w-1/10" >
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-900 mr-2">
                          Fecha de publicación
                        </p>
                      </div>
                    </th> */}
                    <th className="w-1/10" ></th>
                  </tr>
                </thead>
                <tbody>
                  {sections.map((section, i) => (
                    <tr className="h-16  border border-gray-100 rounded" key={i}>
                      <td className="pl-15 mb-5">
                        <div className="flex items-center pl-5">
                          <p className="text-sm leading-none text-gray-600 mr-2">
                            {section.name}
                          </p>
                        </div>
                      </td>
                      <td className="pl-15 mb-5">
                        <div className="flex items-center">
                          <p className="text-sm leading-none text-gray-600 ml-2 capitalize">
                            {section.description}
                          </p>
                        </div>
                      </td>

                      <td className="pl-5">
                        <div className="flex items-center">
                          <div className="aspect-w-1 h-30 aspect-h-1 rounded-lg bg-white overflow-hidden group-hover:opacity-75">
                            <Image
                              src={section.imageSrc}
                              alt={section.name}
                              height={100}
                              width={100}
                              className="object-center object-cover"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="pl-5">
                        <div className="flex items-center">
                          <p className="text-sm leading-none text-gray-600 ml-2">
                            {section.imageAlt}
                          </p>
                        </div>
                      </td>
                      {/* <td className="pl-5">
                        <div className="flex items-center">
                          <p className="text-sm leading-none text-gray-600 ml-2">
                            04/07
                          </p>
                        </div>
                      </td> */}
                      <td className="pl-4">
                        <div className="flex items-center gap-2">
                          <Link href={`/admin/sites/${router.query.category}/${section.href}`} >
                            <a>
                              <FontAwesomeIcon
                                className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5"
                                icon={faPenToSquare}
                              />
                            </a>
                          </Link>
                          <div onClick={() => onDeleteData(section._id)} >
                            <a>
                              <FontAwesomeIcon
                                className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5"
                                icon={faCircleMinus}
                              />
                            </a>
                          </div>
                        </div>


                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
