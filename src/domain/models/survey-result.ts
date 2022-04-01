import { SurveyAnswerModel } from './survey'

export type SurveyResultAnswerModel = SurveyAnswerModel & {
  percent: number
  count: number
}

export type SurveyResultModel = {

  surveyId: string
  accountId: string
  question: string
  answers: SurveyResultAnswerModel[]
  date: Date
}
