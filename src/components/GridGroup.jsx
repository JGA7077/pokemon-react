// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss';
import { useMediaQuery } from './SwiperEnabler'

import React from 'react'
import './GridGroup.css'
import arrowLeft from '../assets/images/button-left.png'
import arrowRight from '../assets/images/button-right.png'
import pokeball from '../assets/images/pokeball.png'
import pikachu from '../assets/images/pikachu.png'

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);


const GridGroup = () => {

    // Usando o Hook importado do arquivo 'SwiperEnabler' na linha 9, para identificar o tamanho da tela 
    // e usar um 'Listener' para identificar quando a tela chega em uma largura desejada
    let pageWidth = useMediaQuery('(max-width: 767px)')

    // Após identificado o limite da largura, se o if retornar 'true', 
    // nesse caso, se a tela tiver no máximo 767px, o Swiper será usado.
    // Caso contrário, o Swiper não existirá e então, o layout será o grid comum
    if ( pageWidth ) {
        return(

            <div className="container grid-group">

                <div className="row">

                    <div className="swiper-container">

                    <div class="swiper-button-prev">
                        <img src={arrowLeft} class="grid-arrow-left" alt="Seta para voltar o Card" />
                    </div>
                    <div class="swiper-button-next">
                        <img src={arrowRight} class="grid-arrow-right" alt="Seta para prosseguir o Card" />
                    </div>

                        <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                        pagination={{ type: 'bullets', el: '.swiper-pagination' }}
                        >
                            <div class="swiper-pagination"></div>
                            <SwiperSlide>
                                <div className="grid-item col-md-6">
                                    <h2 class="mb-3">Pikachu</h2>
                                    <div className="card">
                                        <img src={"https://pokeres.bastionbot.org/images/pokemon/25.png"} className="card-pokemon p-5 p-sm-2" alt="Pikachu" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="grid-item col-md-6">
                                    <h2 class="mb-3">Ivysaur</h2>
                                    <div className="card">
                                        <img src={"https://pokeres.bastionbot.org/images/pokemon/2.png"} className="card-pokemon p-5 p-sm-2" alt="Ivysaur" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="grid-item col-md-6">
                                    <h2 class="mb-3">Bulbasaur</h2>
                                    <div className="card">
                                        <img src={"https://pokeres.bastionbot.org/images/pokemon/1.png"} className="card-pokemon p-5 p-sm-2" alt="Bulbasaur" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="grid-item col-md-6">
                                    <h2 class="mb-3">Charizard</h2>
                                    <div className="card">
                                        <img src={"https://pokeres.bastionbot.org/images/pokemon/6.png"} className="card-pokemon p-5 p-sm-2" alt="Charizard" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>


                    <aside class="col-md-6 mt-5 px-0">
                        <div className="mt-5 py-5 px-4 aside-box">

                            <h2 class="mb-4">Teste Frontend</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, a lacus, aliquam mattis est enim, molestie diam. Consequat blandit nec, venenatis dignissim suspendisse in facilisi molestie duis. Tempor sed quis phasellus arcu, posuere. Elementum ut tellus nisi, nunc ac etiam ut lectus porta. Et morbi enim vestibulum sodales sed ullamcorper dapibus accumsan. Faucibus pharetra, et at orci, vel blandit odio. Volutpat urna fusce quisque libero pellentesque in. Augue tempor vitae ullamcorper bibendum.
                            </p>
                            <p>
                                Quis facilisi nulla id est natoque sed ut consectetur. Id eleifend eros ullamcorper et. Diam, ultrices pellentesque urna, integer a lectus. Sit sollicitudin ac egestas amet netus. Elit vitae dolor cursus cursus.
                            </p>
                            <div class="d-flex justify-content-center justify-content-sm-start center-button"><button class="button">CALL TO ACTION</button></div>

                            <img src={pokeball} class="pokeball d-none d-lg-block" alt="Pokébola" width="141px" height="141px" />
                            <img src={pikachu} class="pikachu d-none d-lg-block" alt="Pikachu" />
                        </div>
                    </aside>

                </div>
            </div>

        )
    }

    return(

        <section class="container mb-5 grid-group">

            <div className="row d-flex">

                <div class="mb-3 grid-cards col-md-6">

                    <div className="row my-5">

                        <div className="grid-item col-md-6">
                            <h2 class="mb-3">Pikachu</h2>
                            <div className="card">
                                <img src={"https://pokeres.bastionbot.org/images/pokemon/25.png"} className="card-pokemon p-2" alt="Pikachu" />
                            </div>
                        </div>

                        <div className="grid-item col-md-6">
                            <h2 class="mb-3">Ivysaur</h2>
                            <div className="card">
                                <img src={"https://pokeres.bastionbot.org/images/pokemon/2.png"} className="card-pokemon p-2" alt="Ivysaur" />
                            </div>
                        </div>

                    </div>

                    <div className="row my-5">

                        <div className="grid-item col-md-6">
                            <h2 class="mb-3">Bulbasaur</h2>
                            <div className="card">
                                <img src={"https://pokeres.bastionbot.org/images/pokemon/1.png"} className="card-pokemon p-2" alt="Bulbasaur" />
                            </div>
                        </div>

                        <div className="grid-item col-md-6">
                            <h2 class="mb-3">Charizard</h2>
                            <div className="card">
                            <img src={"https://pokeres.bastionbot.org/images/pokemon/6.png"} className="card-pokemon p-2" alt="Charizard" />
                            </div>
                        </div>

                    </div>

                    
                    
                </div>

                <aside class="col-md-6 mt-5 px-0">
                    <div className="mt-5 py-5 px-4 aside-box">

                        <h2 class="mb-4">Teste Frontend</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, a lacus, aliquam mattis est enim, molestie diam. Consequat blandit nec, venenatis dignissim suspendisse in facilisi molestie duis. Tempor sed quis phasellus arcu, posuere. Elementum ut tellus nisi, nunc ac etiam ut lectus porta. Et morbi enim vestibulum sodales sed ullamcorper dapibus accumsan. Faucibus pharetra, et at orci, vel blandit odio. Volutpat urna fusce quisque libero pellentesque in. Augue tempor vitae ullamcorper bibendum.
                        </p>
                        <p>
                            Quis facilisi nulla id est natoque sed ut consectetur. Id eleifend eros ullamcorper et. Diam, ultrices pellentesque urna, integer a lectus. Sit sollicitudin ac egestas amet netus. Elit vitae dolor cursus cursus.
                        </p>
                        <div class="d-flex justify-content-center justify-content-sm-start center-button"><button class="button">CALL TO ACTION</button></div>
                        <img src={pokeball} class="pokeball d-none d-lg-block" alt="Pokébola" width="141px" height="141px" />
                        <img src={pikachu} class="pikachu d-none d-lg-block" alt="Pikachu" />
                    </div>
                </aside>

            </div>
            

        </section>

    )
}

export default GridGroup