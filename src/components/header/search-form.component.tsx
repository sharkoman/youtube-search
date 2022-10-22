import React, { useEffect } from 'react';
import { SearchIcon } from 'components';
import { useForm } from 'react-hook-form';
import { YoutubeSearchParams } from 'models';
import { fetchSearchResults } from 'store/slices';
import { useYoutubeSearch } from 'hooks';
import { useRouter } from 'next/router';

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const SearchForm: React.FC<Props> = () => {
	const { push } = useRouter();
	const { dispatch } = useYoutubeSearch();

	const { handleSubmit, register, setFocus, reset } = useForm<Partial<YoutubeSearchParams>>({
		defaultValues: {
			q: '',
		},
	});

	const onSubmit = (params: Partial<YoutubeSearchParams>) => {
		push('/', {
			query: params
		});
		dispatch(fetchSearchResults(params));
	};

	useEffect(() => {
		setFocus('q');

		return () => {
			reset();
		};
	}, [setFocus, reset]);
	
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="search-form">
			<div className="search-form__wrapper">
				<input
					{...register('q')}
					className="search-form__input"
					autoFocus
					type="search"
					placeholder="Search"
					id="q"
				/>
				<button className="search-form__button" type="submit">
					<SearchIcon />
				</button>
			</div>
		</form>
	);
};
