import cors from 'cors'
import { config, type MiddlewareConfigFn } from 'wasp/server'

export const serverMiddlewareFn: MiddlewareConfigFn = (middlewareConfig) => {
  middlewareConfig.delete('cors')

  const allowedOrigins = [
    config.frontendUrl,
    'https://client-production-d87f.up.railway.app',
    'https://cloudcontext.cc',
    'http://localhost:3000', 
  ].filter(Boolean)

  middlewareConfig.set(
    'cors',
    cors({
      origin: allowedOrigins,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization']
    })
  )

  return middlewareConfig
}
