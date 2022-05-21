import {useParams} from 'react-router-dom';
import React from 'react';
import './styles.css';
import axios from 'axios';
import Footer from './footer';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Movie(){

    const idMovie = useParams();
    const [horario, setHorario] = React.useState(null)
    

    React.useEffect(()=>{
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie.filme}/showtimes`
        console.log(URL)
        axios.get(URL).then(e => {

            setHorario(e.data)
        })
    }, [idMovie])


    const showTimes = (horario)? horario['days'].map(e =>{
        return (
                <div className='dia' key={e.id}>
                    <span>{e.weekday} - {e.date}</span>
                    <div className='horarios'>
                        {e['showtimes'].map((e,index)=>{
                            return (
                                <Link key={index} style={{textDecoration:'none'}}  to={`/sessao/${e.id}` }>
                                <div className='hora'>
                                    {e.name}
                                </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>           
        )
    }): ''

    return (<div className='times'>
            <Title>Selecione o horário</Title>
            <div className='showtimes'>
            {showTimes}
            </div>
            <footer>
                {(horario)? <Footer horario={horario}/> : ''}
            </footer>
    </div>)
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

export default Movie;