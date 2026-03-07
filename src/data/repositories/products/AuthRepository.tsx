import { AxiosError } from "axios";
import { Product } from "../../../domain/entities/Product";
import { AuthRepository } from "../../../domain/repositories/products/AuthRepository";
import { ApiDelivery } from "../../remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../../remote/models/ResponsiveApiDelivery";
export class AuthRepositoryImpl implements AuthRepository {
  async register(product: Product): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>('products/create', product);
      return Promise.resolve(response.data);
    } catch (error) {
      let e = (error as AxiosError);
      console.log('Error: ' + JSON.stringify(e.response?.data));
      const apiError: ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
  }

    async login(documento: string, password: string): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>('users/login', {
        documento: documento,
        password: password
      });
      return Promise.resolve(response.data);
    } catch (error) {
      let e = (error as AxiosError);
      console.log('error' + JSON.stringify(e.response?.data));
      const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
  }
}