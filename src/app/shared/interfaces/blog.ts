import { IBase } from './base';

export interface IBlog extends IBase {
    title: string;
    imageUrl: string;
    content: string;
}
