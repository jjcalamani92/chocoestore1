import Link from "next/link";
import React, {Component} from "react";

interface Heading01Props {
  category: string
  section?: string
  item?: string
  name?: string
}



class Heading01 extends React.Component<Heading01Props> {
  render() {
    const { category, section, item, name} = this.props
    return (<nav aria-label="Breadcrumb" className=" py-2 md:py-6">
      <ol
        role="list"
        className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8 "
      >
        <li>
          <div className=" flex items-center">
            <Link href={`/${category}`} passHref prefetch={false}>
              <a href="#" className="text-sm font-medium text-gray-900 capitalize">
                {category}
              </a>
            </Link>

            
          </div>
        </li>
        {
          this.props.section 
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
              href={`/${category}/${section}`}
              passHref
              prefetch={false}
            >
              <a className="text-sm font-medium text-gray-900 capitalize">
                {section}
              </a>
            </Link>
          
          </div>
        </li>
        :
        null
        }
        {
          this.props.item 
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
              href={`/${category}/${section}/${item}`}
              passHref
              prefetch={false}
            >
              <a className="text-sm font-medium text-gray-900 capitalize">
                {item}
              </a>
            </Link>
          
          </div>
        </li>
        :
        null
        }
        {
          this.props.name 
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
              href={`/detalles/${name}`}
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
}


export default Heading01;

