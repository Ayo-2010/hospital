export default defineEventHandler((event) => {
  if (!event.node.req.url?.startsWith('/api')) {
    return
  }

  const runtimeConfig = useRuntimeConfig()
  event.node.res.setHeader('X-API-Version', 'v1')
  event.node.res.setHeader('X-App-Name', runtimeConfig.public.appName)
})
