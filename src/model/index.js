import GithubEventModel from './GithubEvent'
import SlackEventModel from './SlackEvent'

const models = (mongoose) => {
  return {
    GithubEvent: mongoose.model('GithubEvent', GithubEventModel(mongoose.Schema)),
    SlackEvent: mongoose.model('SlackEvent', SlackEventModel(mongoose.Schema)),
  }
}

export default models
