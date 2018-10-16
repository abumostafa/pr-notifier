import githubRoutes from './module/webhook/github/routes.js'
import slackRoutes from './module/webhook/slack/routes.js'

export default (router) => {
  githubRoutes(router)
  slackRoutes(router)
  router.get('/ping', (req, res) => res.json({"pong": "ok"}))
  router.get('/', (req, res) => res.json({"data": "Welcome Home!!"}))
  router.get('*', (req, res) => res.status(404))

  return router
}
