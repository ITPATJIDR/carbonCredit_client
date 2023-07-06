import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	chooseMenu: ""
};

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialState,
  reducers: {
	changeMenu: (state,action) => {
		state.chooseMenu = action.payload
	}
  },
});

export const { changeMenu } = menuSlice.actions;
export default menuSlice.reducer