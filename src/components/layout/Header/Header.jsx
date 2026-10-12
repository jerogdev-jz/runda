import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
  return (
    <header className="header_principal">
        <div className="contenedor contenedor_header">
            <div className="contenedor_header_logo">
                <p>Runda</p>
            </div>
            <div className="contenedor_header_nav">
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/catalogo">Catálogo</Link></li>
                        <li><Link to="/catalogo">Categorías</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="contenedor_header_acciones">
                <div className="contenedor_header_acciones_btnDev">
                    <button type="button">
                        DEV
                    </button>
                </div>
                <div className="contenedor_header_acciones_btnCarrito">
                    <Link to="/carrito">Carrito</Link>
                </div>
            </div>
        </div>    
    </header>
  );
}

export default Header;