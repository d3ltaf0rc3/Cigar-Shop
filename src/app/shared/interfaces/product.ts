import { IBase } from './base';

export interface IProduct extends IBase {
    title: string;
    imageUrl: string;
    price: number;
    brand: string;
    vitola: string;
    length: number;
    ring: number;
    strength: string;
    time: number;
    description: string;
}
