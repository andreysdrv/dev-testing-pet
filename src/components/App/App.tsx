import React, { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { IQuestion } from '../../types/types'
import List from '../List/List'
import QuestionItem from '../QuestionItem/QuestionItem'

const App = () => {
	const { questions, loading, error } = useTypeSelector(state => state.questions)
	const { getData } = useActions()

	useEffect(() => {
		getData()
	}, [])

	if (loading) {
		return <h1 style={{ backgroundColor: 'red' }}>Загрузка . . .</h1>
	}

	if (error) {
		return <h1 style={{ backgroundColor: 'red' }}>{error}</h1>
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
