import { Link } from 'react-router-dom';

import './Footer.scss';

function Footer() {
    return (
        <footer className='footer'>
            <div className='contenedor'>
                <div className='piePagina'>
                    <div className='piePagina_enlaces'>
                        <div className='marcaPiePag'>
                            <span className='logoPiePag'>RUNDA</span>
                            <p className='sloganPiePag'>Dale otra vuelta a lo cotidiano</p>
                        </div>
                        <div className='PiePagina_enlacesEcommerce'>
                            <ul className='listaEnlacesPiePag'>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/catalogo">Catalogo</Link></li>
                                <li><Link to="/catalogo">Categorias</Link></li>
                            </ul>
                        </div>
                        <div className='PiePagina_enlacesDev'>
                            <ul className='listaEnlacesPiePag'>
                                <li><a href='#'>Modo DEV</a></li>
                                <li><a href='#'>Documentación</a></li>
                                <li><a href='#'>Sobre esta demo</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='piePagina_final'>
                        <span className='finalSpanFooter'>RUNDA</span>
                        <span className='finalSpanFooter'>Demo - E-commerce</span>
                        <span className='finalSpanFooter'>JerogDev</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;