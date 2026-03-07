import { Product } from "../../entities/Product";
import { ResponseApiDelivery } from "../../../data/remote/models/ResponsiveApiDelivery";
export interface AuthRepository {
  register(product: Product): Promise<ResponseApiDelivery>;
  // findBySerie(serie: string): Promise<ResponseApiDelivery>;
}