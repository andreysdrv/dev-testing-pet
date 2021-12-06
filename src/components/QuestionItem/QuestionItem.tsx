import React, { FC, MouseEvent, useState } from 'react'
import { IQuestion } from '../../types/types'
import './QuestionItem.css'

interface QuestionItemProps {
	question: IQuestion
}

const QuestionItem: FC<QuestionItemProps> = ({ question }) => {
	const [selectedAnswer, setSelectedAnswer] = useState<string>('')
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

	const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		if (selectedAnswer === question.correct_answer) {
			setIsCorrect(true)
		} else {
			setIsCorrect(false)
		}
	}

	return (
		<div className='card'>
			<ul className='card__head'>
				<li className='card__item'>Категория: {question.category}</li>
				<li className='card__item'>Тип: {question.type}</li>
				<li className='card__item'>Сложность: {question.difficulty}</li>
				<li className='card__item card__item_font_bold'>{question.question}</li>
			</ul>
			<form className='card__form'>
				<ul className='card__answers'>
					{[...question.incorrect_answers, question.correct_answer].map(
						(answer, index) => (
							<li key={index}>
								<label
									className={`card__answer ${
										isCorrect === null
											? ''
											: answer === question.correct_answer
											? 'card__answer_correct'
											: 'card__answer_incorrect'
									}`}>
									<input
										className='card__checkbox'
										type='radio'
										name='answer'
										disabled={isCorrect != null}
										onChange={() => setSelectedAnswer(answer)}
									/>
									{answer}
									<span className='checkmark'></span>
								</label>
							</li>
						)
					)}
				</ul>
				<button
					className={`card__btn ${
						isCorrect != null ? 'card__btn_state_disabled' : ''
					}`}
					type='submit'
					disabled={isCorrect != null}
					onClick={checkAnswer}>
					Проверить
				</button>
			</form>
		</div>
	)
}

export default QuestionItem
