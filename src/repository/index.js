import GithubEventRepository from './GithubEventRepository'
import SlackEventRepository from './SlackEventRepository'

export default (models) => {
  return {
    GithubEventRepository: GithubEventRepository(models.GithubEvent),
    SlackEventRepository: SlackEventRepository(models.SlackEvent),
  }
}
