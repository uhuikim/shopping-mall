import { http, HttpResponse } from 'msw';
import { ProductSummary } from 'types';
import fixtures from '../../fixtures';

const BASE_URL = 'https://shop-demo-api-01.fly.dev';

const productSummaries: ProductSummary[] = fixtures.products
  .map((product) => ({
    id: product.id,
    category: product.category,
    thumbnail: { url: product.images[0].url },
    name: product.name,
    price: product.price,
  }));

const handlers = [
  http.get(`${BASE_URL}/products`, () => {
    const products = [
      {
        category: 'Fruits', price: '$1', stocked: true, name: 'Apple',
      },
    ];
    return new HttpResponse(JSON.stringify(products), {
      status: 200,
    });
  }),
  http.get(`${BASE_URL}/categories`, () => new HttpResponse(JSON.stringify(
    { categories: fixtures.categories },
  ))),
  http.get(
    `${BASE_URL}/products`,
    () => new HttpResponse(JSON.stringify(
      { products: productSummaries },
    )),

  ),

  http.get(`${BASE_URL}/products/:id`, ({ params }) => {
    const product = fixtures.products.find((i) => i.id === params.id);
    if (!product) {
      return new HttpResponse(null, {
        status: 404,
      });
    }
    return new HttpResponse(JSON.stringify(
      product,
    ));
  }),

  http.get(
    `${BASE_URL}/cart`,
    () => new HttpResponse(JSON.stringify(
      fixtures.cart,
    )),
  ),
  http.post(`${BASE_URL}/cart/line-items`, () => new HttpResponse(null, {
    status: 201,
  })),
];

export default handlers;
