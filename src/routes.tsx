import Layout from 'components/Layout';
import CartPage from 'pages/CartPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import ProductDetailPage from 'pages/ProductDetailPage';
import ProductListPage from 'pages/ProductListPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/products', element: <ProductListPage /> },
      { path: '/products/:id', element: <ProductDetailPage /> },
      { path: '/cart', element: <CartPage /> },
      // { path: '/order', element:  },
      // { path: '/order/complete', element:  },
      // { path: '/orders', element:  },
      // { path: '/orders/:id', element:  },
      // { path: '/login', element:  },
      // { path: '/signup', element:  },
      // { path: '/signup/complete', element:  },
    ],
  },
];

export default routes;
