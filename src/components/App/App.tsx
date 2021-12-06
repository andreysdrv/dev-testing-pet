import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { getData } from '../../store/action-creators/questions'
import { IQuestion } from '../../types/types'
import List from '../List/List'
import QuestionItem from '../QuestionItem/QuestionItem'

const App = () => {
	// const [questionss, setQuestions] = useState<IQuestion[]>([])

	const { questions, loading, error } = useTypeSelector(state => state.questions)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getData())
	}, [])

	if (loading) {
		return <h1>Загрузка . . .</h1>
	}

	if (error) {
		alert(error)
	}

	return (
		<List
			items={questions}
			renderItem={(question: IQuestion) => (
				<QuestionItem question={question} key={question.question} />
			)}
		/>
	)
}

export default App
