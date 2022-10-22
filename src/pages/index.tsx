import { ResultsList } from 'components';
import { useYoutubeSearch } from 'hooks';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	const { isLoading, data } = useYoutubeSearch();

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
