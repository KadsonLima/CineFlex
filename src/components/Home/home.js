import axios from 'axios';
import react from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
            <Link key={index} style={{ textDecoration: 'none' }} to={`/filme/${e.id}`}>
                <div className='poster' id={e.id} >
                    <img src={e.posterURL} width={130} alt={e.posterURL}></img>

                </div>
            </Link>
        )
    }, []) : ''

    if (!post) return null;

    return (
        <div className='content'>
            <Title>Selecione o filme</Title>
            <div className='filmes'>
                {filme}
            </div>
        </div>
    )
}

const Title = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100px;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #293845;

`
export default Home;