import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  // {
  //   path: '/setting',
  //   element: <SettingPage />,
  // },
]);

// 타입을 명시적으로 지정
export type AppRouter = typeof router;
