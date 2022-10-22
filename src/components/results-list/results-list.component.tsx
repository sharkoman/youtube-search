import { Spinner, VideoSnippet } from 'components';
import { YoutubeSearchResponse } from 'models';
import React from 'react';

interface Props {
	data: YoutubeSearchResponse;
	isLoading: boolean;
}

export const ResultsList: React.FC<Props> = ({ data, isLoading }) => {
	const results = data.items || [];

	if (isLoading) return <Spinner />;

	return (
		<div className="results-list">
			{results.map((item) => (
				<VideoSnippet key={item.id.videoId} video={item} />
			))}
		</div>
	);
};
