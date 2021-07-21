import styled from '@emotion/styled';

export const SiteLayoutBackground = styled.div`
  position: relative;
  width: 100%;
  padding: 14vw 14px 0;
  .bg_pastel_pabout {
    position: absolute;
    top: 50vw;
    right: 0;
    z-index: 0;
    width: 227px;
    height: 630px;
    background: url('/assets/img/bg_home_pabout.png') no-repeat;
    background-size: contain;
  }
  .part_img {
    position: relative;
    width: 238px;
    height: 240px;
    margin: 39px 27px 20px auto;
    .part_img_elm {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('/assets/img/img_home_team_mo_01.png') no-repeat center center/contain;
    }
  }

  /*Tab Content*/
  .part_tabs_wrap {
    flex-direction: column-reverse;
    .ant-tabs-nav {
      margin-top: 15vw;
      font-weight: 600;
      .ant-tabs-nav-wrap {
        justify-content: flex-end;
      }
      .ant-tabs-nav-list {
        display: block;
        .ant-tabs-tab {
          display: block;
          padding: 6px 0;
        }
      }
      .ant-tabs-tab {
        font-size: 17px;
      }
      .ant-tabs-tab + .ant-tabs-tab {
        margin: 0;
      }
      .ant-tabs-ink-bar-animated {
        display: none;
      }
    }
    .ant-tabs-nav::before {
      border: none;
    }
    .ant-tabs-nav-wrap::after {
      box-shadow: none;
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: #326de4;
    }
    .ant-tabs-tab:hover {
      color: inherit;
    }
    .sub_title {
      span {
        color: #595959;
        vertical-align: middle;
      }
      .view_fill {
        margin-left: 2vw;
        font-size: 0;
      }
    }
  }

  /*Content*/
  .tabs_content_wrap {
    margin-top: 20px;
    h2 {
      display: inline-block;
      height: 13px;
      padding-right: 13px;
      line-height: 0.7;
      background: rgba(255, 180, 52, 0.44);
      span {
        position: relative;
        bottom: 16px;
      }
    }
    p {
      word-break: keep-all;
      width: 70%;
    }
  }
  @media only screen and (min-width: 415px) {
    .ant-tabs {
      overflow: inherit;
    }
    .bg_pastel_pabout {
      position: absolute;
      top: 30vw;
      right: 0;
      z-index: 0;
      width: 245px;
      height: 680px;
      background: url('/assets/img/bg_home_pabout.png') no-repeat;
      background-size: contain;
    }
    .part_tabs_wrap {
      .sub_title {
        span {
          font-size: 1.4rem;
        }
      }
    }
    /*Content*/
    .tabs_content_wrap {
      margin-top: 20px;
      h2 {
        span {
          bottom: 20px;
          font-size: 2.2rem;
        }
      }
      p {
        font-size: 1.4rem;
      }
    }
    .part_img {
      position: relative;
      width: 238px;
      height: 240px;
      margin: 39px 27px 20px auto;
      .part_img_elm {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('/assets/img/img_home_team_mo_01.png') no-repeat center center/contain;
      }
    }
  }
  @media only screen and (min-width: 769px) {
    padding: 0 9.9vw;
    .bg_pastel_pabout {
      top: 10vw;
      width: 35.39vw;
      height: 98.203vw;
    }
    .part_img {
      position: absolute;
      top: 9vw;
      right: 9.9vw;
      width: calc(100vw * (458 / 1280));
      height: calc(100vw * (463 / 1280));
      padding: 0;
      margin: 0;
      .part_img_elm {
        position: relative;
        height: 100%;
        background-image: url('/assets/img/img_home_team_01.png');
      }
    }
    .part_tabs_wrap {
      margin-top: 8vw;
      /*Tab*/
      .ant-tabs-nav {
        margin-top: 4vw;
        font-weight: 600;
        .ant-tabs-nav-wrap {
          justify-content: flex-start;
        }
      }
      /*Content*/
      .tabs_content_wrap {
        margin-top: 20px;
        line-height: 1;
        h2 {
          span {
            position: relative;
            bottom: 16px;
          }
        }
      }
      p {
        word-break: keep-all;
        width: 30%;
      }
    }
  }
`;
