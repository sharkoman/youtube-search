import React, { FormEvent } from 'react';
import { SearchIcon } from 'components';
import { useForm } from 'react-hook-form';

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const SearchForm: React.FC<Props> = () => {
	const { handleSubmit, register } = useForm({
		defaultValues: {
			q: '',
		},
	});

	const onSubmit = (data: any) => console.log(data);

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
