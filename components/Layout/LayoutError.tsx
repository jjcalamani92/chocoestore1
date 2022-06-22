export const LayoutError = () => {
	return (
		<section className="flex items-center h-full p-16 bg-coolGray-50 text-coolGray-800">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<div className="max-w-md text-center">
					<h2 className="mb-8 font-extrabold text-9xl text-coolGray-400">
						<span className="sr-only">Error</span>404
					</h2>
					<p className="text-2xl font-semibold md:text-3xl">
						Lo sentimos, no pudimos encontrar esta página.
					</p>
					<p className="mt-4 mb-8 text-coolGray-600">
						Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra
						página de inicio.
					</p>
					<a
						rel="noopener noreferrer"
						href="#"
						className="px-8 py-3 font-semibold rounded bg-red-500 hover:bg-red-600 text-white inline-block"
					>
						Volver a la página de inicio
					</a>
				</div>
			</div>
		</section>
	);
};
