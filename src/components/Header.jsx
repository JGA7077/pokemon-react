import { React, Component} from 'react'
import './Header.css'
import menu from '../assets/images/menu.svg'
import logo from '../assets/images/logo.png'
import faceButton from '../assets/images/face-button.png'
import instaButton from '../assets/images/insta-button.png'
import ytButton from '../assets/images/yt-button.png'


export default class Header extends Component {

    render() {
        return(

            <header>
                <nav class="navbar navbar-expand navbar-light bg-white">

                    <div className="container">
                        <a class="navbar-brand" href="../index.js">
                            <div className="logo-brand">

                                <img src={menu} alt="Ícone para o menu" width="16px" />
                                <img src={logo} className="logo" alt="Logo da Empresa" />

                            </div>
                        </a>

                        <ul class="navbar-nav ml-auto">

                            <li class="nav-item">
                                <a class="d-none d-sm-block" href="../index.js">
                                    <button class="button">CALL TO ACTION</button>
                                </a>
                            </li>
                            
                            <li class="nav-item">
                                <a href="../index.js" class="nav-link">
                                    <img src={faceButton} class="social-link" alt="Botão do Facebook" />
                                </a>
                            </li>

                            <li class="nav-item">
                                <a href="../index.js" class="nav-link">
                                    <img src={instaButton} class="social-link" alt="Botão do Instagram" />
                                </a>
                            </li>

                            <li class="nav-item">
                                <a href="../index.js" class="nav-link">
                                    <img src={ytButton} class="social-link" alt="Botão do Youtube" />
                                </a>
                            </li>
                        </ul>

                        
                    </div>

                </nav>
                    
            </header>

        )
    }

}