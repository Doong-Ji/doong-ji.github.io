import styled from '@emotion/styled';
import { Button, Menu } from 'antd';
import Layout, { Footer, Header } from 'antd/lib/layout/layout';
import SubMenu from 'antd/lib/menu/SubMenu';
import { FC, useCallback, useEffect, useState } from 'react';
import { Link, Link as LinkR } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import ModalBox from '../ModalBox';
const AppLayout: FC = ({ children }) => {
  // TopNav scroll시 고정
  // const [scrollNav, setScrollNav] = useState(false);

  // const changeNav = () => {
  //   if (window.scrollY >= 160) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', changeNav);
  // }, []);

  const toggleHome = useCallback(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <Layout>
        <Header
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            transition: '0.8s all ease',
            marginBottom: '64px',
          }}
        >
          <Logo to="/" className="logo" onClick={toggleHome} />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="about">둥지소개</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="notice">공지사항</Link>
            </Menu.Item>
            <Menu.SubMenu key="3" title={<Link to="community">커뮤니티</Link>}>
              <Menu.ItemGroup title="게시판">
                <Menu.Item key="setting:1">자유게시판</Menu.Item>
                <Menu.Item key="setting:2">질문게시판</Menu.Item>
                <Menu.Item key="setting:3">링크공유게시판</Menu.Item>
                <Menu.Item key="setting:4">프로젝트게시판</Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>

            <Menu.SubMenu key="4" title={<Link to="project">프로젝트</Link>}>
              <Menu.ItemGroup title="프로젝트">
                <Menu.Item key="setting:1">진행중</Menu.Item>
                <Menu.Item key="setting:2">진행예정</Menu.Item>
                <Menu.Item key="setting:3">완료</Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
            <Menu.Item key="5">
              <Link to="calendar">캘린더</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="question"> Q & A</Link>
            </Menu.Item>

            <Button type="primary" shape="round" style={{ left: '50px' }}>
              <Link to="signup">Sign in</Link>
            </Button>
            <ModalBox>
              <h1>이것은 모달 샘플입니다</h1>
              <h2>모달 태그 안에 원하시는 내용을 넣어주세요</h2>
            </ModalBox>
          </Menu>
        </Header>
        {children}

        <Footer
          style={{
            marginTop: '64px',
          }}
        >
          Footer
        </Footer>
      </Layout>

      {/* 
        반복되는 상단 Header layout 적용
        로고  --  둥지소개, 공지사항, 커뮤니티, 프로젝트, 캘린터, Q & A, 상단 로그인/회원가입
      */}
    </>
  );
};
const Logo = styled(LinkR)`
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.2);
`;
export default AppLayout;
