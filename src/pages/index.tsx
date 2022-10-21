import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { fetchSearchResults, searchParamsSelector } from 'store/slices';
import { useAppDispatch, useAppSelector } from 'store/store';

const Home: NextPage = () => {
	const { isLoading, results } = useAppSelector(searchParamsSelector);
	const dispatch = useAppDispatch();
	console.log('redux-search-slice');

	console.log({results});
	

	useEffect(() => {
		dispatch(fetchSearchResults({
			q: 'spongpop',
		}));
	}, [dispatch]);

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
