import { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import PageTitle from './components/pageTitle/PageTitle';
import Layout from './Layout';
import HomePage from './page/homePage/homePage';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';

interface Route {
  path: string;
  element: ReactNode;
  pageTitle?: string;
  children?: Route[];
}

const router: Route[] = [
  {
    path: '/',
    element: <HomePage />,
    pageTitle: 'Home Page',
  },
  {
    path: '*',
    element: <NotFoundPage />,
    pageTitle: '404',
  },
];

function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Layout>
            <Routes>
              {router.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <>
                      {route.pageTitle && <PageTitle title={route.pageTitle} />}
                      {route.element}
                    </>
                  }
                />
              ))}
            </Routes>
          </Layout>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
