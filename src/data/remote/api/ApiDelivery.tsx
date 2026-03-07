import axios from "axios";
const ApiDelivery = axios.create({
  baseURL: 'http://10.86.79.242:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
export { ApiDelivery };