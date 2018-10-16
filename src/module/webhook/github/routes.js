import {post, listEvents} from './controller'

export default (router) => {
  router.post('/webhook/github' , post)
  router.get('/webhook/github/events', listEvents)
  return router
}
