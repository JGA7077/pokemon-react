import { React, Component } from 'react'
import './Footer.css'
import logo from '../assets/images/logo.png'
import email from '../assets/images/mail.png'
import faceButton from '../assets/images/face-button.png'
import instaButton from '../assets/images/insta-button.png'
import ytButton from '../assets/images/yt-button.png'
import yoohLogo from '../assets/images/logo-yooh.svg'

export default class Footer extends Component {
    render() {
        return(

            <footer class="mt-sm-3 bg-white">

                <nav class="navbar navbar-expand bg-white">

                    <div class="container top-footer">

                        <a href="../index.js" className="d-none d-sm-block navbar-brand">
                        <img src={logo} class="" alt="Logo" />
                        </a>

                        <ul class="navbar-nav d-flex align-items-center m-auto m-md-0 flex-column flex-md-row footer-icons">

                            <div className="email-icon mt-4 mt-md-0 d-flex">
                                <li className="nav-item">
                                    <a href="../index.js" className="nav-link">
                                        <img src={email} alt="Ícone de e-mail" class="mail-button" width="16px" height="12px" />
                                        <span className="ml-3 mail">email@testeweb.com</span>
                                    </a>
                                </li>
                            </div>

                            <div className="social-icons mb-4 mb-md-0 d-flex">
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
                            </div>
                        
                        </ul>
                        
                    </div>

                </nav>  

                <div class="container bottom-footer">

                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-between">

                        <img src={logo} class="d-sm-none mt-4 mt-md-0" alt="Logo" width="145px" height="25px" />
                        <p class="mt-3 copyright">
                            2020 &copy; Todos os direitos reservados.
                        </p>
    
                        <p class="mt-3 mt-md-0 mb-2 mb-md-0 develop d-sm-none">Desenvolvido por</p>
                        <img src={yoohLogo} alt="Logo Yooh" class="mb-5 mb-md-0" />

                    </div>

                </div>

            </footer>

        )
    }
}