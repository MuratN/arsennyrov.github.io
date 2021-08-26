import React, { useState } from "react";

export const Pagination = ({
	moviesPerPage,
	totalMovies,
	onClickPagination,
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<ul className='pagination'>
				{pageNumbers.map((number) => (
					<li className='page-item' onClick={onClickPagination}>
						<button href='!#' className='page-link'>
							{number}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
