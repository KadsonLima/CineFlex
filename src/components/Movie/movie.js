import {useParams} from 'react-router-dom';
import React from 'react';
import './styles.css';
import axios from 'axios';
import Footer from './footer';

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
        console.log(horario)
        return (
                <div className='dia' key={e.id}>
                    <span>{e.weekday} - {e.date}</span>
                    <div className='horarios'>
                        {e['showtimes'].map(e=>{
                            return (
                                <div className='hora'>
                                    {e.name}
                                </div>
                            )
                        })}
                    </div>
                </div>           
        )
    }): ''

    return (<div className='times'>
            <h3>Selecione o horário</h3>
            <div className='showtimes'>
            {showTimes}
            </div>
            <footer>
                {(horario)? <Footer horario={horario}/> : ''}
            </footer>
    </div>)
}

export default Movie;