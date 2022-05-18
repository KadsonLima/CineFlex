

function Footer({horario}){
    return (<>
        <div className='poster' >
                <img src={horario.posterURL} width={48} alt={horario.posterURL}></img>
                </div>
                <div className='description'>
                    <span>{horario.title}</span>
                </div>
        </>
    )
}

export default Footer;