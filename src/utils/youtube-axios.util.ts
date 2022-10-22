import axios from 'axios';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 4,
		key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
	},
});