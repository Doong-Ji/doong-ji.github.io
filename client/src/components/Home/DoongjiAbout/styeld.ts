import styled from '@emotion/styled';

export const SiteLayoutBackground = styled.div`
  padding-top: 14vw;
  .main_title {
    margin-left: 14px;
  }
  .doongji_about_content {
    width: 100%;
    .img_box {
      position: relative;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .sub_title {
    width: 60%;
  }
  .doongji_about_content.fir {
    padding-top: 2vw;
    .flex_box {
      display: flex;
      margin: 14px;
      justify-content: flex-start;
      .sub_title {
        justify-content: flex-end;
      }
    }
    .img_box {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      img {
        width: 50%;
      }
    }
  }

  .doongji_about_content.two {
    padding-top: 2vw;
    .flex_box {
      display: flex;
      margin: 14px;
      justify-content: flex-end;
    }
    .img_box {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      img {
        position: relative;
        left: -5vw;
        width: 60%;
      }
    }
  }
  @media only screen and (min-width: 415px) {
    .sub_title {
      font-size: 1.8rem;
    }
  }
  @media only screen and (min-width: 769px) {
    .main_title {
      margin-left: 130px;
    }
    .sub_title {
      font-size: 2.2rem;
      font-weight: bold;
      line-height: 2.5rem;
    }
    .doongji_about_content {
      padding: 0 130px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .img_box {
        position: relative;
        img {
          display: block;
          width: 100%;
        }
      }
    }
    /*둥지*/
    .doongji_about_content.fir {
      padding-top: 5vw;
      .flex_box {
        width: 32%;
        margin: 0 0 5vw 0;
        .sub_title {
          width: 100%;
        }
      }
      .img_box {
        width: 55%;
        margin-left: 5vw;
        img {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
        }
      }
    }
    .doongji_about_content.two {
      flex-direction: row-reverse;
      .flex_box {
        display: flex;
        width: 65%;
        align-items: center;
        .sub_title {
          width: 80%;
        }
      }
      .img_box {
        display: flex;
        justify-content: flex-start;
        width: 35%;
        img {
          width: 100%;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
  }
`;
