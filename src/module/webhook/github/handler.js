export const receiveEvent = (GithubEvent, content) => {
  return new Promise((resolve, reject) => {

    try {
      const onDone = (err) => (!err) ? resolve && resolve() : reject && reject(err)
      const githubEvent = new GithubEvent({
        content: JSON.stringify(content),
        createdAt: new Date(),
      })
      githubEvent.save(onDone)
    } catch (e) {
      return reject && reject(e)
    }
  })
}

export const fetchEvents = (GithubEventRepository) => {
  return GithubEventRepository
    .all()
    .then(events => events.map(({content}) => JSON.parse(content)))
}
