
const Home = () => import('~/Pages')
const About = () => import('~/Pages/about/about')
const Contact = () => import('~/Pages/contact/contact')

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
];

export default routes;


    