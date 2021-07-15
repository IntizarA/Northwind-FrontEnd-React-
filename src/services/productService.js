import axios from "axios";
export class ProductServce{
getProducts(){
    return axios.get("http://localhost:8080/api/products/getall")
}
}