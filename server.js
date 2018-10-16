import app from './src/app'

const {env: {PORT}} = process
const port = PORT || 8080

app.listen(port, () => {
  console.log(`Started at port ${port}...`)
})
