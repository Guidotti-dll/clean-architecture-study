import { LoadSurveyResultRepository, SurveyResultModel, LoadSurveyResult } from './db-load-survey-result-protocols'

export class DbLoadSurveyResult implements LoadSurveyResult {
  constructor (
    private readonly loadSurveyResultRepository: LoadSurveyResultRepository
  ) {}

  async load (surveyId: string): Promise<SurveyResultModel> {
    console.log('surveyId: ', surveyId)

    await this.loadSurveyResultRepository.loadBySurveyId(surveyId)
    return await Promise.resolve(null as unknown as SurveyResultModel)
  }
}
