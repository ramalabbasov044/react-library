import { configureStore } from '@reduxjs/toolkit'
import setSearchBook from '../features/setSearchBook/setSearchBook'

export const store = configureStore({
  reducer: {
    searchBook: setSearchBook,
  },
})