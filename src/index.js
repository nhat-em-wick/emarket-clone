import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles';
import {store, persistor} from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById('root'),
);


