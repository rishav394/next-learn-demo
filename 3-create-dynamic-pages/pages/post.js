import { useRouter } from 'next/router'
import Layout from '../components/MyLayout'

const Content = () => {
  // Using router just for query
  const router = useRouter()
  var { title } = router.query
  return (
    <div>
      <h1>{title}</h1>
      <p>This is the blog post content.</p>
    </div>
  )
}

const Page = () => {
  return (
    <Layout>
      <Content></Content>
    </Layout>
  )
}

export default Page
