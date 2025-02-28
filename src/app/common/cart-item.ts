import { Product } from './product';

export class CartItem {

    id: string;
    name: string;
    imageUrl: string;
    unitPrice: number;

    quantity: number;

    constructor(product: Product) {
        this.id = product.id ?? '';  // Provide a default empty string if undefined
        this.name = product.name ?? 'Unknown Product';
        this.imageUrl = product.imageUrl ?? 'default-image.jpg';
        this.unitPrice = product.unitPrice ?? 0;  // Default price as 0
    
        this.quantity = 1;
    }
}

