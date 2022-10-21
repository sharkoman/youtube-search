export interface YoutubeSearchParams {
	q: string;
}

export interface YoutubeItemSnippet {
	kind: string;
	etag: string;
	id: ID;
	snippet: Snippet;
}

export interface YoutubeSearchResponse {
	items: YoutubeItemSnippet[];
	kind: string;
	pageInfo: PageInfo;
}

interface PageInfo {
	totalResults: number;
	resultsPerPage: number;
}

interface ID {
	kind: string;
	videoId: string;
}

interface Snippet {
	publishedAt: Date;
	channelId: string;
	title: string;
	description: string;
	thumbnails: Thumbnails;
	channelTitle: string;
	liveBroadcastContent: string;
	publishTime: Date;
}

interface Thumbnails {
	default: Default;
	medium: Default;
	high: Default;
}

interface Default {
	url: string;
	width: number;
	height: number;
}