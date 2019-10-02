import React from 'react'
import { Platform } from 'react-native'
import { createStore, StoreProvider } from 'easy-peasy'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import AsnycStorage from '@react-native-community/async-storage'
import logger from 'redux-logger'
import Root from './src/routes'
import Models from './src/models'

const store = createStore(Models, {
  reducerEnhancer: reducer =>
    persistReducer(
      {
        key: 'easypeasystate',
        storage: AsnycStorage,
        whitelist: ['user']
      },
      reducer
      // whitelist:["preferences"]
    ),
  middleware: [logger]
})
const persistor = persistStore(store)
export default () => (
  <PersistGate persistor={persistor} loading={null}>
    <StoreProvider store={store}>
      <Root />
    </StoreProvider>
  </PersistGate>
)
