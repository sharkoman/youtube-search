import { searchYoutube } from 'api';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { searchParamsSelector } from 'store/slices';

const Home: NextPage = () => {
	const search = useSelector(searchParamsSelector);
	console.log('redux-search-slice', search);

	const testYoutubeAPI = async () => {
		const results = await searchYoutube({
			q: 'spongpop',
		});

		console.log('Youtube API results', results.items);
	};

	useEffect(() => {
		testYoutubeAPI();
	}, []);

	return (
		<div className="container">
			<Head>
				<title>Youtube</title>
				<meta name="description" content="Youtube search videos" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h2>Heading</h2>
			</main>

			<footer>footer...</footer>
		</div>
	);
};

export default Home;
