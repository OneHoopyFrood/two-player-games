import Koa from 'koa'

import gameRouter from './endpoints/game/routes'

const app = new Koa()
const PORT = process.env.PORT || 3001

// Routes
app.use(gameRouter.routes()).use(gameRouter.allowedMethods())

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
