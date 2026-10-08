import './FeaturedCollection.scss';

function FeaturedCollection() {
    return (
        <section className='FeaturedCollection'>
            <div className='contenedor'>
                <div className='coleccionDestacada'>
                    <div className='coleccionDestacada_info'>
                        <span className='eyebrow_ColDest'>COLECCIÓN DESTACADA</span>
                        <h2 className='titulo_ColDest'>Dale un giro a tu escritorio.</h2>
                        <p className='descripcion_ColDest'>Una selección de artículos para trabajar, crear y organizar.</p>
                        <a href='#' className='enlace_ColDest'><span>Ver colección ↗</span></a>
                    </div>
                    <div className='coleccionDestacada_visual'>
                        <div className='placeholderDestacada'>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedCollection;