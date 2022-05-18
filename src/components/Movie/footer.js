

function Footer({ horario, hora, day }) {

    const Footer = (!hora) ? (<><div className='poster' >
        <img src={horario.posterURL} width={48} alt={horario.posterURL}></img></div>
        <div className='description'>
            <span>{horario.title}</span>
        </div></>) 
        : 
        (
            (<><div className='poster' >
            <img src={horario.posterURL} width={48} alt={horario.posterURL}></img></div>
            <div className='description'>
                <span>{horario.title}</span>
                <span>{hora} - {day}</span>
            </div></>) 
    )



    return (<>
        {Footer}
    </>
    )

}




export default Footer;