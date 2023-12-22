import axios from 'axios';
import { Category, ProductDetail, ProductSummary } from 'types';

const API_BASE_URL = process.env.API_BASE_URL
                     || 'https://shop-demo-api-01.fly.dev';

export default class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async fetchCategories(): Promise<Category[]> {
    const { data } = await this.instance.get('/categories');
    const { categories } = data;
    return categories;
  }

  // fetchProducts({})x , fetchProducts()  로 쓰고 싶어서 기본값 {} 를 넣어준다.
  async fetchProducts({ categoryId } : {categoryId ?:string} = {}): Promise<ProductSummary[]> {
    const { data } = await this.instance.get('/products', {
      params: {
        categoryId,
      },
    });
    const { products } = data;

    return products;
  }

  async fetchProduct({ productId } : {productId ?:string} = {}): Promise<ProductDetail> {
    console.log(productId);
    const { data } = await this.instance.get(`/products/${productId}`);
    return data;
  }
}

export const apiService = new ApiService();
