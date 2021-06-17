import { IProduct } from './product';

export interface IUser {
    _id: string;
    cart: IProduct[];
    imageUrl: string;
    wishlist: IProduct[];
    username: string;
}
