// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'

import './SwiperBanner.css'
import arrowLeft from '../assets/images/button-left.png'
import arrowRight from '../assets/images/button-right.png'
import sliderImage from '../assets/images/hero-banner__image.png'

// install Swiper modules
SwiperCore.use([Navigation]);



const SwiperBanner = () => {

  return (
    <div className="my-md-2">
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
      >
        <SwiperSlide>
          <div class="container my-sm-5 slider1">
              <div class="swiper-button-prev">
                  <img src={arrowLeft} class="arrow-left" alt="Seta para Voltar o Slide" />
              </div>
              <div class="swiper-button-next">
                  <img src={arrowRight} class="arrow-right" alt="Seta para Prosseguir o Slide" />
              </div>
              <div class="row">
                  <div class="slider-text">
                      <h2 class="slider-title1">Faça seu teste</h2>
                      <h2 class="slider-title2">De Frontend</h2>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, euismod at egestas sapien porttitor dui.
                      </p>
                      <a href="../index.js"><button class="button-banner">CALL TO ACTION</button></a>
                  </div>

                  <img src={sliderImage} class="img-fluid slider-image" alt="Charizard" />

              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="container my-sm-5 slider2">
              <div class="swiper-button-prev">
                  <img src={arrowLeft} class="arrow-left" alt="Seta para Voltar o Slide" />
              </div>
              <div class="swiper-button-next">
                  <img src={arrowRight} class="arrow-right" alt="Seta para Prosseguir o Slide" />
              </div>
              <div class="row">
                  <div class="slider-text">
                      <h2 class="slider-title1">Faça seu teste</h2>
                      <h2 class="slider-title2">Outro Banner</h2>
                      <p>
                          Ait amet, consectetur adipiscing elit. Amet, euismod at egestas sapien porttitor dui.
                      </p>
                      <a href="../index.js"><button class="button-banner">CALL TO ACTION</button></a>
                  </div>
                  
                  <img src={sliderImage} class="img-fluid slider-image" alt="Charizard" />
                  
              </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
    
  )
}

export default SwiperBanner