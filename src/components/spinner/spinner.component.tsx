import React from 'react';
import styles from './spinner.module.scss';

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const Spinner: React.FC<Props> = () => {
	return (<div className={styles["spinner__container"]}>
		<div className={styles['spinner']}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<div>Loading</div>
	</div>
	);
};
