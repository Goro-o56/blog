import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import client from '../../lib/client'
import type { Blog } from '../types/data'
type blogProps = InferGetStaticPropsType<typeof getStaticProps>

const HomePage: NextPage<blogProps> = ({ blog }: blogProps) => {
  return (
    <div>
      <ul>
        {blog.map((blog: Blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' })
  console.log(data)
  return {
    props: {
      blog: data.contents,
    },
  }
}

export default HomePage
