import { YoutubeItemSnippet } from 'models';
import Image from 'next/image';
import React from 'react';

interface Props extends React.HTMLProps<HTMLDivElement> {
	video: YoutubeItemSnippet;
}

export const VideoSnippet: React.FC<Props> = ({ video }) => {
	return (
		<div className="video-snippet">
			<div className="video-snippet__thumb">
				<Image
					loading="lazy"
					src={video.snippet.thumbnails.medium.url}
					objectFit="cover"
					width="320"
					height="180"
					alt={video.snippet.title}
				/>
			</div>
			<div className="video-snippet__text-wrapper">
				<h3 className="video-snippet__title">{video.snippet.title}</h3>
				<h4 className="video-snippet__channel">{video.snippet.channelTitle}</h4>
				<p className="video-snippet__desc">{video.snippet.description}</p>
			</div>
		</div>
	);
};