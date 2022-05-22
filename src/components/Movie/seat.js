import { useParams , useNavigate } from 'react-router-dom';
import Footer from './footer';
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Seat() {
    const a = useParams();
    const [accents, setAccents] = React.useState(null);
    const [form, setForm] = React.useState({ nome: '', cpf: '' });
    const [cadeira, setCadeira] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${a.sessao}/seats`)
            .then(e => {
                setAccents(e.data)

            })

    }, [a.sessao])

    function Selecionado(index, e){
        if(!e){
            alert("indisponivel");
            return
        }
        if(cadeira.includes(index)){
            setCadeira(cadeira.filter(e => index !== e))
        }else{
            setCadeira([...cadeira, index])
        }
        console.log(cadeira)
    }

    function Marca(e){
        if(cadeira.includes(e)){
            return true;
        }else{
            return false;
        }
    }

    function attForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const forPost = {
        'ids':cadeira,
        'name':form.nome,
        'cpf':form.cpf
    }

    function enviarEscolha(event){
        event.preventDefault();
        axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', forPost)
         .then(e=>{
             console.log("tudo certo", e);
             navigate('/sucesso', {state:{cadeira:cadeira,name:accents['movie'].title, hora:accents, usr:{cpf:form.cpf, nome:form.nome}}})
         })
    }

    
    
    
    console.log(forPost)
    const seats = (accents) ? (accents.seats.map((e, index) => {
        return (
            <Accento 
            key={index} 
            name="cadeira" 
            onClick={() => {Selecionado(index+1, e.isAvailable)}} 
            selecionado={e.isAvailable} 
            acento={()=>Marca(index+1)}  >
                <span >{e.name}</span>
            </Accento>
        )
    })) : ''


    return (
        <>
            <Content>
                <Title> Selecione o(s) assento(s)</Title>
                <Accents>{seats}</Accents>
                <Selection>
                    <Bolinha cor={'#8DD7CF'} borda={'#1AAE9E'}><div /><span>Selecionado</span></Bolinha>
                    <Bolinha cor={'#C3CFD9'} borda={'#7B8B99'}><div /><span>Disponível</span></Bolinha>
                    <Bolinha cor={'#FBE192'} borda={'#F7C52B'}><div /><span>Indisponível</span></Bolinha>
                </Selection>
                <Formulario>
                    <form onSubmit={enviarEscolha}>
                        Nome do Comprador:
                        <input type="texto" name="nome" placeholder='Digite seu nome...' onChange={e => attForm(e)} value={form.nome}></input>
                        CPF do Comprador:
                        <input type="texto" name="cpf" placeholder='Digite seu CPF...' onChange={e => attForm(e)} value={form.cpf}></input>
                        <input type="submit"></input>
                    </form>
                </Formulario>
            </Content>
            <footer>
                {(accents) ? <Footer horario={accents['movie']} hora={accents.name} day={accents.day['weekday']} /> : ''}
            </footer>
        </>
    )
}
const Selection = styled.div`
    width:380px;
    display:flex;
    justify-content:space-around;
`
const Bolinha = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
    div{
        margin-bottom: 5px;
        width: 26px;
        height: 26px;
        background-color: ${props => props.cor};
        border: 1px solid ${props => props.borda};
        border-radius: 16px;
        
    }
`

const Accento = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${props=>props.selecionado? '#C3CFD9' : '#FBE192'};
    border: 1px solid #808F9D;
    border-radius: 12px;
    margin-bottom: 20px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    background-color: ${props=>props.acento(props.index)? '#8DD7CF' : '#'};

`


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

const Accents = styled.div`
    width: 380px;
    display:flex ; 
    flex-wrap:wrap;

`
const Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom: 118px;
`

const Formulario = styled.div`
    margin-top: 40px;
    width:380px;
    form{
        display:flex;
        flex-direction: column;

        input{
            margin:5px 0;
            height:51px;
        }
        input:last-child{
            margin: 0 auto;
            margin-top:50px;
            width: 225px;
            height: 42px;

            background: #E8833A;
            border-radius: 3px;
            letter-spacing: 0.04em;
            font-weight: 400;
            font-size: 18px;
            color: #FFFFFF;
        }
    }



`
export default Seat;