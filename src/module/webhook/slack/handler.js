export const receiveEvent = (SlackEvent, content) => {
  return new Promise((resolve, reject) => {

    try {
      const onDone = (err) => (!err) ? resolve && resolve() : reject && reject(err)
      const slackEvent = new SlackEvent({
        content: JSON.stringify(content),
        createdAt: new Date(),
      })
      slackEvent.save(onDone)
    } catch (e) {
      return reject && reject(e)
    }
  })
}

export const fetchEvents = (slackEventRepository) => {
  return slackEventRepository
    .all()
    .then(events => events.map(({content}) => JSON.parse(content)))
}
