import { React } from "react";
import url2 from "../img/basket.png";
import url3 from "../img/avatar.png";
import "./CommentsList.css";

function CommentsList(props) {
	const { comments = [], onDeleteComm } = props;

	return (
		<>
			{comments.map((item, ind) => (
				<span className='list-item'>
					<div className='div-img'>
						<img
							src={url3}
							className='url3'
							width='40'
							alt='avataricon'
						/>
						<span className='item-text'>{item}</span>
					</div>

					<button
						className='basket'
						value='basket'
						onClick={onDeleteComm}
					>
						<img src={url2} width='20' alt='basket' />
					</button>

					<hr class='hr-shelf' />
				</span>
			))}
		</>
	);
}

export default CommentsList;
