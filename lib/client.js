import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: '560blog',
  apiKey: process.env.API_KEY,
})

export default client
