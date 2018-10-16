import {receiveEvent, fetchEvents} from './handler'

export const post = (req, res, next) => {
  receiveEvent(req.models.SlackEvent, req.body)
    .then(() => (req.body.challenge ? res.send(req.body.challenge) : res.json({"data": "I'm web hook"})))
    .catch(next)
}

export const listEvents = (req, res, next) => {
  fetchEvents(req.repositories.SlackEventRepository)
    .then((events) => res.json(events))
    .catch(next)
}
