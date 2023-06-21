import { rest } from 'msw'

export const handlers = [
  rest.get('/products', (_, res, ctx) => {
    const rand = Math.random()
    setTimeout(() => console.log('sleep', rand * 1000))
    if (rand < 0.3) {
      return res(
        ctx.status(200),
        ctx.json([
          {
            productId: 'P2193A',
            fullName: 'separative keyboard',
            standardPrice: 13320,
            currency: 'YEN',
            stock: 'ENOUGH'
          },
          {
            productId: 'B00129',
            fullName: 'super big display',
            standardPrice: 1332320,
            currency: 'YEN',
            stock: 'ENOUGH'
          }
        ])
      )
    } else if (rand >= 0.3 && rand < 0.8) {
      setTimeout(() => console.log('sleep', rand * 1000))
      return res(ctx.status(201), ctx.json([]))
    } else {
      setTimeout(() => console.log('sleep', rand * 1000))
      return res(ctx.status(400))
    }
  })
]
