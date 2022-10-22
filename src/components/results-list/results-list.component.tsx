import { Spinner, VideoSnippet } from 'components';
import { YoutubeSearchResponse } from 'models';
import Image from 'next/image';
import React from 'react';

interface Props {
	data: YoutubeSearchResponse;
	isLoading: boolean;
	totalCount?: number;
}

export const ResultsList: React.FC<Props> = ({ data, isLoading, totalCount }) => {
	const results = data.items || [];
	const count = totalCount?.toLocaleString('en-US');

	if (isLoading) return <Spinner />;

	return (
		<div className="results-list">
			{data.items && data.items.length > 0 && (
				<div className="results-list__header">
					<div className="results-list__total-count">About {count} filtered results</div>
					<div className="results-list__filter">
						<button className="results-list__filter-btn">
							<Image
								src="/images/filter-icon.svg"
								width={16}
								height={16}
								alt="Filter"
							/>
							Filter
						</button>
					</div>
				</div>
			)}

			{results.map((item) => (
				<VideoSnippet key={item.id.videoId} video={item} />
			))}
		</div>
	);
};
