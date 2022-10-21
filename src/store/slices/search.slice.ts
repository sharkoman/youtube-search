import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface SearchSlice {
	params: {[key: string]: string};
}

const initialState = {
	params: {},
} as SearchSlice;

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<SearchSlice['params']>) => {
			state.params = action.payload;
		},
		resetSearch: (state) => {
			state.params = initialState.params;
		},
	},
});

export const { setSearch, resetSearch } = searchSlice.actions;

export const searchParamsSelector = (state: RootState) => state.search;

export default searchSlice.reducer;