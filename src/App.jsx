import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from 'styles/globalStyles';

import Layout from 'components/common/Layout';
import ProductListPage from 'pages/ProductListPage';
import ProductDetailPage from 'pages/ProductDetailPage';
import NotFoundPage from 'pages/NotFoundPage';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route path="/react-shopping-cart/*" element={<Layout />}>
          <Route path="" element={<ProductListPage />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
