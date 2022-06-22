import Link from "next/link";
import React, {Component, FC} from "react";
import { useRouter } from 'next/router';

interface Props {
  category: string
  section?: string
  item?: string
  name?: string
}
interface HeadingPrimary {
  category?: string
  section?: string
  item?: string
  name?: string
  seo?: any
  productName?: string
  productSlug?: string
}

export const HeadingDetail:FC<Props> = ({category, section, item, name}) => {
  return (<nav aria-label="Breadcrumb" className=" py-2 md:py-6">
  <ol
    role="list"
    className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8 "
  >
    <li>
      <div className=" flex items-center">
        <Link href={`/${category}/${section}/${item}`} passHref prefetch={false}>
          <a href="#" className="text-sm font-medium text-gray-900 capitalize">
            {item}
          </a>
        </Link>

        
      </div>
    </li>
    {
      name
      ? 
    <li>
      <div className="flex items-center">
      <svg
          width={16}
          height={20}
          viewBox="0 0 16 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-4 h-5 text-gray-300"
        >
          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
        </svg>
        <Link
          href={`/${category}/${section}/${item}/${name}`}
          passHref
          prefetch={false}
        >
          <a className="text-sm font-medium text-gray-900 capitalize">
            {name}
          </a>
        </Link>
      
      </div>
    </li>
    :
    null
    }
    

  </ol>
</nav>);

}


export const HeadingPrimary:FC<HeadingPrimary> = ({category, section, name, seo, productName, productSlug}) => {
  const router = useRouter()
  const {slug, item} = router.query
  // console.log(router.query, slug)
  return (<nav aria-label="Breadcrumb" className=" py-4 sm:py-6">
  <ol
    role="list"
    className="max-w-2xl mx-auto px-4 flex items-center space-x-0 sm:px-0 lg:max-w-7xl lg:px-8 "
  >
   
    {
      seo.category?.name
      ?
      <li>
        <div className={ `'items-center' ${slug ? 'hidden sm:flex' : 'flex'} ${item ? 'hidden sm:flex' : 'flex'}`}>
        {/* <div className=" flex items-center"> */}
          <Link href={`/${seo.category.href}`} passHref prefetch={false}>
            <a href="#" className="text-sm font-medium text-gray-900 capitalize">
              {seo.category.name}
            </a>
          </Link>
        </div>
      </li>
      :
      null
    }
    {
      seo.section?.name
      ? 
    <li>
      <div className={ `'items-center' ${slug ? 'hidden sm:flex' : 'flex'}`}>
      {/* <div className="flex items-center"> */}
      <svg
          width={16}
          height={20}
          viewBox="0 0 16 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          // className="w-4 h-5 text-gray-300"
          className={ `'w-4 h-5 text-gray-300' ${slug ? 'hidden sm:flex' : 'flex'} ${item ? 'hidden sm:flex' : 'flex'}`}
        >
          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
        </svg>
        <Link
          href={`/${seo.category.href}/${seo.section.href}`}
          passHref
          prefetch={false}
        >
          <a className="text-sm font-medium text-gray-900 capitalize">
            {seo.section.name}
          </a>
        </Link>
      
      </div>
    </li>
    :
    null
    }
    {
      seo.item?.name
      ? 
    <li>
      <div className="flex items-center">
      <svg
          width={16}
          height={20}
          viewBox="0 0 16 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={ `'w-4 h-5 text-gray-300' ${slug ? 'hidden sm:flex' : 'sm:flex'}`}
          // className="w-4 h-5 text-gray-300"
        >
          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
        </svg>
        <Link
          href={`/${seo.category.href}/${seo.section.href}/${seo.item.href}`}
          passHref
          prefetch={false}
        >
          <a className="text-sm font-medium text-gray-900 capitalize">
            {seo.item.name}
          </a>
        </Link>
      
      </div>
    </li>
    :
    null
    }
    {
      productName
      ? 
    <li>
      <div className="flex items-center">
      <svg
          width={16}
          height={20}
          viewBox="0 0 16 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-4 h-5 text-gray-300"
        >
          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
        </svg>
        <Link
          href={`/detalles/${productSlug}`}
          passHref
          prefetch={false}
        >
          <a className="text-sm font-medium text-gray-900 capitalize">
            {productName}
          </a>
        </Link>
      
      </div>
    </li>
    :
    null
    }
   

  </ol>
</nav>);

}