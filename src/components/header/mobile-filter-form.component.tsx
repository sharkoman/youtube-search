import React from 'react'

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const MobileFilterForm: React.FC<Props> = () => {
	return (
		<form className="filters__controls">
			<select name="type" id="type">
				<option value="all" selected>
					All
				</option>
				<option value="channel">Channel</option>
				<option value="playlist">Playlist</option>
			</select>
			<select name="date" id="date">
				<option value="channel" selected>
					Any Time
				</option>
				<option value="channel">Channel</option>
				<option value="playlist">Playlist</option>
			</select>
		</form>
	);
}