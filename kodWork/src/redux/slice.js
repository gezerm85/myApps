import { createSlice } from '@reduxjs/toolkit'



export const slice = createSlice({
  name: 'favorite',
  initialState :{
    favList: []
  },
  reducers: {
    favAdd: (state, action) =>{
      state.favList.push(action.payload);

    },
    favRemove: (state, action) => {
      state.favList = state.favList.filter(item => item.jobId !== action.payload.jobId);
    }
    
    
  },
})


export const { favAdd, favRemove, } = slice.actions

export default slice.reducer