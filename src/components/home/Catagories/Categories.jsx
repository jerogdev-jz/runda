import './Categories.scss';

function Categories() {
    return (
        <section className='categories'>
            <div className='contenedor categorias'>
                <div className='categorias_titulo'>
                    <h2 className='tituloCategorias'>Categorías</h2>
                </div>
                <div className='categorias_tarjetas'>
                    <a href='#'><div className='tarjetasCategorias enfasis'>
                        <div className='iconoTarjetasCategorias'>
                        </div>
                        <div className='textoTarjetasCategorias'>
                            <p className='textoTarCat'>Todos <span>↗</span></p>
                        </div>
                    </div></a>
                    <a href='#'><div className='tarjetasCategorias'>
                        <div className='iconoTarjetasCategorias'>

                        </div>
                        <div className='textoTarjetasCategorias'>
                            <p className='textoTarCat'>Hogar <span>↗</span></p>
                        </div>
                    </div></a>
                    <a href='#'><div className='tarjetasCategorias'>
                        <div className='iconoTarjetasCategorias'>

                        </div>
                        <div className='textoTarjetasCategorias'>
                            <p className='textoTarCat'>Accesorios <span>↗</span></p>
                        </div>
                    </div></a>
                    <a href='#'><div className='tarjetasCategorias'>
                        <div className='iconoTarjetasCategorias'>

                        </div>
                        <div className='textoTarjetasCategorias'>
                            <p className='textoTarCat'>Tecnología <span>↗</span></p>
                        </div>
                    </div></a>
                    <a href='#'><div className='tarjetasCategorias'>
                        <div className='iconoTarjetasCategorias'>

                        </div>
                        <div className='textoTarjetasCategorias'>
                            <p className='textoTarCat'>Oficina <span>↗</span></p>
                        </div>
                    </div></a>
                </div>
            </div>
        </section>
    )
}

export default Categories

