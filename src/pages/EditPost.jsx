import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import { useEffect } from 'react'
import Container from '../components/container/Container'
import PostForm from '../components/post-form/PostForm'


function EditPost() {
  // Hooks iniciais pra fazer as coisas da página:

  // Precisamos de um post!
  const [post, setPost] = useState(null)
  // Precisamos da slug do post!
  const {slug} = useParams()
  const navigate = useNavigate()



  // Se a slug existe, vamos setar o post a partir dela!
  useEffect(() => {
    if (slug){
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post)
        } else {
          // Se o post com a slug enviada não existe, voltamos pra Home!
          navigate('/')
        }
      })
    }
  }, [slug, navigate])

  // Retornando o post :D
  return (
    <div className='py-6'>
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  )
}

export default EditPost