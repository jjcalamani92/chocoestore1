import { FC } from "react";
import { Item } from "../../src/interfaces";
import Link from "next/link";
import { useRouter } from 'next/router';

interface LayoutSectionList {
	products: Item[];
}

export const LayoutSectionList:FC<LayoutSectionList> = ({ products }) => {
  const router = useRouter();
  const { category, section } = router.query
	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
				{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

				<div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
					{products.map((product, i) => (
						
            <Link href={`/${category}/${section}/${product.href}`} key={i}>
              <a  className="group">
                <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                    <div className="capitalize">
                          {/* <span aria-hidden="true" className="inset-0 capitalize " /> */}
                          {product.name}
                        </div>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                  </div>
                  {/* <p className="text-sm font-medium text-gray-900">
                    {product.price}.00 Bs
                  </p> */}
                </div>
              </a>
            </Link>
					))}
				</div>
			</div>
		</div>
		</div>
	);
};
