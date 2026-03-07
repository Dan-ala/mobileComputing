import { ProductLocalRepositoryImp } from '../../../data/repositories/products/ProductLocalRepository';
const { remove } = new ProductLocalRepositoryImp();
export const RemoveUserLocalUseCase = async () => {
    return await remove();
}