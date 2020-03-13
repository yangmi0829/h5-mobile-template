const express = require('express')
const app = express()
app.use(express.static('dist'))
const port = 3000
app.listen(port, () => {
  console.log('启动成功:localhost:'+ port)
})
