import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductListPage from '.';
import { server } from '../../mocks/server';
import store from '../../states/store';

server.listen();
afterEach(() => server.resetHandlers());

describe('ProductListPage', () => {
  test('상품 리스트를 불러온다.', async () => {
    render(
      <Provider store={store}>
        <ProductListPage />
      </Provider>
    );

    await waitFor(() => screen.getByText('test product name'));
  });
});

server.close();
