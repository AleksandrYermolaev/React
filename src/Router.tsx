import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Forms from './pages/Forms/Forms';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="forms" element={<Forms />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
