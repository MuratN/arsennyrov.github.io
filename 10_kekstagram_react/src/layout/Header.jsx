/* eslint-disable no-undef */
import React, { useState } from "react";

function Header(props) {
	const { onChangeHeader } = props;

	return (
		<nav className='filters'>
			<form
				className='filters form-header'
				action='index.html'
				method='get'
				autocomplete='off'
			>
				<label className='filters-item'>
					<input
						type='radio'
						id='filter-recommend'
						className='filters-radio'
						name='filter'
						value='recommend'
						onClick={onChangeHeader}
					/>
					Рекомендуемые
				</label>

				<label className='filters-item'>
					<input
						type='radio'
						id='filter-popular'
						className='filters-radio'
						name='filter'
						value='popular'
						onClick={onChangeHeader}
					/>
					Популярные
				</label>

				<label className='filters-item'>
					<input
						type='radio'
						id='filter-discussed'
						className='filters-radio'
						name='filter'
						value='discussed'
						onClick={onChangeHeader}
					/>
					Обсуждаемые
				</label>

				<label className='filters-item'>
					<input
						type='radio'
						id='filter-random'
						className='filters-radio'
						name='filter'
						value='random'
						onClick={onChangeHeader}
					/>
					Случайные
				</label>
			</form>
		</nav>
	);
}

export { Header };
