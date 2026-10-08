import './DevModeTeaser.scss';

function DevModeTeaser() {
    return (
        <section className='DevModeTeaser'>
            <div className='contenedor'>
                <div className='modoDev'>
                    <div className='modoDev_info'>
                        <span className='eyebrowModoDev'>MODO DEV</span>
                        <h2 className='tituloModoDev'>Mira lo que hay detrás.</h2>
                        <p className='textoModoDev'>Explora los componentes y decisiones técnicas de RUNDA</p>
                        <button type='button' className='botonModoDev'>Explorar modo DEV</button>
                    </div>
                    <div className='modoDev_visual'>
                        <div className='placeholderModoDev'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DevModeTeaser;