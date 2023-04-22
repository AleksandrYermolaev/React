import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import routes from './routes';
import { store } from './store';
import './styles/_global.scss';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import NotFound from 'pages/NotFound/NotFound';
import Forms from 'pages/Forms/Forms';

// const router = createBrowserRouter(routes);
{
  /* <RouterProvider router={createBrowserRouter(routes)} /> */
}

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="forms" element={<Forms />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
