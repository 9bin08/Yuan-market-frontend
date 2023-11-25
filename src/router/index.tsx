import { createBrowserRouter } from 'react-router-dom';
import MarketPage from '@pages/MarketPage';
import Layout from '@layout';
import CartPage from '@pages/CartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>error 발생 !</div>,
    children: [
      {
        index: true,
        element: <MarketPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
