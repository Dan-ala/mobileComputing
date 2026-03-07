import { ProductLocalRepositoryImp } from '../../../data/repositories/products/ProductLocalRepository';
import { Product } from '../../entities/Product';

const { save } = new ProductLocalRepositoryImp();

export const SaveProductUseCase = async(product: Product) => {
    return await save(product);
}