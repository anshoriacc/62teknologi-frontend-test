import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import Layout from './Layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Detail = lazy(() => import('./pages/Detail'));

function Router() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Detail />} />
            </Routes>
          </Suspense>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default Router;
