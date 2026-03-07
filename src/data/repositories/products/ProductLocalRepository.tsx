import { Product } from "../../../domain/entities/Product";
import { ProductLocalRepository } from "../../../domain/repositories/products/ProductLocalRepository";
import { LocalStorage } from "../../sources/local/LocalStorage";

export class ProductLocalRepositoryImp implements ProductLocalRepository {

    async save(product: Product): Promise<void> {
        const { save } = LocalStorage();
        await save('product', JSON.stringify(product));
    }

    async getProduct(): Promise<Product> {
        const { getItem } = LocalStorage();
        const data = await getItem('product');
        const product: Product = JSON.parse(data as any);
        return product;
    }

    async remove(): Promise<void> {
        const { remove } = LocalStorage();
        await remove('product');
    }
}