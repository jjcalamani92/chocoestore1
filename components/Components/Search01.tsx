import { Fragment, useContext, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { UiContext } from '../../src/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { IHardware } from '../../src/interfaces'



export const Search01 = () => {
  const { isSearchOpen, toggleSideSearch } = useContext(UiContext)
  const [search, setSearch] = useState('') 

  const onSearch = (e:any) => {
    if (search.trim().length === 0) return;
    // console.log(e.target.value)  
    // setSearch(form.search)
    // console.log(form.search)
  }


  // console.log(setSearch)
  // const [open, setOpen] = useState(false)
  return (
    <Transition.Root show={isSearchOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={toggleSideSearch}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={toggleSideSearch}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="block px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900"> Buscar: </Dialog.Title>
                      <div
                        className="flex mt-2 lg:ml-0 lg:mt-0 " 
                        // onSubmit={handleSubmit(onSubmit)}
                        >

                        <div className="pt-2 relative  w-full text-gray-600">
                          <input
                            value={search}
                            onChange={(e) => setSearch( e.target.value )}
                            onKeyPress={(e) => e.key === 'Enter' ? onSearch(e): null }
                            // onChange={handleChange}
                            
                            className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-gray-100 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full" type="search"
                            placeholder="Buscar"

                            // {...register('search', {
                            //   required: 'Este campo es requerido para re  alizar busquedas',
                            //   minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                            // })}
                          />
                          {/* <div>
                            {errors.search && <span className="text-sm text-orange-500">{errors.search.message}</span>}
                          </div> */}
                          <button className="focus:ring-2 focus:ring-offset-2 bg-gray-100 text-gray-600 focus:text-orange-700 focus:rounded-full  focus:bg-gray-100 focus:ring-orange-700 focus:outline-none absolute right-0 top-0 mt-5 mr-4">
                            <FontAwesomeIcon
                              className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none bottom-1 right-1 fill-current h-4 w-4"
                              // onClick={() => onDeleteImage(data)}
                              icon={faSearch}
                            />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}

                      <div className="absolute inset-0 px-4 sm:px-6">
                        {/* <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true"> */}
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {[]
                          //   .filter((form) => {
                          //     if (search === '') {
                          //       return form
                          //     } else if (
                          //       form.search.toLowercase().includes(search.toLowerCase()) {
                          //       return form
                          //     }
                          //   )
                          // })
                          .map((product:IHardware, i:number) => (
                          <li key={i} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={product.image[0]}
                                alt={product.name}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href='#'> {product.name} </a>
                                  </h3>
                                  <p className="ml-4">{product.price}.00 Bs</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                {/* <p className="text-gray-500">Qty {product.quantity}</p> */}

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-orange-600 hover:text-orange-500"
                                  >
                                    Ver Producto
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                          ))}
                        </ul>
                        {/* </div> */}
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
