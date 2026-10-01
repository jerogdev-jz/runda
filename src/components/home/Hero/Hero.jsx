import './Hero.scss';

function Hero() {
    return (
        <section className='Hero'>
            <div className='contenedor contenedor_hero'>
                <div className='contenedor_hero_informacion'>
                    <div className='contenedor_hero_informacion_eyebrow'>
                        <span className='heroEyebrow'>Una nueva forma de descubrir</span>
                    </div>
                    <div className='contenedor_hero_informacion_tituloHero'>
                        <h1 className='heroTitulo'>Dale otra vuelta a lo cotidiano.</h1>
                    </div>
                    <div className='contenedor_hero_informacion_textoHero'>
                        <p className='heroTexto'>Tecnología, hogar y accesorios para encontrar algo distinto.</p>
                    </div>
                    <div className='contenedor_hero_informacion_botonHero'>
                        <button className='heroBoton' type='button'>Explorar catálogo →</button>
                    </div>
                </div>
                <div className='contenedor_hero_visual'>
                    <div className='placeholder_visual'>

                    </div>
                </div>
            </div>
        </section>
)}

export default Hero;