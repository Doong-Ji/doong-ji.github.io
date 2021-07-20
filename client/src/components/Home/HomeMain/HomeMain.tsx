import { FC } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { SiteLayoutBackground } from './styeld';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
//import bgHomeSky from '/assets/img/bg_home_main_sky.png';
//import btnArrow from '/public/assets/img/icon/alarm-warning-fill-1.png';
const HomeMain: FC = () => {
  return (
    <section className="section section01">
      <Content className="site-layout">
        <SiteLayoutBackground>
          <div className="home_main_txt_area">
            <h1 className="main_title">
              <span>당신과 함께하고 싶어요</span>
              <span>여기 둥지에서</span>
            </h1>
            <p className="sub_title">
              둥지에서는 당신의 프로젝트에 관련한 모든 것을 도와드립니다. 다양한 프로젝트로 성장할 당신의 커리어를
              응원합니다.
            </p>
            <Button type="primary" shape="round" className="btn_to_page">
              <Link to="signup">
                <span>JOIN US</span>
                <img src="/assets/img/btn_arrow_right.svg" />
              </Link>
            </Button>
          </div>
          <div className="home_main_img_area">
            <img src="/assets/img/img_home_main_01.png" />
          </div>
        </SiteLayoutBackground>
      </Content>
    </section>
  );
};

export default HomeMain;

<p></p>;
//<Radiso></Radiso>
//보더컬러랑 백그라운드컬러 red로
