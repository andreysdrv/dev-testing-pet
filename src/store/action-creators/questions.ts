import axios from 'axios'
import { Dispatch } from 'redux'
import { questionsAction, QuestionsActionTypes } from '../../types/questions'

export const getData = () => {
	return async (dispatch: Dispatch<questionsAction>) => {
		try {
			dispatch({ type: QuestionsActionTypes.GET_QUESTIONS })
			setTimeout(async () => {
				const response = await axios.get('https://opentdb.com/api.php?amount=10')
				dispatch({
					type: QuestionsActionTypes.GET_QUESTIONS_SUCCESS,
					payload: response.data.results,
				})
			}, 1500)
		} catch (error) {
			dispatch({
				type: QuestionsActionTypes.GET_QUESTIONS_FAIL,
				payload: 'Ошибка при загрузке данных.',
			})
		}
	}
}
