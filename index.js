const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    msg: "Coba error"
  })
})

const PORT = 3000

app.listen(PORT, () => console.log(`App running on PORT ${PORT}`))