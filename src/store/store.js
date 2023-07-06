import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth-slice'
import menuSlice from './features/menu-slice'

export default configureStore({
  reducer: {
    auth: authSlice,
    menu: menuSlice
  },
})