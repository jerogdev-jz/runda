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
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Catálogo</a></li>
                        <li><a href="#">Categorías</a></li>
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
                    <button type="button">
                        Carrito
                    </button>
                </div>
            </div>
        </div>    
    </header>
  );
}

export default Header;