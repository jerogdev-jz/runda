import './DiscoverMore.scss';

function DiscoverMore() {
    return (
        <section className='DiscoverMore'>
            <div className='contenedor'>
                <div className='descubreMas'>
                    <span className='eyebrowDescMas'>MÁS POR DESCUBRIR</span>
                    <div className='descubreMas_contenedorTarjetas'>
                        <a href='#'>
                            <div className='tarjetaDescMas'>
                                <span className='tituloTarDescMas'>Novedades</span>
                                <div className='subcontenedorTarDescMas'>
                                    <p className='copyTarDescMas'>Lo más reciente en RUNDA.</p>
                                    <span>↗</span>
                                </div>
                            </div>
                        </a>
                        <a href='#'>
                            <div className='tarjetaDescMas'>
                                <span className='tituloTarDescMas'>Favoritos</span>
                                <div className='subcontenedorTarDescMas'>
                                    <p className='copyTarDescMas'>Lo que todos están eligiendo.</p>
                                    <span>↗</span>
                                </div>
                            </div>
                        </a>
                        <a href='#'>
                            <div className='tarjetaDescMas'>
                                <span className='tituloTarDescMas'>Oportunidades</span>
                                <div className='subcontenedorTarDescMas'>
                                    <p className='copyTarDescMas'>Buenas ideas a mejor precio.</p>
                                    <span>↗</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiscoverMore;