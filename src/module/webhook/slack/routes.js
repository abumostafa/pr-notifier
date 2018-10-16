import {post, listEvents} from './controller'

export default (router) => {
  router.post('/webhook/slack', post)
  router.get('/webhook/slack/events', listEvents)
  return router
}
