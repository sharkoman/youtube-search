import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const Header: React.FC<Props> = () => {
	const [isSearchActive, setIsSearchActive] = useState(false);

	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<div className="header__logo">
						<Link href="/">
							<a title="Youtube">
								<span className="header__logo-large">
									<Image
										src="/images/youtube-logo.svg"
										width="160"
										height="56"
										alt="Youtube"
									/>
								</span>
								<span className="header__logo-small">
									<Image
										src="/images/youtube-logo-small.svg"
										width="45"
										height="56"
										alt="Youtube"
									/>
								</span>
							</a>
						</Link>
					</div>
					<div className="header__options">
						<button className="header__search-btn">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352c79.5 0 144-64.5 144-144S287.5 64 208 64 64 128.5 64 208s64.5 144 144 144z" />
							</svg>
						</button>
					</div>

					<div className="header__mobile-search">
						<div className="header__mobile-search-back">back</div>
						<div className="header__mobile-search-form">
							<input type="text" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
