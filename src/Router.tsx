import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import Home from './pages/Home';
import Edit from './pages/Edit';
import Add from './pages/Add';
import Detail from './pages/Detail';

function Router() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default Router;
