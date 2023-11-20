import { RouterProvider } from 'react-router-dom';
import router from './router';
import initMSW from './__mocks__';

await initMSW();

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
