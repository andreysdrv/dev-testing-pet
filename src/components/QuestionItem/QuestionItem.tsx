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
		<div className='questions__card'>
			<p>Категория: {question.category}</p>
			<p>Тип: {question.type}</p>
			<p>Сложность: {question.difficulty}</p>
			<h4>Вопрос: {question.question}</h4>
			<form style={{ display: 'flex', flexDirection: 'column' }}>
				{[...question.incorrect_answers, question.correct_answer].map(
					(answer, index) => (
						<label
							style={{
								padding: 10,
								backgroundColor:
									isCorrect === null
										? 'navajowhite'
										: answer === question.correct_answer
										? 'green'
										: 'red',
								marginBottom: 5,
								cursor: 'pointer',
							}}
							key={index}>
							<input
								type='radio'
								name='answer'
								disabled={isCorrect != null}
								onChange={() => setSelectedAnswer(answer)}
							/>
							{answer}
						</label>
					)
				)}
				<button type='submit' onClick={checkAnswer}>
					check
				</button>
			</form>
		</div>
	)
}

export default QuestionItem
