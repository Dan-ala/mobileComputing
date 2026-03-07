import { Product } from "../../entities/Product";

export interface ProductLocalRepository {
    save(product: Product): void;
    getProduct(): Promise<Product>;
    remove(): Promise<void>;
}