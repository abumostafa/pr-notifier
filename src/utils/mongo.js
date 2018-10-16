export default (mongoose, mongoURL) => {
  mongoose.connect(mongoURL, {useNewUrlParser: true})
  return mongoose
}
