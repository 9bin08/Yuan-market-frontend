import { createBrowserRouter } from 'react-router-dom';
import MarketPage from '@pages/MarketPage';
import Layout from '@layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MarketPage />,
      },
    ],
  },
]);

export default router;
