import { IBase } from './base';
import { IProduct } from './product';

export interface IUser extends IBase {
    cart: IProduct[];
    imageUrl: string;
    wishlist: IProduct[];
    username: string;
}
