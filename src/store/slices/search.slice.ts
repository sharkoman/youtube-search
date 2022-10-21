import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { searchYoutube } from 'api';
import { YoutubeItemSnippet, YoutubeSearchParams, YoutubeSearchResponse } from 'models';
import type { RootState } from '../store';

interface SearchSlice {
	queryParams: Partial<YoutubeSearchParams>;
	results: YoutubeItemSnippet[];
	isLoading: boolean;
	status: 'pending' | 'succeeded' | 'rejected' | 'idle';
}

const initialState = {
	queryParams: {},
	results: [],
	isLoading: false,
	status: 'idle',
} as SearchSlice;

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchParams: (state, action: PayloadAction<Partial<YoutubeSearchParams>>) => {
			state.queryParams = action.payload;
		},
		resetSearchParams: (state) => {
			state.queryParams = initialState.queryParams;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSearchResults.pending, (state) => {
			state.isLoading = true;
			state.status = 'pending';
		}),
		builder.addCase(fetchSearchResults.fulfilled, (state, { payload }) => {
			state.results = (payload as YoutubeSearchResponse).items;
			state.isLoading = false;
			state.status = 'succeeded';
		}),
		builder.addCase(fetchSearchResults.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.status = 'rejected';
		});
	},
});

export const fetchSearchResults = createAsyncThunk(
	'search/fetchSearchResults',
	async (params: Partial<YoutubeSearchParams>, thunkAPI) => {
		try {
			return await searchYoutube(params);
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

// export const fetchTodos = createAsyncThunk<any[]>('search/fetch', async () => {
// 	const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);

// 	// Alos, set a type for the `data` constant:
// 	const data: any[] = await response.json();
// 	return data;

// 	// We could also use `as` to coerce its type
// 	// as in the RTK docs.
// });

export const { setSearchParams, resetSearchParams } = searchSlice.actions;

export const searchParamsSelector = (state: RootState) => state.search;

export default searchSlice.reducer;
