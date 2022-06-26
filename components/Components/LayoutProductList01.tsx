import { FC } from "react";
import { Category, Featured, IHardware, IMark, Item, Section } from "../../src/interfaces";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Swal from "sweetalert2";

interface Props {
	products: IHardware[];
}
interface LayoutMarkListAdmin {
	marks: IMark[];
}
interface LayoutCategoryListAdmin {
	data: Category[] | Section[] | Featured[] | Item[];
}
interface LayoutFeaturedListAdmin {
	data: Featured[];
	category: string;
}
interface LayoutSectionListAdmin {
	data: Section[];
	category: string;
}
interface LayoutItemsListAdmin {
	data: Item[];
	category: string;
	section: string;
}

export const LayoutProductlist01: FC<Props> = ({ products }) => {

	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
					{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

					<div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
						{products.map((product, i) => (
							<div key={i} className="group relative">
								<div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
									<img
										src={product.image[0]}
										alt={product.name}
										className="w-full h-full object-contain"
									/>
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700">
											<Link
												href={`/detalles/${product.slug}`}
												// href={`/detail/${product.slug}`}

												passHref
												prefetch={false}
											>
												<a href="#">
													<span aria-hidden="true" className="absolute inset-0" />
													{product.name}
												</a>
											</Link>
										</h3>
										{/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
									</div>
									<p className="text-sm font-medium text-gray-900">
										{product.price}.00 Bs
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export const LayoutItemListAdmin: FC<Props> = ({ products }) => {
	const router = useRouter()

	const onDeleteData = async (id: string) => {
		Swal.fire({
			title: 'Está seguro?',
			text: "No podrás revertir esto!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, bórralo!'
		}).then( async (result) => {
			if (result.isConfirmed) {
				Swal.fire({ 
						title: 'Eliminado!',
						text: 'El producto ha sido eliminado.',
						icon: 'success',
						timer: 1000,
						showConfirmButton: false,

					}),
				// await axios.put(`${process.env.APIS_URL}/api/site/removecategory/${process.env.API_SITE}`, {category: id})
				await axios.delete(`${process.env.APIP_URL}/api/hardware/${id}`)
				router.reload()
			}
		})
		// router.reload()
	}
	return (
		<div className="bg-white lg:hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
					{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

					<div className="grid grid-cols-2 gap-y-6 gap-x-6 md:grid-cols-4 lg:grid-cols-4">
						{products.map((product, i) => (
							<div key={i}>

							<Link href={`/admin/products/${product.slug}`}>
							<div key={i} className="group">
								<div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none relative ">
								<Image
									src={product.image[0]}
									alt={product.name}

									width={500}
									height={500}
									layout="responsive"
									objectFit="contain"
								/>
									
								
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700">
											<a href="#">
														<span aria-hidden="true" className="inset-0" />
														{product.name}
												</a>
										</h3>
										{/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
									</div>
									{/* <p className="text-sm font-medium text-gray-900">
									{product.price}.00 Bs
								</p> */}
								</div>
								
							</div>
							</Link>
							<div onClick={() => onDeleteData(product._id)}  className="mt-4 transition text-center duration-150 ease-in-out hover:bg-orange-600 focus:outline-none border bg-orange-500 rounded text-white px-8 py-2 text-sm">Eliminar</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export const LayoutMarkListAdmin: FC<LayoutMarkListAdmin> = ({ marks }) => {
	const router = useRouter()

	const onDeleteData = async (id: string) => {
		Swal.fire({
			title: 'Está seguro?',
			text: "No podrás revertir esto!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, bórralo!'
		}).then( async (result) => {
			if (result.isConfirmed) {
				Swal.fire({ 
						title: 'Eliminado!',
						text: 'La marca ha sido eliminada.',
						icon: 'success',
						timer: 1000,
						showConfirmButton: false,

					}),
				// await axios.put(`${process.env.APIS_URL}/api/site/removecategory/${process.env.API_SITE}`, {category: id})
				await axios.put(`${process.env.APIP_URL}/api/marks/${id}`)
				router.reload()
			}
		})
		// router.reload()
	}
	return (
		<div className="bg-white lg:hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
					{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

					<div className="grid grid-cols-2 gap-y-6 gap-x-6 md:grid-cols-4 lg:grid-cols-4">
						{marks.map((product, i) => (
							<div key={i}>

							<Link href={`/admin/marks/${product.href}`}>
							<div key={i} className="group">
								<div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none relative ">
								<Image
									src={product.image}
									alt={product.name}

									width={500}
									height={500}
									layout="responsive"
									objectFit="contain"
								/>
									
								
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700">
											<a href="#">
														<span aria-hidden="true" className="inset-0" />
														{product.name}
												</a>
										</h3>
										{/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
									</div>
									{/* <p className="text-sm font-medium text-gray-900">
									{product.price}.00 Bs
								</p> */}
								</div>
								
							</div>
							</Link>
							<div onClick={() => onDeleteData(product._id)}  className="mt-4 transition text-center duration-150 ease-in-out hover:bg-orange-600 focus:outline-none border bg-orange-500 rounded text-white px-8 py-2 text-sm">Eliminar</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};


export const LayoutCategoryListAdmin: FC<LayoutCategoryListAdmin> = ({ data }) => {
	const router = useRouter()
	const onDeleteData = async (id: string) => {
		Swal.fire({
			title: 'Está seguro?',
			text: "No podrás revertir esto!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, bórralo!'
		}).then( async (result) => {
			if (result.isConfirmed) {
				Swal.fire({ 
						title: 'Eliminado!',
						text: 'La categoría ha sido eliminado.',
						icon: 'success',
						timer: 1000,
						showConfirmButton: false,

					}),
				await axios.put(`${process.env.APIS_URL}/api/site/removecategory/${process.env.API_SITE}`, {category: id})
				router.reload()
			}
		})
  }
	return (
		<div className="bg-white lg:hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
					{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

					<div className="grid grid-cols-2 gap-y-6 gap-x-6 md:grid-cols-4 lg:grid-cols-4">
						{data.map((d, i) => (
							<div key={i}>

							<Link  href={`/admin/sites/${d.href}`} className="group">
								<a>
									<div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none relative ">
										<Image
											src={d.imageSrc}
											alt={d.name}
											width={300}
											height={300}
											objectFit={'cover'}
										/>
										
									</div>
									<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700">
											
														{d.name}
										</h3>
										{/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
									</div>
									{/* <p className="text-sm font-medium text-gray-900">
									{product.price}.00 Bs
								</p> */}
								</div>
								</a>
							</Link>
							<div onClick={() => onDeleteData(d._id)}  className="mt-4 transition text-center duration-150 ease-in-out hover:bg-orange-600 focus:outline-none border bg-orange-500 rounded text-white px-8 py-2 text-sm">Eliminar</div>
						</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export const LayoutSectionListAdmin: FC<LayoutSectionListAdmin> = ({ data, category }) => {
	const router = useRouter()
  const onDeleteData = async (id: string) => {
		const data = {section: id, category: category }
		Swal.fire({
			title: 'Está seguro?',
			text: "No podrás revertir esto!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, bórralo!'
		}).then( async (result) => {
			if (result.isConfirmed) {
				Swal.fire({ 
						title: 'Eliminado!',
						text: 'La sección ha sido eliminado.',
						icon: 'success',
						timer: 1000,
						showConfirmButton: false,
					}),
				// await axios.put(`${process.env.APIS_URL}/api/site/removecategory/${process.env.API_SITE}`, {category: id})
				await axios.put(`${process.env.APIS_URL}/api/site/removesection/${process.env.API_SITE}`, data)
				router.reload()
			}
		})
    // router.reload()
  }
	return (
		<div className="bg-white lg:hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
					{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

					<div className="grid grid-cols-2 gap-y-6 gap-x-6 md:grid-cols-4 lg:grid-cols-4">
						{data.map((d, i) => (
							<div key={i}>
							<Link  href={`/admin/sites/${router.query.category}/${d.href}`} className="group">
								<a>

								<div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none ">
									<Image
										src={d.imageSrc}
										alt={d.name}
										width={300}
										height={300}
										objectFit={'cover'}
									/>
									
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700">
											<span aria-hidden="true" className="inset-0" />
											{d.name}
										</h3>
										{/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
									</div>
									{/* <p className="text-sm font-medium text-gray-900">
									{product.price}.00 Bs
								</p> */}
								</div>
								</a>
							</Link>
							<div onClick={() => onDeleteData(d._id)}  className="mt-4 transition text-center duration-150 ease-in-out hover:bg-orange-600 focus:outline-none border bg-orange-500 rounded text-white px-8 py-2 text-sm">Eliminar</div>
						</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export const LayoutFeaturedListAdmin: FC<LayoutFeaturedListAdmin> = ({ data, category }) => {
	const router = useRouter()
  const onDeleteData = async (id: string) => {
    const data = {featured: id, category: category }
		Swal.fire({
			title: 'Está seguro?',
			text: "No podrás revertir esto!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, bórralo!'
		}).then( async (result) => {
			if (result.isConfirmed) {
				Swal.fire({ 
						title: 'Eliminado!',
						text: 'El destacado ha sido eliminado.',
						icon: 'success',
						timer: 1000,
						showConfirmButton: false,
					}),
				// await axios.put(`${process.env.APIS_URL}/api/site/removecategory/${process.env.API_SITE}`, {category: id})
				// await axios.put(`${process.env.APIS_URL}/api/site/removesection/${process.env.API_SITE}`, data)
				await axios.put(`${process.env.APIS_URL}/api/site/removefeatured/${process.env.API_SITE}`, data)
				router.reload()
			}
		})
    // router.reload()
  }
	return (
		<div className="bg-white lg:hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
					{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

					<div className="grid grid-cols-2 gap-y-6 gap-x-6 md:grid-cols-4 lg:grid-cols-4">
						{data.map((d, i) => (
							<div key={i} >
								<Link href={`/admin/sites/${router.query.category}/f/${d.href}`}>
								<a className="group">
								<div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none relative ">
									<Image
										src={d.imageSrc}
										alt={d.name}
										width={300}
										height={300}
										objectFit={'cover'}
									/>
									
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700">
										
														{d.name}
										</h3>
										{/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
									</div>
									{/* <p className="text-sm font-medium text-gray-900">
									{product.price}.00 Bs
								</p> */}
								</div>
								
								</a>
								</Link>
								<div onClick={() => onDeleteData(d._id)}  className="mt-4 transition text-center duration-150 ease-in-out hover:bg-orange-600 focus:outline-none border bg-orange-500 rounded text-white px-8 py-2 text-sm">Eliminar</div>
							</div>
							
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export const LayoutItemsListAdmin: FC<LayoutItemsListAdmin> = ({ data, category, section }) => {
	const router = useRouter()
  const onDeleteData = async (id: string) => {
    const data = {item: id, category: category, section: section }
		Swal.fire({
			title: 'Está seguro?',
			text: "No podrás revertir esto!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, bórralo!'
		}).then( async (result) => {
			if (result.isConfirmed) {
				Swal.fire({ 
						title: 'Eliminado!',
						text: 'El Item ha sido eliminado.',
						icon: 'success',
						timer: 1000,
						showConfirmButton: false,
					}),
				// await axios.put(`${process.env.APIS_URL}/api/site/removecategory/${process.env.API_SITE}`, {category: id})
				// await axios.put(`${process.env.APIS_URL}/api/site/removesection/${process.env.API_SITE}`, data)
				// await axios.put(`${process.env.APIS_URL}/api/site/removefeatured/${process.env.API_SITE}`, data)
				await axios.put(`${process.env.APIS_URL}/api/site/removeitem/${process.env.API_SITE}`, data)
				router.reload()
			}
		})
    // router.reload()
  }
	return (
		<div className="bg-white lg:hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
					{/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					Customers also purchased
				</h2> */}

					<div className="grid grid-cols-2 gap-y-6 gap-x-6 md:grid-cols-4 lg:grid-cols-4">
						{data.map((d, i) => (
							<div key={i}>
								<Link  href={`/admin/sites/${router.query.category}/${router.query.section}/${d.href}`} className="group">
									<a>
									<div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none ">
										<Image
											src={d.imageSrc}
											alt={d.name}
											width={300}
											height={300}
											objectFit={'cover'}
										/>
										
									</div>
									<div className="mt-4 flex justify-between">
										<div>
											<h3 className="text-sm text-gray-700">
												{d.name}
											</h3>
											{/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
										</div>
										{/* <p className="text-sm font-medium text-gray-900">
										{product.price}.00 Bs
									</p> */}
									</div>
									</a>
									
								</Link>
									<div onClick={() => onDeleteData(d._id)}  className="mt-4 transition text-center duration-150 ease-in-out hover:bg-orange-600 focus:outline-none border bg-orange-500 rounded text-white px-8 py-2 text-sm">Eliminar</div>
							</div>

						))}
					</div>
				</div>
			</div>
		</div>
	);
};