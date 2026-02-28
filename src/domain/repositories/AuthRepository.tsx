import { User } from "../entities/User";
import { ResponseApiDelivery } from "../../data/remote/models/ResponsiveApiDelivery";
export interface AuthRepository {
  register(user: User): Promise<ResponseApiDelivery>;
}