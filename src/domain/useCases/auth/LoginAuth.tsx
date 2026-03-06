import { AuthRepositoryImpl } from "../../../data/repositories/AuthRepository";
    const { login } = new AuthRepositoryImpl();
    export const LoginAuthUseCase = async (documento: string, password: string) => {
        return await login(documento, password);
    }