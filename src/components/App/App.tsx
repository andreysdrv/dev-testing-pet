import React, { useEffect, useLayoutEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { IQuestion } from '../../types/types'
import Error from '../Error/Error'
import List from '../List/List'
import Loader from '../Loader/Loader'
import QuestionItem from '../QuestionItem/QuestionItem'

const App = () => {
	const { questions, loading, error } = useTypeSelector(state => state.questions)
	const { getData } = useActions()

	useLayoutEffect(() => {
		getData()
	}, [])

	if (loading) {
		return <Loader />
	}

	if (error) {
		return <Error error={error} />
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
