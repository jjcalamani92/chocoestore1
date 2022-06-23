import Image from "next/image";
import { useRouter } from 'next/router';
import Link from "next/link";
import React, { FC, useState } from "react";
import { IHardware } from "../../../src/interfaces";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

interface Props {
  products: IHardware[];
}


export const TableProduct: FC<Props> = ({ products }) => {
  const router = useRouter()
  // const [deleteData] = useMutation(DELETE_PRODUCT, {
  //   onCompleted: (data) => {
  //     window.location.reload();
  //   },
  //   update(cache, result) { },

  // })
  const [show, setShow] = useState(null);
  const onDeleteData = async (id: string) => {
    await axios.delete(`${process.env.APIP_URL}/api/hardware/${id}`)
    router.reload()
      // router.replace('/admin')
    // console.log(`delete product with id is: ${_id}`)
    // const updatedTags = getValues('tags').filter(t => t !== tag);
    // setValue('tags', updatedTags, { shouldValidate: true })
  }
  return (
    <>
    <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
          <div className="my-6 container mx-auto flex flex-row lg:flex-row items-center lg:items-center justify-between ">
            <h4 className="text-2xl font-bold leading-tight text-gray-800">Productos</h4>
            <Link href="/admin/products/new">
              <a  className="transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-none border bg-orange-500 rounded text-white px-8 py-2 text-sm">Nuevo Producto</a>
            </Link>
          </div>
            <div className="hidden lg:flex">
            <table className="table-auto  whitespace-nowrap w-full">
                <thead>
                  <tr className="h-16 border border-gray-100 rounded">
                    <th className="w-3/10" >
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-900 mr-2">
                          Nombre del producto
                        </p>
                      </div>
                    </th>
                    <th className="w-3/10" >
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-900 mr-2">
                          Categoria
                        </p>
                      </div>
                    </th>
                    <th className="w-1/10" >
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-900 mr-2">
                          Sección
                        </p>
                      </div>
                    </th>
                    <th className="w-1/10" >
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-900 mr-2">
                          Item
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
                          Cantidad
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
                  {products.map((product, i) => (
                    <tr className="h-16  border border-gray-100 rounded" key={i}>
                      <td className="pl-15 mb-5">
                        <div className="flex items-center pl-5">
                          <p className="text-sm leading-none text-gray-600 mr-2">
                            {product.name}
                          </p>
                        </div>
                      </td>
                      <td className="pl-15 mb-5">
                        <div className="flex items-center">
                          <p className="text-sm leading-none text-gray-600 ml-2 capitalize">
                            {product.category}
                          </p>
                        </div>
                      </td>
                      <td className="pl-5">
                        <div className="flex items-center">
                          <p className="text-sm leading-none text-gray-600 ml-2">
                          {product.section}

                          </p>
                        </div>
                      </td>
                      <td className="pl-5">
                        <div className="flex items-center">
                          <p className="text-sm leading-none text-gray-600 ml-2">
                          {product.item}

                          </p>
                        </div>
                      </td>
                      <td className="pl-5">
                        <div className="flex items-center">
                          <div className="aspect-w-1 h-30 aspect-h-1 rounded-lg bg-white overflow-hidden group-hover:opacity-75">
                            <Image
                              src={product.image[0]}
                              alt={product.name}
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
                            23
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
                          <Link href={`/admin/products/${product.slug}`} >
                          <a>
                            <FontAwesomeIcon
                              className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5"
                              icon={faPenToSquare}
                            />
                            </a>
                          </Link>
                          <div onClick={() => onDeleteData(product._id)} >
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
      <div className="hidden lg:flex">
        <div className="w-full">
          {/* <div className="px-4 md:px-10 py-4 md:py-7">
            <div className="flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Panel de Administración
              </p>
              <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                <p>Sort By:</p>
                <select className="focus:outline-none bg-transparent ml-1">
                  <option className="text-sm text-indigo-800">Latest</option>
                  <option className="text-sm text-indigo-800">Oldest</option>
                  <option className="text-sm text-indigo-800">Latest</option>
                </select>
              </div>
            </div>
          </div> */}
          <div className="bg-white ">
            
            <div className="overflow-x-auto ">
              
            </div>
          </div>
        </div>
        <style>
          {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
        </style>
      </div>
    </>
  );
};
