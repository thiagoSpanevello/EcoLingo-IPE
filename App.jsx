import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store'; // Importa a store e o persistor novos
import { AppNavigator } from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      {/* O PersistGate segura o app até carregar os dados salvos do celular */}
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}