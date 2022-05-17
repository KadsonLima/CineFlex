import axios from 'axios';
import react from 'react';
import './styles.css'

const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies';

function Home() {

    const [post, setPost] = react.useState(null)

    react.useEffect(() => {
        axios.get(URL).then(e => {

            setPost(e.data)

        })
    })

    const filme = (post) ? post.map((e, index) => {
        return (
            <div className='poster' key={index} id={e.id} >
                <img src={e.posterURL} width={130} alt={e.posterURL}></img>

            </div>
        )
    },[]) : ''

    if (!post) return null;

    return (
        <div className='content'>
            <h3>Selecione o filme</h3>
            <div className='filmes'>
                {filme}
            </div>
        </div>
    )
}


export default Home;