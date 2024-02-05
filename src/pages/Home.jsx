import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'


function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts){
        setPosts(posts.documents)
        posts.map((post) => (
          <PostCard key="" {...post} />
        ))
      }
    })

  }, [])

  if (posts.length === 0){
    return (
      <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          <h1>Please, login in to read the posts.</h1>
        </div>
      </Container>
    </div>
    )
  }

  return (
    <div>Home</div>
  )
}

export default Home