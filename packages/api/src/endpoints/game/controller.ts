import type { Context } from 'koa'

export const list = async (ctx: Context) => {
  ctx.body = {
    message: 'Fetching all games',
  }
}

export const get = async (ctx: Context) => {
  const { id } = ctx.params
  ctx.body = {
    message: `Fetching game with id ${id}`,
  }
}
