import React from "react";
import { Message } from "./Message";

export function Photooverlay(props) {
	const {
		url0,
		index,
		photos = [],
		onDeleteOverlay,
		classnameoverlay,
	} = props;

	return (
		<div className={classnameoverlay}>
			<span
				className='gallery-overlay-close'
				onClick={() => onDeleteOverlay()}
			>
				&times;
			</span>
			<div className='gallery-overlay-preview'>
				<img
					src={url0}
					className='gallery-overlay-image'
					alt='overlay'
				/>
				<div className='gallery-overlay-controls'>
					<div className='gallery-overlay-controls-like'>
						Нравится
						<span className='likes-count'>
							{photos[index].likes}
						</span>
					</div>
					<div className='gallery-overlay-controls-comments'>
						<span className='comments-count'></span>
						{photos[index].comments.length} комментариев{" "}
					</div>

					{photos[index].comments.length > 0 ? (
						<Message
							avatar={"../../img/1.png"}
							comment={photos[index].comments[0].message}
						/>
					) : (
						""
					)}
					{photos[index].comments.length > 1 ? (
						<Message
							avatar={"../../img/2.png"}
							comment={photos[index].comments[1].message}
						/>
					) : (
						""
					)}
					{photos[index].comments.length > 2 ? (
						<Message
							avatar={"../../img/3.png"}
							comment={photos[index].comments[2].message}
						/>
					) : (
						""
					)}
					{photos[index].comments.length > 3 ? (
						<Message
							avatar={"../../img/4.png"}
							comment={photos[index].comments[3].message}
						/>
					) : (
						""
					)}
					{photos[index].comments.length > 4 ? (
						<Message
							avatar={"../../img/5.png"}
							comment={photos[index].comments[4].message}
						/>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
}
