import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeSearchBook: [],
    activeBook: []
}

export const setSearchBook = createSlice({
    name: 'searchBook',
    initialState,
    reducers: {
      setSearchBookResult: (state, action) => {
        state.activeSearchBook = action.payload
      },
      setActiveBook: (state, action) => {
        state.activeBook = action.payload  
        console.log(state.activeBook);
      }
    },
})

export const { setSearchBookResult , setActiveBook } = setSearchBook.actions

export default setSearchBook.reducer