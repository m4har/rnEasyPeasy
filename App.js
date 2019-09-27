import React from 'react'
import { Platform } from 'react-native'
import { createStore, StoreProvider } from 'easy-peasy'
import { composeWithDevTools } from 'remote-redux-devtools'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import AsnycStorage from '@react-native-community/async-storage'
import Root from './src/routes'
import Models from './src/models'

const store = createStore(Models, {
  compose: composeWithDevTools({ realtime: true, trace: true, port: 5678, hostname: 'localhost', name: Platform.OS }),
  reducerEnhancer: reducer =>
    persistReducer(
      {
        key: 'easypeasystate',
        storage: AsnycStorage,
        whitelist: ['user']
      },
      reducer
      // whitelist:["preferences"]
    )
})
const persistor = persistStore(store)
export default () => (
  <PersistGate persistor={persistor} loading={null}>
    <StoreProvider store={store}>
      <Root />
    </StoreProvider>
  </PersistGate>
)
