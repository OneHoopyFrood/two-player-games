import type { Request, Response } from 'express'

export const listHandler = async (req: Request, res: Response): => {
  
}

export const get = async (ctx: Context) => {
  const { id } = ctx.params
  ctx.body = {
    message: `Fetching game with id ${id}`,
  }
}
