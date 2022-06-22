export interface IUser {
	_id: string;
	email: string;
	role: string;
	username?: string;
	image?: string;
}

export interface UserS {
	_id      : string;
	username     : string;
	email    : string;
	password?: string;
	role     : string;
	image     : string;
	site		: string[];
	status: boolean;
	google: boolean;

	createdAt?: string;
	updatedAt?: string;
}