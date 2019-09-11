import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="hello-nextjs" />
        <PostLink title="learn-nextjs" />
        <PostLink title="deploy-nextjs" />
      </ul>
    </Layout>
  )
}
