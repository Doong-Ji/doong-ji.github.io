import styled from '@emotion/styled';

export const ProjectItem = styled.div`
  position: relative;
  padding-top: 28vw;
  .main_title,
  .sub_title {
    padding-left: 20vw;
    word-break: keep-all;
  }
  .sub_title {
    margin: 2vw 0;
  }
  .bg_project_txt {
    position: absolute;
    top: 24vw;
    left: 0;
    z-index: 1;
    width: 21.875vw;
    height: 135.312vw;
    background: url('/assets/img/bg_main_OURPROJECT.png') no-repeat;
    background-size: contain;
  }
  .bg_pastel_project {
    position: absolute;
    top: 40vw;
    left: -10vw;
    z-index: 0;
    width: 110vw;
    height: 172.812vw;
    background: url('/assets/img/bg_home_project.png');
    background-size: contain;
  }
  .swiper_container_txt {
    padding: 20vw 20vw 33vw;
    background: #457ef2;
    .project_contnet_sliders {
      background: #457ef2;
    }
    h2 {
      font-size: 1.4rem;
      color: #fff;
    }
    h3 {
      font-family: 'Noto Serif KR', sans-serif;
      padding-top: 7vw;
      font-size: 1.4rem;
      line-height: 2rem;
      font-weight: 300;
      color: #fff;
    }
  }
  .to_project_link {
    display: inline-block;
    margin: 10vw 0;
    padding: 3px 0;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
    border-bottom: 3px solid;
  }
  .project_slide {
    position: relative;
    padding-bottom: 45vw;
  }
  .swiper_container_img {
    width: 100%;
    position: absolute;
    bottom: 0vw;
    right: 0;
    z-index: 2;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper_container {
    margin-right: 0;
    width: 80vw;
    height: 55.47vw;
    overflow: inherit;
    overflow-x: clip;
  }
  .swiper-slide-prev {
    opacity: 0;
    width: 0px;
    padding: 10%;
  }
  .swiper-slide-next {
    opacity: 0.4;
  }
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    display: inline-block;
    top: -18vw;
    left: auto;
    right: 34vw;
    bottom: auto;
    width: auto;
    color: #fff;
    font-size: 1.4rem;
  }
  .swiper-pagination-total {
    opacity: 0.6;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: -18vw;
    bottom: auto;
    height: auto;
    margin-top: 0;
    color: #fff;
    font-size: 1.4rem;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 1.4rem;
  }
  .swiper-button-prev {
    right: 9vw;
    left: auto;
  }
  .swiper-button-next {
    right: 3vw;
  }
  @media only screen and (min-width: 415px) {
    .main_title {
      font-size: 2.8rem;
    }
    .sub_title {
      font-size: 1.6rem;
    }
    .swiper_container_txt {
      h2 {
        font-size: 2rem;
        color: #fff;
      }
      h3 {
        font-family: 'Noto Serif KR', sans-serif;
        padding-top: 7vw;
        font-size: 2rem;
        font-weight: 300;
        color: #fff;
      }
    }
  }
  @media only screen and (min-width: 769px) {
    padding-top: 14vw;
    .main_title,
    .sub_title {
      padding-left: 10vw;
    }
    .sub_title {
      margin: 2vw 0;
    }
    .bg_project_txt {
      top: 12vw;
      left: 0;
      z-index: 1;
      width: 7.656vw;
      height: 47.343vw;
    }
    .bg_pastel_project {
      top: -10vw;
      left: -5vw;
      width: 60.156vw;
      height: 94.609vw;
    }
    .swiper_container_txt {
      padding: 10vw 30vw 3vw 15vw;
      h2 {
        font-size: 2.4rem;
      }
      h3 {
        font-size: 2rem;
        padding-top: 3vw;
      }
    }
    .to_project_link {
      margin: 5vw 0;
      padding: 3px 0;
      color: #fff;
      font-size: 1.8rem;
    }
    .project_slide {
      width: 70vw;
      padding-bottom: 25vw;
    }
    .swiper_container_img {
      position: absolute;
      top: 8vw;
      right: -23.9vw;
      z-index: 2;
      width: 60vw;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper_container {
      margin-right: 0;
      padding-left: 15vw;
      width: 65vw;
      height: 32.6vw;
      overflow: inherit;
      overflow-x: clip;
    }
    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-container-horizontal > .swiper-pagination-bullets {
      display: inline-block;
      top: 20vw;
      left: 3vw;
      right: auto;
    }
    .swiper-button-prev,
    .swiper-button-next {
      top: 20vw;
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
      font-size: 1.4rem;
    }
    .swiper-button-prev {
      right: auto;
      left: 9vw;
    }
    .swiper-button-next {
      right: auto;
      left: 12vw;
    }
    .swiper-slide {
      transition-delay: 1s;
      transition: 0.4s;
    }
  }
`;

export const SiteLayoutBackground = styled.div`
  background: #fff;
`;
