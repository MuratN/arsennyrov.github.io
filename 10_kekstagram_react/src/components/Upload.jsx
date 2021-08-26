import React, { useState } from "react";
import Slider from "./Slider";

export function Upload(props) {
	const { srcupload, onDeleteUp, classname } = props;
	const [classeffect, setClasseffect] = useState("effect-image-preview");
	const [classline, setClassLine] = useState("upload-effect-level");
	const [value0, setValue0] = useState(1);
	const [filtername, setFilterName] = useState("none");

	return (
		<div className={classname}>
			<div className='upload-effect'>
				<div className='upload-effect__container'>
					<fieldset className='upload-resize-controls'>
						<button
							type='button'
							className='upload-resize-control upload-resize-controls-button upload-resize-controls-button-dec'
							/* 							onClick={(e) => {
								setValue0(e.target.value - 1);
								console.log(e.target.value);
								// eslint-disable-next-line no-undef
								style = {{transform: `translateY(${value0})`}};
							} */
						>
							–
						</button>
						<input
							type='text'
							className='upload-resize-control upload-resize-controls-value'
							value='100%'
							readOnly
							title='Image Scale'
							name='scale'
						/>
						<button
							type='button'
							className='upload-resize-control upload-resize-controls-button upload-resize-controls-button-inc'
						>
							+
						</button>
					</fieldset>

					<div className='upload-form-preview'>
						<div></div>
						<img
							src={srcupload}
							alt='photoeffect'
							className={classeffect}
							style={{ filter: `${filtername}(${value0})` }}
						/>
					</div>

					<fieldset className='upload-effect-controls'>
						<div className={classline}>
							<div
								className='upload-effect-level-line'
								/* Здесь меняем интенсивность фильтров */
								onChange={(e) => {
									switch (filtername) {
										case "grayscale":
											setValue0(e.target.value / 100);
											break;
										case "sepia":
											setValue0(e.target.value / 100);
											break;
										case "invert":
											setValue0(
												(100 * e.target.value) / 100 +
													"%"
											);
											break;
										case "blur":
											/* + 3 * ipMove / wLine + "px" + ' */
											setValue0(
												(3 * e.target.value) / 100 +
													"px"
											);
											break;
										case "brightness":
											/* + (1 + 2 * ipMove / wLine) +  */
											setValue0(
												1 + (2 * e.target.value) / 100
											);
											break;
										default:
									}
								}}
							>
								<div className='upload-effect-level-pin'></div>
								<Slider />
								<div className='upload-effect-level-val'></div>
							</div>
						</div>

						<input
							type='radio'
							name='effect'
							id='upload-effect-none'
							value='none'
							onClick={(e) => {
								setClasseffect("effect-image-preview");
								setFilterName("none");
								setClassLine("upload-effect-level hidden");
							}}
						/>
						<label
							className='upload-effect-label'
							htmlFor='upload-effect-none'
						>
							<div
								className='upload-effect-preview'
								style={{ backgroundImage: `url(${srcupload})` }}
							></div>
							Оригинал
						</label>

						<input
							type='radio'
							name='effect'
							id='upload-effect-chrome'
							value='chrome'
							onClick={(e) => {
								setClasseffect(
									"effect-image-preview effect-chrome"
								);
								setFilterName("grayscale");
								setClassLine("upload-effect-level");
							}}
						/>
						<label
							className='upload-effect-label upload-effect-label-chrome'
							htmlFor='upload-effect-chrome'
						>
							<div
								className='upload-effect-preview'
								style={{ backgroundImage: `url(${srcupload})` }}
							></div>
							Хром
						</label>

						<input
							type='radio'
							name='effect'
							id='upload-effect-sepia'
							value='sepia'
							onClick={(e) => {
								setClasseffect(
									"effect-image-preview effect-sepia"
								);
								setFilterName("sepia");
								setClassLine("upload-effect-level");
							}}
						/>
						<label
							className='upload-effect-label upload-effect-label-sepia'
							htmlFor='upload-effect-sepia'
						>
							<div
								className='upload-effect-preview'
								style={{ backgroundImage: `url(${srcupload})` }}
							></div>
							Сепия
						</label>

						<input
							type='radio'
							name='effect'
							id='upload-effect-marvin'
							value='marvin'
							onClick={(e) => {
								setClasseffect(
									"effect-image-preview effect-marvin"
								);
								setFilterName("invert");
								setClassLine("upload-effect-level");
							}}
						/>
						<label
							className='upload-effect-label upload-effect-label-marvin'
							htmlFor='upload-effect-marvin'
						>
							<div
								className='upload-effect-preview'
								style={{ backgroundImage: `url(${srcupload})` }}
							></div>
							Марвин
						</label>

						<input
							type='radio'
							name='effect'
							id='upload-effect-phobos'
							value='phobos'
							onClick={(e) => {
								setClasseffect(
									"effect-image-preview effect-phobos"
								);
								setFilterName("blur");
								setClassLine("upload-effect-level");
							}}
						/>
						<label
							className='upload-effect-label upload-effect-label-phobos'
							htmlFor='upload-effect-phobos'
						>
							<div
								className='upload-effect-preview'
								style={{ backgroundImage: `url(${srcupload})` }}
							></div>
							Фобос
						</label>

						<input
							type='radio'
							name='effect'
							id='upload-effect-heat'
							value='heat'
							onClick={(e) => {
								setClasseffect(
									"effect-image-preview effect-heat"
								);
								setFilterName("brightness");
							}}
						/>
						<label
							className='upload-effect-label'
							htmlFor='upload-effect-heat'
						>
							<div
								className='upload-effect-preview'
								style={{ backgroundImage: `url(${srcupload})` }}
							></div>
							Зной
						</label>
					</fieldset>

					<input
						className='upload-form-hashtags'
						name='hashtags'
						placeholder='#хэш-тег'
					/>

					<textarea
						className='upload-form-description'
						name='description'
						placeholder='Ваш комментарий...'
					></textarea>

					<button
						className='upload-form-cancel'
						type='reset'
						id='upload-cancel'
						onClick={() => onDeleteUp()}
					></button>
					<button
						className='upload-form-submit'
						type='submit'
						id='upload-submit'
					>
						Отправить
					</button>
				</div>
			</div>
		</div>
	);
}
