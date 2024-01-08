import Homepage from '../pages/homepage/Homepage';
import Createpage from '../pages/createpage/Createpage';
import NotFoundPage from '../pages/notfoundpage/NotFoundPage';

const routes = [
  { path: '/', element: Homepage },
  { path: 'create', element: Createpage },
  { path: '404', element: NotFoundPage }
];

export default routes;
