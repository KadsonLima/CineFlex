import { useLocation , Link } from 'react-router-dom'
import styled from 'styled-components';


function Sucess(){
    const state = useLocation();
    const filme = state.state
    console.log(filme)
    return(
        <Tela>  
            <Title>Pedido feito com sucesso!</Title>
            <Sessao>
                <SubTitle>Filme e sessão</SubTitle>
                <span>{filme.name}</span>
                <span>{filme.hora.day.date} - {filme.hora.name}</span>
            </Sessao>
            <Sessao>
                <SubTitle>Ingressos</SubTitle>
            {filme.cadeira.map((e,index)=>{return <span key={index}>Assento {e}</span>})}
            </Sessao>
            <Sessao>
                <SubTitle>Comprador</SubTitle>
                <span>Nome: {filme.usr.nome}</span>
                <span>CPF: {filme.usr.cpf}</span>
            </Sessao>
            <div className='button'>
            <Link style={{textDecoration:'none'}} to="/"><span>Voltar pra Home</span></Link>
            </div>
        </Tela>
    )


}

const Tela = styled.div`
    display:flex;
    flex-direction:column;
    padding: 0 25px;
   .button{
       margin:60px auto;
       width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        span{
            color:white;
        }
   }

`

const Title = styled.div`
height: 110px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
justify-content:center;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
color: #247A6B;
`
const Sessao = styled.div`
display:flex;
flex-direction:column;
margin-bottom:77px;
span{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.04em;

color: #293845;
}
`
const SubTitle = styled.div`
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #293845;


`

export default Sucess