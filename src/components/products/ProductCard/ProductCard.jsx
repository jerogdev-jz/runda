import { Link } from "react-router-dom";

import './ProductCard.scss';

function ProductCard({ producto }) {
    return (
        <article className="ProductCard">
                <div className='placeholderTarjetasSeleccionado'>

                </div>
                <h3 className='tituloTarSelec'>
                    {producto.nombre}
                </h3>
                <p className='descripcionTarSelec'>
                    {producto.descripcion}
                </p>
                <span className='precioTarSelec'>
                    {producto.precio}
                </span>
                <div className='botonTarSelec'>
                    <Link to={`/producto/${producto.id}`} className='verBotonTarSelect'>
                        Ver producto →
                    </Link>
                </div>
        </article>
    )
}

export default ProductCard