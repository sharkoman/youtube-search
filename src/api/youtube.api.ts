import axios from '../utils/youtube-axios.util';
import { YoutubeSearchParams, YoutubeSearchResponse } from 'models';

export const searchYoutube = async (params: Partial<YoutubeSearchParams>) => {
	const response = await axios.get<YoutubeSearchResponse>('/search', {
		params,
	});

	return response.data;
}
