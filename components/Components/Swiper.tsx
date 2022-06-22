import React, { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper";
import Image from "next/image";

// interface Props {
// 	products: IProduct[];
// }
interface Props1 {
	homes: any;
}
interface Props2 {
	image: string[];
}

interface Props {
	image: string[];
}

export const SwiperComponent: FC<Props> = ({ image }) => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true
				}}
				navigation={false}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false
				}}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{image.map((images, i) => (
					<SwiperSlide className="slide" key={i}>
						<Image
							src={`${images}`}
							width={500}
							height={600}
							objectFit="cover"
							alt=""
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export const SwiperDetail: FC<Props2> = ({ image }) => {
	const [activeThumb, setActiveThumb] = useState<any>(null);
	return (
		<div className="w-full">
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				centeredSlides={true}
				loop={image.length === 1 ? false : true}
				navigation={image.length === 1 ? false : false}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false
				}}
				pagination={{
					clickable: image.length === 1 ? false : true
				}}
				grabCursor={image.length === 1 ? false : true}
				thumbs={{ swiper: activeThumb }}
				modules={[Autoplay, Navigation, Pagination, Thumbs]}
				className="mb-2"
			>
				{image.map((images, i) => (
					<SwiperSlide className="w-screen" key={i}>
						<Image
							src={`${images}`}
							width={500}
							height={500}
							layout="responsive"
							objectFit="contain"
							alt=""
						/>
						{/* <img src={`${images}`} width="100%" alt="" /> */}
					</SwiperSlide>
				))}
			</Swiper>
			{image.length === 1 ? (
				""
			) : (
				<Swiper
					onSwiper={setActiveThumb}
					slidesPerView={4}
					spaceBetween={10}
					loop={true}
					navigation={false}
					// thumbs={{swiper:activeThumb}}
					modules={[Navigation, Pagination, Thumbs]}
				>
					{image.map((images, i) => (
						<SwiperSlide key={i}  >
							{/* <img src={`${images}`} alt="" /> */}
							<div className="border">
								<Image
									src={`${images}`}
									width={500}
									height={500}
									objectFit="cover"
									alt=""
									// className={ `${activeThumb ? 'border border-gray-900' : ''}`}
									// className="border border-gray-900"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</div>
	);
};

export const SwiperHome: FC<Props> = ({ image }) => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={image.length === 1 ? false : true}
				pagination={{
					clickable: true
				}}
				navigation={false}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false
				}}
				modules={[Autoplay, Pagination, Navigation]}
				
			>
				{image.map((images, i) => (
					<SwiperSlide key={i}>
						{/* <LayoutHome /> */}
						{/* <Image
							src={`${images}`}
							width={500}
							height={600}
							objectFit="cover"
							alt=""
						/> */}
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};