import { ProductLocalRepositoryImp } from '../../../data/repositories/products/ProductLocalRepository';

const { getProduct } = new ProductLocalRepositoryImp();

export const GetUserLocalUseCase = async() => {
    return await getProduct();
}
