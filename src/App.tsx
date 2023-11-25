import ErrorBoundary from '@components/ErrorBoundary';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import initMSW from './__mocks__';

await initMSW();

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
