export enum QuestionsActionTypes {
	GET_QUESTIONS = 'GET_QUESTIONS',
	GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS',
	GET_QUESTIONS_FAIL = 'GET_QUESTIONS_FAIL',
}

interface GetQuestionsAction {
	type: QuestionsActionTypes.GET_QUESTIONS
}

interface GetQuestionsSuccessAction {
	type: QuestionsActionTypes.GET_QUESTIONS_SUCCESS
	payload: any[]
}

interface GetQuestionsFailAction {
	type: QuestionsActionTypes.GET_QUESTIONS_FAIL
	payload: string
}

export type questionsAction =
	| GetQuestionsAction
	| GetQuestionsSuccessAction
	| GetQuestionsFailAction

export interface questionsState {
	questions: any[]
	loading: boolean
	error: null | string
}
