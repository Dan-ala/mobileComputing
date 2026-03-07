import { AuthRepositoryImpl } from "../../../data/repositories/products/AuthRepository";
import { Product } from "../../entities/Product";
const { register } = new AuthRepositoryImpl();
export const RegisterAuthUseCase = async (product: Product) => {
    return await register(product);
}