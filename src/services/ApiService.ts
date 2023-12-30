import axios from 'axios';
import {
  Cart, Category, ProductDetail, ProductSummary,
} from 'types';

const API_BASE_URL = process.env.API_BASE_URL
                     || 'https://shop-demo-api-01.fly.dev';

export default class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  private accessToken = '';

  setAccessToken(accessToken: string) {
    if (accessToken === this.accessToken) {
      return;
    }

    const authorization = accessToken ? `Bearer ${accessToken}` : undefined;

    this.instance = axios.create({
      baseURL: API_BASE_URL,
      headers: { Authorization: authorization },
    });

    this.accessToken = accessToken;
  }

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
    const { data } = await this.instance.get(`/products/${productId}`);
    return data;
  }

  async fetchCart(): Promise<Cart> {
    const { data } = await this.instance.get('/cart');
    return data;
  }

  async login({ email, password }: {
    email: string;
    password: string;
  }): Promise<string> {
    const { data } = await this.instance.post('/session', { email, password });
    const { accessToken } = data;
    return accessToken;
  }

  async addProductToCart({ productId, options, quantity }: {
    productId: string;
    options: {
      id: string;
      itemId: string;
    }[];
    quantity: number;
  }): Promise<void> {
    await this.instance.post('/cart/line-items', {
      productId, options, quantity,
    });
  }
}

export const apiService = new ApiService();
