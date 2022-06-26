import { Fragment, useState, useContext } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { FolderOpenIcon, LoginIcon, LogoutIcon, MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { UiContext, AuthContext } from '../../src/context';
import Link from 'next/link';
import Image from 'next/image';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const HeaderHardware = () => {
  const { site, toggleSideSearch, toggleSideCart } = useContext(UiContext)
  const { user, isLoggedIn, logout } = useContext(AuthContext);

  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex px-4 space-x-8">
                      {site.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'text-orange-600 border-orange-600' : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium capitalize'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {site.categories.map((category) => (
                      <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.slice(-2).map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                <Image
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  height={200}
                                  width={200}
                                  objectFit={"cover"}
                                  objectPosition={'center'}
                                />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900 capitalize">
                                <span className="absolute z-10 inset-0" aria-hidden="true" />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Comprar Ahora
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section, i) => (
                          <div key={i}>
                            <Link href={`/${category.href}/${section.href}`}>
                              <a className="font-medium text-gray-900 capitalize">
                                {section.name}
                              </a>
                            </Link>
                            <ul
                              role="list"
                              className="mt-6 flex flex-col space-y-6 capitalize"
                            >
                              {section.items.map((item, i) => (
                                <li key={i} className="flow-root">
                                  <a href={`/${category.href}/${section.href}/${item.href}`} className="-m-2 p-2 block text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                {/* <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {site.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div> */}

                {
                  isLoggedIn && user?.role === 'ADMIN_ROL' && (
                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                      <div className="flow-root">
                        <Link href="/admin">
                          <a className="-m-2 p-2 block font-medium text-gray-900">
                            Panel de Administración
                          </a>
                        </Link>
                      </div>
                    </div>
                  )
                }



                <div className="border-t border-gray-200 py-6 px-4 space-y-6">

                  {
                    isLoggedIn
                      ?
                      <div className="flow-root">
                        <Link href='/' >
                          <a className="-m-2 p-2 block font-medium text-gray-900  cursor-pointer" onClick={logout}>
                            Salir
                          </a>
                        </Link>
                      </div>

                      :
                      <>
                        <div className="flow-root">
                          <Link href={`/auth/login`}>
                            <a className="-m-2 p-2 block font-medium text-gray-900">
                              Login
                            </a>
                          </Link>
                        </div>
                        <div className="flow-root">
                          <Link href={`/auth/register`}>
                            <a className="-m-2 p-2 block font-medium text-gray-900">
                              Register
                            </a>
                          </Link>
                        </div>
                      </>
                  }
                </div>

                {/* <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 p-2 flex items-center">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        {/* <p className="bg-orange-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          Obtenga envío gratuito en pedidos superiores a $ 100
        </p> */}

        <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <a >
                    {/* <span className="sr-only">Workflow</span> */}
                    <Image
                      // className="h-8 w-auto"
                      width={120}
                      height={50}
                      src={site.logo}
                      objectFit={'contain'}
                      alt=""
                    />
                  </a>
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden z-40 lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {site.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-orange-600 text-orange-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px capitalize'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-cols-5 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-5 grid grid-cols-1 gap-x-8">
                                      {category.featured.slice(-1).map((item, i) => (
                                        <div key={i} className="group relative text-base sm:text-sm">
                                          <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                            <Image
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              width='250'
                                              height='250'
                                              objectFit={"cover"}
                                              objectPosition={'center'}
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900 capitalize">
                                            <span className="absolute z-10 inset-0" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1 capitalize mb-2">
                                            Comprar Ahora
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-4 gap-y-10 gap-x-8 text-sm col-span-4">
                                      {category.sections.map((section, i) => (
                                        <div key={i}>
                                          <Link href={`/${category.href}/${section.href}`}>
                                            <a className="font-medium text-gray-900 capitalize">
                                              {section.name}
                                            </a>
                                          </Link>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item, i) => (
                                              <li key={i} className="flex">
                                                <a href={`/${category.href}/${section.href}/${item.href}`} className="hover:text-gray-800 capitalize">

                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {site.pages.map((page, i) => (
                    <a
                      key={i}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 capitalize"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                {/* <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link href={`/auth/login`}>
                    <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Login
                    </a>
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link href={`/auth/register`}>
                    <a className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Register
                    </a>
                  </Link>
                </div> */}

                {/* <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="text-gray-700 hover:text-gray-800 flex items-center">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}
                {
                  isLoggedIn
                    ?
                    <>
                      {
                        user?.role === 'ADMIN_ROL' && (

                          <Link href="/admin">
                            <a className="lg:flex lg:ml-3 hidden">
                              <div className="p-2 text-gray-400 hover:text-gray-500 flex">
                                <span className="sr-only">Admin</span>
                                <FolderOpenIcon className="w-6 h-6" aria-hidden="true" />
                              </div>
                            </a>
                          </Link>
                        )
                      }
                      <div className="lg:flex lg:ml-2 hidden" onClick={logout}>
                        <a className="p-2 text-gray-400 hover:text-gray-500 items-center flex">
                          <span className="sr-only">Logout</span>
                          <LogoutIcon
                            className="w-6 h-6"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </>
                    :
                    <Link href="/auth/login">

                      <div className="lg:flex lg:ml-2 hidden">
                        <a className="p-2 text-gray-400 hover:text-gray-500 items-center flex">
                          <span className="sr-only">Login</span>
                          <LoginIcon
                            className="w-6 h-6"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </Link>


                }


                {/* Search */}
                <div className="flex lg:ml-3 items-center">
                  <div onClick={toggleSideSearch} className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </div>
                </div>

                {/* Cart */}
                {/* <div className="ml-4 flow-root lg:ml-3">
                  <div onClick={toggleSideCart} className="group -m-2 p-2 flex items-center">
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
