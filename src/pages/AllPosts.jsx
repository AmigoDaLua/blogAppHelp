import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'



function AllPosts() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts){
        setPosts(posts.documents)
      }
      // TODO: se a length do posts for zero? 
      // R: mesma solução da Home!
    })

  }, [])

  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          {
            posts.map((post) => (
              <div key="" className="p-2 w1/4">
                <PostCard {...post}/>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default AllPosts