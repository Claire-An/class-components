import { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import PageTitle from './components/pageTitle/PageTitle';
import Layout from './Layout';
import HomePage from './page/homePage/homePage';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';
import ThemeProvider from './providers/ThemeProvider';

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
    pageTitle: 'HomePage',
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
      <ThemeProvider>
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
                        {route.pageTitle && (
                          <PageTitle title={route.pageTitle} />
                        )}
                        {route.element}
                      </>
                    }
                  />
                ))}
              </Routes>
            </Layout>
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
