import { Layout, ResultsList } from 'components';
import type { NextPage } from 'next';
import Head from 'next/head';
import { searchParamsSelector } from 'store/slices';
import { useAppSelector } from 'store/store';

const Home: NextPage = () => {
	const { isLoading, data } = useAppSelector(searchParamsSelector);

	return (
		<>
			<Head>
				<title>Youtube</title>
				<meta name="description" content="Youtube search videos" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<ResultsList data={data} isLoading={isLoading} />
			</div>
		</>
	);
};

export default Home;
