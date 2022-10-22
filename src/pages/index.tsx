import { ResultsList } from 'components';
import { useYoutubeSearch } from 'hooks';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
	const { isLoading, data, fetchSearchResults, dispatch } = useYoutubeSearch();
	const router = useRouter();

	useEffect(() => {
		if (router.query['q']) {
			dispatch(
				fetchSearchResults({
					q: router.query['q'] as string,
				})
			);
		}
	}, [router]);

	return (
		<>
			<Head>
				<title>Youtube</title>
				<meta name="description" content="Youtube search videos" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<ResultsList
					data={data}
					isLoading={isLoading}
					totalCount={data?.pageInfo?.totalResults!}
				/>
			</div>
		</>
	);
};

export default Home;
