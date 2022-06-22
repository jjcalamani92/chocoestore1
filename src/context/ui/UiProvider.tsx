import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import { Site } from "../../interfaces";
import { UiContext, uiReducer } from "./";

export interface UiState {
	isMenuOpen: boolean;
	isSearchOpen: boolean;
	isCartOpen: boolean;
	site: Site
}

const UI_INITIAL_STATE: UiState = {
	isMenuOpen: false,
	isSearchOpen: false,
	isCartOpen: false,
	site: {
		_id: "w",
		title: "Fierros",
		domain: "fierrosferreteria.com",
		// logo: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647095547/piccoletti-logo_j6hxbw.jpg",
		logo: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648919933/Ferreteria/l91xephj1ctcxor7h06d.png",
		numberPhone: "68175851",
		address: "av fatima",
		description: "av fatima",
		type: "ecommerce",
		categories: [
			{
				_id: 'men',
				name: 'ferreteria',
				imageSrc:"https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
				featured: [
					{
						_id:"2",
						name: 'New Arrivals',
						href: '#',
						description: 'ropa para mujer',
						imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
						imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
					},
					
				],
				sections: [
					{
						_id: 'clothing',
						name: 'Clothing',
						href: '#',
						description: 'ropa para mujer',
						imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
						imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
						items: [
							{ 
								_id: '3',
								name: 'Tops', 
								href: '#',
								description: 'ropa para mujer',
								imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
								imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
							}
						],
					},
					
				],
			},
		],
		pages: [
			{ _id: '2', name: 'linea automotiva', href: '/' },
		],
	}
};

export const UiProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [site, setSite] = useState([]);
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
	useEffect(() => {
		fetch(`${process.env.APIS_URL}/api/site/${process.env.API_SITE}`)
			.then(res => res.json())
			.then(data => {
				dispatch({
	 				type: '[UI] - initialSite',
					payload: data
				})
			})
	}, [])
	// useEffect(() => {
	//   fetch('http://localhost:8000/api/robots')
	//     .then(res => res.json())
	//     .then(data => {
	//       dispatch({
	// 				type: '[UI] - initialSite',
	//         payload: {
	//           ...UI_INITIAL_STATE,
	//           sites: data?.data,
	//         }
	//       });
	//     });
	// }, []);


	const toggleSideMenu = () => {
		dispatch({ type: "[UI] - ToggleMenu" });
	};
	const toggleSideSearch = () => {
		dispatch({ type: "[UI] - ToggleSearch" });
	};
	const toggleSideCart = () => {
		dispatch({ type: "[UI] - ToggleCart" });
	};

	return (
		<UiContext.Provider
			value={{
				...state,

				// Methods
				toggleSideMenu,
				toggleSideSearch,
				toggleSideCart,

			}}
		>
			{children}
		</UiContext.Provider>
	);
};
