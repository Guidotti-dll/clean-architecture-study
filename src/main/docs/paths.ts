import {
  loginPath,
  surveyPath,
  signUpPath,
  surveyResultPath
} from './paths/'

export default {
  '/login': loginPath,
  '/signup': signUpPath,
  '/surveys': surveyPath,
  '/survey/{surveyId}/results': surveyResultPath
}
