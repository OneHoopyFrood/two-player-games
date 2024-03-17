import express from 'express'

const app = express()
const PORT = process.env.PORT || 3001

// Routes
app.use()

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
