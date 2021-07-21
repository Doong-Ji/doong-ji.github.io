import styled from '@emotion/styled';

export const SiteLayoutBackground = styled.div`
  padding-top: 14vw;
  background: url('/assets/img/bg_home_main_sky.png') no-repeat -142vw 0/260vw;
  .sub_title {
    width: 70vw;
    margin: 5vw 0 7vw;
    font-size:1rem;
    color:#A6A6A6;
  }
  .home_main_txt_area{
    margin:0 14px;
  }
  .home_main_img_area {
    margin-top: 5vw;
    img {
      width: 100%;
    }
  }
  @media only screen and (min-width: 769px) {
    display: flex;
    justify-content:space-between;
    padding: 8vw 10vw;
    background: url('/assets/img/bg_home_main_sky.png') no-repeat 0 0/100vw;
    .sub_title {
      width: 25vw;
      margin: 2vw 0 4vw;
    }
    .home_main_txt_area{
      margin:9vw 0;
    }
    .home_main_img_area {
      margin-top: 0;
      margin-left:2vw;
      width: 80vw;
      img {
        width: 100%;
      }
  }
`;
