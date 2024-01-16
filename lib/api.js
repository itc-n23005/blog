import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY
})

const getPostBySlug(slug) = async () => {
try {
const post = await client.get({
  endpoint: 'blogs',
queries: { filters: `slug[equals]${slug}` },
})
return post.constants[0]
} catch (err) {
console.log('~~ getPostBySlug ~~')
console.log(err)
}
)

export { getPostBySlug(slug) }
