import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
  Navigate
} from 'react-router-dom';
import Greenhouse from './components/Greenhouse';
import Navigation from './components/Navigation';
import Thermometer from './components/Thermometer';
import Hygrometer from './components/Hygrometer';
import ClimateProvider from './context/ClimateContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />} >
      <Route path="thermometer" element={<ClimateProvider><Thermometer /></ClimateProvider>} />
      <Route path="hygrometer" element={<ClimateProvider><Hygrometer /></ClimateProvider>} />
      <Route path="/" element={<ClimateProvider><Greenhouse /></ClimateProvider>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
