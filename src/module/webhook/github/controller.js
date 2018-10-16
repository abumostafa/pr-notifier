import {receiveEvent, fetchEvents} from './handler'

export const post = (req, res, next) => {
  receiveEvent(req.models.GithubEvent, req.body)
    .then(() => res.json({"data": "I'm web hook"}))
    .catch(next)
}

export const listEvents = (req, res, next) => {
  fetchEvents(req.repositories.GithubEventRepository)
    .then((events) => res.json(events))
    .catch(next)
}
