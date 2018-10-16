class GithubEventRepository {
  constructor(model) {
    this.model = model
  }

  all() {
    return this
      .model
      .find()
      .sort({createdAt: 'desc'})
      .exec()
  }
}

export default (GithubEvent) => new GithubEventRepository(GithubEvent)
