import axios from 'axios';
import react from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies';

function Home() {

    const [post, setPost] = react.useState(null)

    react.useEffect(() => {
        axios.get(URL).then(e => {

            setPost(e.data)
        })
    }, [])

    const filme = (post) ? post.map((e, index) => {
        return (
            <Link key={index} to={`/filme/${e.id}`}>
            <div className='poster'  id={e.id} >
                <img src={e.posterURL} width={130} alt={e.posterURL}></img>

            </div>
            </Link>
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