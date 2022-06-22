import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FC, useState } from 'react';
import { useForm } from "react-hook-form";
import { Category, Featured, Section, Site } from "../../../src/interfaces";

interface FormData {
  _id?: string;
  name: string;
  href: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  items: any;
}
interface Props {
  section: Section
  category:string
}


export const FormSection: FC<Props> = ({ section, category}) => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } = useForm<FormData>({
    defaultValues: section,
  })
  const onSubmit = async (form: FormData) => {
    let { items, _id, href, ...data } = form
    const dat = {...data, category: category}
    const da = {...dat, section: form._id}

    if (router.query.section === 'new') {
      await axios.put(`${process.env.APIS_URL}/api/site/addsection/${process.env.API_SITE}`, dat)
      router.replace(`/admin/sites/${router.query.category}`)
    } else {
      await axios.put(`${process.env.APIS_URL}/api/site/updatesection/${process.env.API_SITE}`, da)
      router.replace(`/admin/sites/${router.query.category}`)
    }
  }
  const onFileSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.files || target.files.length === 0) {
      return;
    } 
    try {
      for (const file of target.files){
        const formData = new FormData();
        formData.append('file', file);
        const { data } = await axios.post(`${process.env.APIUP_URL}/api/upload/image`, formData)
        setValue('imageSrc', (getValues('imageSrc'), data.url), { shouldValidate: true })
      }
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <>
      <div className="max-w-2xl mx-auto pt-10 pb-16 px-1 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 ">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Datos de la seccion</h3>
              <p className="mt-1 text-sm text-gray-600">
                Esta información se mostrará publicamente, en la página de productos.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nombre de la Sección
                      </label>
                      <input
                        className="mt-2 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm  rounded-md p-1 border border-gray-300"
                        type={"text"}
                        {...register('name', {
                          onChange: (e) => { },
                          onBlur: (e) => { },
                          required: 'Este campo es requerido',
                          minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                        })}
                      />
                      <div>
                        {errors.name && <span className="text-sm text-orange-500">{errors.name.message}</span>}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="href" className="block text-sm font-medium text-gray-700">
                        url
                      </label>
                      <input
                        className="mt-2 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm rounded-md p-1 border border-gray-300"
                        disabled
                      />
                      {/* <div>
                        {errors.domain && <span className="text-sm text-orange-500">{errors.domain.message}</span>}
                      </div> */}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Imagen de Sección</label>
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
                    <div className="grid grid-cols-4 gap-2 mt-2 " >
                      <div className="relative border-2">
                        <Image
                          src={ getValues('imageSrc') }
                          alt="image"
                          height={500}
                          width={500}
                          objectFit="contain"
                        // className="object-center object-cover"
                        />
                        <FontAwesomeIcon
                          className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none absolute bottom-1 right-1"
                          // onClick={() => onDeleteImage(data)}
                          icon={faCircleMinus}
                        />
                      </div>
                    </div>

                    <div className="col-span-6 my-5">
                      <label htmlFor="imageAlt" className="block text-sm font-medium text-gray-700">
                        Descripción de la imagen
                      </label>
                      <input
                        className="mt-2 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm  rounded-md p-1 border border-gray-300"
                        type={"text"}
                        {...register('imageAlt', {
                          required: 'Este campo es requerido',
                          minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                        })}
                      />
                      <div>
                        {errors.imageAlt && <span className="text-sm text-orange-500">{errors.imageAlt.message}</span>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Descripción de la sección
                      </label>
                      <div className="mt-1">
                        <textarea
                          rows={6}
                          className="shadow-sm focus:ring-orange-500 focus:border-orange-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-1"
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
                    <div className="grid grid-cols-6 gap-6">
                    </div>
                    <div className="px-4 py-3 bg-white text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                      >
                        {
                          section._id ? `Actualizar Sección` : `Crear Sección`
                        }
                      </button>
                    </div>
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