import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './features/home/Home';
import Receipt from './features/receipt/Receipt';
import './index.css';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/receipt', element: <Receipt /> },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
