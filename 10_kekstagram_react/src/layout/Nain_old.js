
				<div className='upload-overlay  hidden'>
                    <div className='upload-effect'>
                        <div className='upload-effect__container'>
                            <fieldset className='upload-resize-controls'>
                                <button
                                    type='button'
                                    className='upload-resize-control upload-resize-controls-button upload-resize-controls-button-dec'
                                >
                                    –
                                </button>
                                <input
                                    type='text'
                                    className='upload-resize-control upload-resize-controls-value'
                                    value='55%'
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
                                    src='img/upload-default-image.jpg'
                                    className='effect-image-preview'
                                />
                            </div>

                            <fieldset className='upload-effect-controls'>
                                <div className='upload-effect-level'>
                                    <div className='upload-effect-level-line'>
                                        <div className='upload-effect-level-pin'></div>
                                        <div className='upload-effect-level-val'></div>
                                    </div>
                                </div>

                                <input
                                    type='radio'
                                    name='effect'
                                    id='upload-effect-none'
                                    value='none'
                                />
                                <label
                                    className='upload-effect-label'
                                    htmlFor='upload-effect-none'
                                >
                                    <div className='upload-effect-preview'></div>
                                    Оригинал
                                </label>

                                <input
                                    type='radio'
                                    name='effect'
                                    id='upload-effect-chrome'
                                    value='chrome'
                                />
                                <label
                                    className='upload-effect-label upload-effect-label-chrome'
                                    htmlFor='upload-effect-chrome'
                                >
                                    <div className='upload-effect-preview'></div>
                                    Хром
                                </label>

                                <input
                                    type='radio'
                                    name='effect'
                                    id='upload-effect-sepia'
                                    value='sepia'
                                />
                                <label
                                    className='upload-effect-label upload-effect-label-sepia'
                                    htmlFor='upload-effect-sepia'
                                >
                                    <div className='upload-effect-preview'></div>
                                    Сепия
                                </label>

                                <input
                                    type='radio'
                                    name='effect'
                                    id='upload-effect-marvin'
                                    value='marvin'
                                />
                                <label
                                    className='upload-effect-label upload-effect-label-marvin'
                                    htmlFor='upload-effect-marvin'
                                >
                                    <div className='upload-effect-preview'></div>
                                    Марвин
                                </label>

                                <input
                                    type='radio'
                                    name='effect'
                                    id='upload-effect-phobos'
                                    value='phobos'
                                />
                                <label
                                    className='upload-effect-label upload-effect-label-phobos'
                                    htmlFor='upload-effect-phobos'
                                >
                                    <div className='upload-effect-preview'></div>
                                    Фобос
                                </label>

                                <input
                                    type='radio'
                                    name='effect'
                                    id='upload-effect-heat'
                                    value='heat'
                                />
                                <label
                                    className='upload-effect-label upload-effect-label-heat'
                                    htmlFor='upload-effect-heat'
                                >
                                    <div className='upload-effect-preview'></div>
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

                <div className='upload-message hidden'>
                    <div className='upload-message-container'></div>
                </div>
