export interface IHardware {
	_id: string;
	name: string;
	brand: string;
	image: string[];
	description: string;
	inStock: number;
	slug: string;
	category: string;
	section: string;
	item: string;
	price: number;
	oldPrice: number;
	color: string;
	tags: string[];
	client: string;
	status: boolean;
	site: string;
}