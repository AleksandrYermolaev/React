import Layout from 'components/Layout/Layout';
import About from 'pages/About/About';
import Forms from 'pages/Forms/Forms';
import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';

export default [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'forms',
        element: <Forms />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
