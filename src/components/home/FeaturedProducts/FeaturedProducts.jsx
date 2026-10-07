import './FeaturedProducts.scss';

function FeaturedProducts() {
    return (
        <section className='FeaturedProducts'>
            <div className='contenedor seleccionados'>
                <div className='seleccionados_encabezado'>
                    <div className='seleccionados_encabezado_eyebrow'>
                        <span className='EyebrowSelec'>DESCUBRE</span>
                    </div>
                    <div className='seleccionados_encabezado_titulo'>
                        <h2 className='tituloSeleccionados'>Nuestra Selección</h2>
                        <a href='#'><span className='spanTituloSelec'>Ver todo el catálogo ↗</span></a>
                    </div>
                    <div className='seleccionados_encabezado_botones'>
                        <ul className='listaBotonesSelec'>
                            <li className='selectorListaBotonesSelec '>
                                <button type='button' className='botonSelLisBotSelec enfasis'>Todos</button>
                            </li>
                            <li className='selectorListaBotonesSelec'>
                                <button type='button' className='botonSelLisBotSelec '>Hogar</button>
                            </li>
                            <li className='selectorListaBotonesSelec'>
                                <button type='button' className='botonSelLisBotSelec '>Accesorios</button>
                            </li>
                            <li className='selectorListaBotonesSelec'>
                                <button type='button' className='botonSelLisBotSelec '>Tecnología</button>
                            </li>
                            <li className='selectorListaBotonesSelec'>
                                <button type='button' className='botonSelLisBotSelec '>Oficina</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='seleccionados_grid'>
                    
                        <div className='tarjetaSeleccionados'>
                            <div className='placeholderTarjetasSeleccionado'>

                            </div>
                            <h3 className='tituloTarSelec'>
                                Producto 1
                            </h3>
                            <p className='descripcionTarSelec'>
                                 Maecenas aliquam gravida tellus, sit amet vehicula nisi pretium quis. Aenean sed venenatis mi
                            </p>
                            <span className='precioTarSelec'>
                                $1,234.00
                            </span>
                            <div className='botonTarSelec'>
                                <a  href='#' className='verBotonTarSelect'>
                                    Ver producto →
                                </a>
                            </div>
                        </div>
                        <div className='tarjetaSeleccionados'>
                            <div className='placeholderTarjetasSeleccionado'>

                            </div>
                            <h3 className='tituloTarSelec'>
                                Producto 2
                            </h3>
                            <p className='descripcionTarSelec'>
                                Maecenas aliquam gravida tellus, sit amet vehicula nisi pretium quis. Aenean sed venenatis mi 
                            </p>
                            <span className='precioTarSelec'>
                                $987.00
                            </span>
                            <div className='botonTarSelec'>
                                <a  href='#' className='verBotonTarSelect'>
                                    Ver producto →
                                </a>
                            </div>
                        </div>
                        <div className='tarjetaSeleccionados'>
                            <div className='placeholderTarjetasSeleccionado'>

                            </div>
                            <h3 className='tituloTarSelec'>
                                Producto 3
                            </h3>
                            <p className='descripcionTarSelec'>
                                 Maecenas aliquam gravida tellus, sit amet vehicula nisi pretium quis. Aenean sed venenatis mi
                            </p>
                            <span className='precioTarSelec'>
                                $5,678.00
                            </span>
                            <div className='botonTarSelec'>
                                <a  href='#' className='verBotonTarSelect'>
                                    Ver producto →
                                </a>
                            </div>
                        </div>
                        <div className='tarjetaSeleccionados'>
                            <div className='placeholderTarjetasSeleccionado'>

                            </div>
                            <h3 className='tituloTarSelec'>
                                Producto 4
                            </h3>
                            <p className='descripcionTarSelec'>
                                Maecenas aliquam gravida tellus, sit amet vehicula nisi pretium quis. Aenean sed venenatis mi
                            </p>
                            <span className='precioTarSelec'>
                                $654.00
                            </span>
                            <div className='botonTarSelec'>
                                <a  href='#' className='verBotonTarSelect'>
                                    Ver producto →
                                </a>
                            </div>
                        </div>
                    
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts;