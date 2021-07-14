import Layout, { Footer, Header } from 'antd/lib/layout/layout';
import { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { HeaderBox, Logo } from './styled';
import { animateScroll as scroll } from 'react-scroll';
import { Dropdown, Icon } from 'semantic-ui-react';

const trigger = (
  <span>
    <Icon name="user" /> Hello, Bob
  </span>
);
const alam = (
  <span>
    <Icon name="user" />
  </span>
);
const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'stars', text: 'Your Stars' },
  { key: 'explore', text: 'Explore' },
  { key: 'integrations', text: 'Integrations' },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' },
];

const AppLayout: FC = ({ children }) => {
  const location = useLocation().pathname.split('/')[1];
  const [isLogin, setIsLogin] = useState(false);
  const toggleHome = useCallback(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <HeaderBox>
      <Layout>
        <div className="header">
          <header className="gnb_pc">
            <h1 className="logo_main">doongji</h1>
            <nav>
              <ul className="gnb">
                <li className={location === 'about' ? 'active' : ''}>
                  <Link to="/about">소개</Link>
                </li>
                <li className={location === 'project' ? 'active' : ''}>
                  <Link to="/project">프로젝트</Link>
                </li>
                <li className={location === 'calendar' ? 'active' : ''}>
                  <Link to="/calendar">캘린더</Link>
                </li>
                <li className={location === 'community' ? 'active' : ''}>
                  <Link to="/community">커뮤니티</Link>
                  <ul className="lnb">
                    <li>
                      <Link to="/">공지사항</Link>
                    </li>
                    <li>
                      <Link to="/">자유게시판</Link>
                    </li>
                    <li>
                      <Link to="/">질문게시판</Link>
                    </li>
                    <li>
                      <Link to="/">링크게시판</Link>
                    </li>
                  </ul>
                </li>
                <li className={location === 'question' ? 'active' : ''}>
                  <Link to="/question">Q&A</Link>
                </li>
              </ul>
            </nav>
            {/* <!-- snb 로그인, 로그아웃 상태에 따라 className 'on' 추가 --> */}
            <ul className="snb status_logout on">
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="/signup">로그아웃</Link>
              </li>
            </ul>
            <ul className="snb status_login">
              <li>
                <Link to="/">알림</Link>
              </li>
              <li>
                <Link to="/">내 정보</Link>
              </li>
            </ul>
          </header>
        </div>
        {children}
        <Footer
          style={{
            marginTop: '64px',
          }}
        >
          Footer
        </Footer>
      </Layout>
    </HeaderBox>
  );
};

export default AppLayout;
