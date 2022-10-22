import React, { FormEvent, useEffect } from 'react';
import { SearchIcon } from 'components';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'store/store';
import { YoutubeSearchParams } from 'models';
import { fetchSearchResults } from 'store/slices';

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const SearchForm: React.FC<Props> = () => {
	const dispatch = useAppDispatch();

	const { handleSubmit, register, setFocus, reset } = useForm<Partial<YoutubeSearchParams>>({
		defaultValues: {
			q: '',
		},
	});

	const onSubmit = (data: Partial<YoutubeSearchParams>) => {
		console.log(data);
		dispatch(fetchSearchResults(data));
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
