import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const Post = props => {
  return (
    <li>
      <Link href={`/post?title=${props.title}`} as={`/post/lol/${props.title}`}>
        <a>{`Go to ${props.title}`}</a>
      </Link>
    </li>
  )
}

export default function Index() {
  return (
    <Layout>
      <h2>Hello Next.js</h2>
      <ul>
        <Post title="Get milk"></Post>
        <Post title="Sleep tight"></Post>
        <Post title="Lock the doors"></Post>
      </ul>
    </Layout>
  )
}
