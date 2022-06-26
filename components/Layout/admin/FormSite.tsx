import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FC, useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const validCategory = ['ferreteria', 'linea-automotiva']
const validSection = ['herramientas-electricas', 'herramientas-manuales', 'para-el-hogar', 'automotiva']
const validItem = ['amoladoras', 'atornilladores', 'poliuretano', 'alicates', 'destornilladores']

interface FormData {
  _id?: string;
  title: string;
  domain: string;
  logo: string;
  description: string;
  numberPhone: string;
  address: string;
  type: string;
  categories?: any;
}

interface Props {
  site: FormData
}

export const FormSite: FC<Props> = ({ site }) => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } = useForm<FormData>({
    defaultValues: site
  })
  const onDeleteImage = async (image: string) => {
    const fileExtension = image.substring(image.lastIndexOf('/') + 1).split('.').slice(0, -1).join('.')
    await axios.patch(`${process.env.APIUP_URL}/api/upload/${fileExtension}`)

    // setValue('image', getValues('image').filter(img => img !== image), { shouldValidate: true })
    // const fileExtension = image.substring(image.lastIndexOf('/')+1).split('.').slice(0,-1).join('.')
    // await axios.patch(`${process.env.APIUP_URL}/api/upload/${fileExtension}`)

  }

  const onSubmit = async (form: FormData) => {
    let { categories, type, ...data } = form
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Datos Actualizados',
      showConfirmButton: false,
      timer: 1500
    })
    await axios.put(`${process.env.APIS_URL}/api/site/${site._id}`, data)
    router.replace('/admin/sites')
  }

  const onFileSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.files || target.files.length === 0) {
      return;
    }
    try {
      for (const file of target.files) {
        const formData = new FormData();
        formData.append('file', file);
        const { data } = await axios.post(`${process.env.APIUP_URL}/api/upload/image`, formData)
        setValue('logo', (getValues('logo'), data.url), { shouldValidate: true })
      }
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
            <div className="my-6 container mx-auto flex flex-row lg:flex-row items-center lg:items-center justify-between ">
              <h4 className="text-2xl font-bold leading-tight text-gray-800">
                Actualizar Datos del sitio
              </h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                  <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
                    <div className="col-span-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Nombre del Sitio
                        </label>
                        <input
                          className="my-2 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm  rounded-md p-1 border border-gray-300"
                          type={"text"}
                          {...register('title', {
                            onChange: (e) => { },
                            onBlur: (e) => { },
                            required: 'Este campo es requerido',
                            minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                          })}
                        />
                        <div>
                          {errors.title && <span className="text-sm text-orange-500">{errors.title.message}</span>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Dirreccón
                        </label>
                        <input
                          className="my-2 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm  rounded-md p-1 border border-gray-300"
                          type={"text"}
                          {...register('address', {
                            onChange: (e) => { },
                            onBlur: (e) => { },
                            required: 'Este campo es requerido',
                            minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                          })}
                        />
                        <div>
                          {errors.address && <span className="text-sm text-orange-500">{errors.address.message}</span>}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap 0 lg:grid-cols-2 lg:gap-3">
                        <div className="">
                          <label htmlFor="domain" className="block text-sm font-medium text-gray-700">
                            Dominio
                          </label>
                          <input
                            className="my-2 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm rounded-md p-1 border border-gray-300"
                            {...register('domain', {
                              required: 'Este campo es requerido',
                              minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                            })}
                          />
                          <div>
                            {errors.domain && <span className="text-sm text-orange-500">{errors.domain.message}</span>}
                          </div>
                        </div>
                        <div className="">
                          <label htmlFor="numberPhone" className="block text-sm font-medium text-gray-700">
                            Teléfono:
                          </label>
                          <input
                            className="my-2 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm rounded-md p-1 border border-gray-300"
                            type='number'
                            {...register('numberPhone', {
                              required: 'Este campo es requerido',
                              minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                            })}
                          />
                          <div>
                            {errors.numberPhone && <span className="text-sm text-orange-500">{errors.numberPhone.message}</span>}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                          Descripción del Sitio
                        </label>
                        <div className="mt-1">
                          <textarea
                            rows={2}
                            className="shadow-sm focus:ring-orange-500 focus:border-orange-500 my-2 block w-full sm:text-sm border border-gray-300 rounded-md p-1"
                            {...register('description', {
                              required: 'Este campo es requerido',
                              minLength: { value: 2, message: 'Mínimo 3 caracteres' }
                            })}
                          />
                        </div>
                        <div>
                          {errors.description && <span className="text-sm text-orange-500">{errors.description.message}</span>}
                        </div>
                      </div>

                    </div>

                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700">Logo del Sitio</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-orange-500 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
                            >
                              <span>Cargar un archivo</span>
                              <input id="file-upload" name="file-upload" accept="image/png, image/gif, image/jpeg, image/webp" type="file" className="sr-only" onChange={onFileSelected} />
                            </label>
                            <p className="pl-1">o arrastrar y soltar</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 5MB</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-2 mt-2 " >
                        <div className="relative border-2">
                          <Image
                            src={getValues('logo')}
                            alt="image"
                            height={200}
                            width={500}
                            objectFit="contain"
                          // className="object-center object-cover"
                          />
                          {/* <FontAwesomeIcon
                              className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none absolute bottom-1 right-1"
                              onClick={() => onDeleteImage(getValues('logo'))}
                              icon={faCircleMinus}
                            /> */}
                        </div>
                      </div></div>
                  </div>
                  <div className=" bg-white text-right ">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      Actualizar Datos del Sitio
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  )
}
