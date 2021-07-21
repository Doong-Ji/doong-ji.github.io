import styled from '@emotion/styled';

export const SiteLayoutBackground = styled.div`
  position: relative;
  height: 118vw;
  .question_wrap {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 118vw;
    padding: 28vw 14px 0;
    text-align: center;
    .sub_title {
      width: 160px;
      margin: 5vw auto;
      font-weight: 600;
      word-break: keep-all;
    }
    .ant-list-item {
      margin: 4vw 0;
      padding: 3vw 5vw;
      color: #a6a6a6;
      text-align: left;
      border-radius: 4rem;
      border: none;
      background: #fff;
      cursor: pointer;
      transition: all 0.2s ease-in;
      box-shadow: 4px 4px 10px 2px rgba(25, 25, 25, 0.1);
    }
    .ant-list-item:hover {
      box-shadow: 5px 5px 12px 4px rgba(25, 25, 25, 0.2);
    }
    .ant-list-item-meta {
      padding: 0 4vw 0 1.5vw;
    }
    .ant-list-item-meta-title {
      margin: 0;
      font-size: 1rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      width: 100%;
      overflow: hidden;
      a {
        color: #595959;
      }
    }
    .ant-list-item-meta-description {
      font-size: 0.8rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      width: 100%;
      overflow: hidden;
    }
    .Q {
      color: #456fc5;
      font-size: 2rem;
      font-weight: 600;
    }
    .ant-list-item-meta-content {
      color: #a6a6a6;
    }
    .to_question_link {
      display: inline-block;
      margin-top: 10px;
      padding: 3px 0;
      color: #0442bf;
      font-size: 1.3rem;
      font-weight: 700;
      border-bottom: 3px solid;
      span {
        display: inline-block;
        padding: 0 1px;
        background: rgba(255, 180, 52, 0.4);
      }
    }
  }

  @media only screen and (min-width: 415px) {
    height: 100vw;
    .question_wrap {
      .sub_title {
        width: 320px;
      }
    }
  }
  @media only screen and (min-width: 769px) {
    height: 90vw;
    .question_wrap {
      width: 100%;
      padding: 28vw 15vw 0;
      text-align: center;
      .sub_title {
        width: 100%;
        margin: 5vw auto;
        font-size: 1.8rem;
        font-weight: 600;
        word-break: keep-all;
      }
      .ant-list-item {
        margin: 2vw 0;
        padding: 2vw 3vw;
        border-radius: 10rem;
      }
    }
  }
`;
