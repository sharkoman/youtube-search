import { store } from 'store/store';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import 'styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
