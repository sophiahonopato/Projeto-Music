import logo from '../../../assets/logo.svg'
import './style.css'

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo" />

            <nav className='nav-header'>
                <ul>
                    <li><a href="">Início</a></li>
                    <li><a href="">Categorias</a></li>
                    <li><a href="">Preços</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>

            <nav className='container-btn'>
                <a href="" className='btn-primary'>Entrar</a>s                
            </nav>

        </header>
    )
}