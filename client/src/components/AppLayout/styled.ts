import styled from '@emotion/styled';
import { Link as LinkR } from 'react-router-dom';
export const Logo = styled(LinkR)`
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.2);
`;
export const HeaderBox = styled.div`
  .gnb_pc {
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #e1e0e1;
    padding: 0 25px;
    box-sizing: border-box;
    background: #fff;
  }
  .gnb_pc .logo_main {
    width: 183px;
    height: 37px;
    background: url('/logo_main.svg') center / cover no-repeat;
    text-indent: -9999px;
    margin-right: 58.5px;
  }
  .gnb_pc ul {
    display: flex;
    align-items: center;
  }

  /* 대카테고리 */
  .gnb {
    gap: 30px;
  }
  .gnb .gnb li {
    height: 60px;
    line-height: 60px;
    font-size: 1.0625rem;
    font-weight: 500;
  }
  .gnb li a {
    padding: 0 10px;
    box-sizing: border-box;
  }
  .gnb_pc .gnb > li:hover > a,
  .gnb_pc .gnb > li.active > a {
    color: #0442bf;
    border-bottom: 2px solid #0442bf;
    box-sizing: border-box;
  }
  /* 소카테고리 */
  .gnb_pc .lnb {
    width: 100%;
    padding-left: 255px;
    box-shadow: 0 10px 10px rgba(166, 166, 166, 0.3);
    position: absolute;
    top: 61px;
    left: 0;
    box-sizing: border-box;
    background: #fff;
    z-index: 999;
  }
  .gnb_pc .lnb li a {
    padding: 0 20px;
  }
  .gnb_pc .lnb li:hover a {
    color: #0442bf;
  }
  /* 서브메뉴 */
  .gnb_pc .snb {
    margin-left: auto;
    color: #a6a6a6;
    font-size: 0.8125rem;
  }
  .snb.on {
    display: inline-flex;
  }
  .snb li {
    height: 60px;
    line-height: 60px;
  }
  .gnb_pc .snb li:first-child a::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 12px;
    background: #a6a6a6;
    margin: 0 6px;
  }
  .gnb_pc .snb li a::before {
    content: '';
    display: inline-block;
    vertical-align: text-bottom;
    margin-right: 6px;
  }
  .gnb_pc .status_logout li:first-child a::before {
    width: 13px;
    height: 16px;
    background: url('../assets/ico/ico_user_lg.svg') center / cover no-repeat;
  }
  .gnb_pc .status_logout li:last-child a::before {
    width: 17px;
    height: 17px;
    background: url('../assets/ico/ico_signin_lg.svg') center / cover no-repeat;
  }
  .gnb_pc .status_login li:first-child {
    width: 15px;
    padding: 0 10px;
    background: url('../assets/ico/ico_alarm.svg') center / 15px 20px no-repeat;
    text-indent: -9999px;
  }
  .gnb_pc .status_login li:last-child {
    width: 34px;
    padding: 0 10px;
    background: url('../assets/img/img_profile_default.png') center / cover no-repeat;
    text-indent: -9999px;
  }
  .gnb_pc .snb li:hover a {
    color: #0442bf;
  }
  .gnb_pc .status_logout li:first-child:hover a::before {
    background: url('../assets/ico/ico_user_b.svg') center / cover no-repeat;
  }
  .gnb_pc .status_logout li:last-child:hover a::before {
    background: url('../assets/ico/ico_signin_b.svg') center / cover no-repeat;
  }
`;
