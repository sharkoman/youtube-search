import { store } from 'store/store';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import 'styles/main.scss';
import { Layout } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
