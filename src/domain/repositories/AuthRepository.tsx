import { User } from "../entities/User";
import { ResponseApiDelivery } from "../../data/remote/models/ResponsiveApiDelivery";
export interface AuthRepository {
  login(documento: string, password: string): Promise<ResponseApiDelivery>;
  register(user: User): Promise<ResponseApiDelivery>;
}