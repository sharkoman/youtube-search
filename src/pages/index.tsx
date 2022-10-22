import { Layout } from 'components';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
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
		<>
			<Head>
				<title>Youtube</title>
				<meta name="description" content="Youtube search videos" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<picture>
					<source media="(min-width: 992px)" srcSet="/images/youtube-logo.svg" />
					<source media="(max-width: 991px)" srcSet="/images/youtube-logo-small.svg" />
					<img src="/images/youtube-logo-small.svg" alt="Youtube" />
				</picture>
			</div>
		</>
	);
};

export default Home;
