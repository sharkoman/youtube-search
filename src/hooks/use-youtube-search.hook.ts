import { fetchSearchResults, searchParamsSelector } from 'store/slices';
import { useAppDispatch, useAppSelector } from 'store/store';

export const useYoutubeSearch = () => {
	const data = useAppSelector(searchParamsSelector);
	const dispatch = useAppDispatch();
	
	return {
		...data,
		fetchSearchResults,
		dispatch
	};
};
