import { MobileSearchBar, SearchIcon, SearchForm, MobileFilterForm } from 'components';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const Header: React.FC<Props> = () => {
	const [isSearchActive, setIsSearchActive] = useState(false);

	const toggleSearchBar = () => {
		setIsSearchActive((currentState) => !currentState);
	};

	return (
		<>
			<header className="header">
				<div className="container">
					<div className="header__inner">
						<div className="header__logo">
							<Link href="/">
								<a title="Youtube">
									<picture>
										<source
											media="(min-width: 992px)"
											srcSet="/images/youtube-logo.svg"
										/>
										<source
											media="(max-width: 991px)"
											srcSet="/images/youtube-logo-small.svg"
										/>
										<img src="/images/youtube-logo-small.svg" alt="Youtube" />
									</picture>
								</a>
							</Link>
						</div>

						<div className="header__options">
							<div className="header__search-form">
								<SearchForm />
							</div>

							<button className="header__search-btn" onClick={toggleSearchBar}>
								<SearchIcon />
							</button>
						</div>

						<MobileSearchBar
							isActive={isSearchActive}
							toggleSearchBar={toggleSearchBar}
						/>
					</div>
				</div>
			</header>

			<div className="filters__container">
				<div className="container">
					<div className="filters__controls">
						<MobileFilterForm />
					</div>
				</div>
			</div>
		</>
	);
};
