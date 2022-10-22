import { Header } from 'components';
import React from 'react';

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<main className="main-content">
				<div className="container">
					{children}
				</div>
			</main>
		</>
	);
};
