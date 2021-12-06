import {
	questionsAction,
	QuestionsActionTypes,
	questionsState,
} from '../../types/questions'

const initialState: questionsState = {
	questions: [],
	loading: false,
	error: null,
}

export const questionsReducer = (
	state = initialState,
	action: questionsAction
): questionsState => {
	switch (action.type) {
		case QuestionsActionTypes.GET_QUESTIONS:
			return {
				questions: [],
				loading: true,
				error: null,
			}
		case QuestionsActionTypes.GET_QUESTIONS_SUCCESS:
			return {
				questions: action.payload,
				loading: false,
				error: null,
			}
		case QuestionsActionTypes.GET_QUESTIONS_FAIL:
			return {
				questions: [],
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}
