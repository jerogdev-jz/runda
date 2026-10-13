    import products from '../../../data/products';
    import ProductCard from '../../products/ProductCard/ProductCard';

    import './FeaturedProducts.scss';

    function FeaturedProducts() {

        const productosDestacados = products.filter(producto => 
            producto.destacado);

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
                        {productosDestacados.map((elemento) => (
                            <ProductCard
                                key={elemento.id}
                                producto={elemento}
                            />
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    export default FeaturedProducts;