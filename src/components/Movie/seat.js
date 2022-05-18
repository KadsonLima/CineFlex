import {useParams} from 'react-router-dom';
import Footer from './footer';
import React from 'react';
import axios from 'axios';

function Seat(){
    const a = useParams();
    console.log(a.sessao)
    const [accents, setAccents] = React.useState(null)

    React.useEffect(()=>{
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${a.sessao}/seats`)
             .then(e=>{
                setAccents(e.data)
                
             })
    }, [a])

    const seats = (accents)?(accents.seats.map((e, index)=>{
        return (
            <div className={`seat ${e.isAvailable}`} >
                <span>{e.name}</span>
            </div>
        )
    })): ''


    return (
        <>
        <div> Assentos</div>
        <div className='accents'>{seats}</div>
        <footer>
        {(accents)? <Footer horario={accents['movie']} hora={accents.name} day={accents.day['weekday']}/> : ''}
        </footer>
        </>
    )
}



export default Seat;