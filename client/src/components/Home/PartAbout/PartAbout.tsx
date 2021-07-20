import { FC } from 'react';
import { Tabs } from 'antd';

import { Content } from 'antd/lib/layout/layout';
import { SiteLayoutBackground } from './styeld';
const { TabPane } = Tabs;

// submenu keys of first level

const data = [
  {
    id: '1',
    part: '퍼블리싱 팀',
    contents: '웹표준과 웹접근성에 맞춰 프로젝트의 마크업을 주도합니다',
  },
  {
    id: '2',
    part: '프론트엔드 팀',
    contents: '퍼블리싱한 내용을 바탕으로 API를 웹페이지에 적용하고 백엔드와 연동시켜 실제 작동이 가능하도록 합니다',
  },
  {
    id: '3',
    part: '백엔드 팀 - Spring',
    contents: 'Spring 프레임워크를 사용하여 사이트에서 사용하는 전반적인 데이터를 제공합니다',
  },
  {
    id: '4',
    part: '백엔드 팀 - Node.js',
    contents: 'Node.js를 사용하여 데이터를 구성합니다',
  },
];
const PartAbout: FC = () => {
  return (
    <section className="section">
      <Content className="site-layout">
        <SiteLayoutBackground>
          <div className="bg_pastel_pabout"></div>
          <h1 className="main_title">
            <span>둥지는</span>
            <span>어떤 팀으로</span>
            <span>구성되어 있나요?</span>
          </h1>
          <div className="part_img">
            <img src="/assets/img/img_home_team_01.png"></img>
          </div>
          <Tabs className="part_tabs_wrap" tabPosition={'bottom'}>
            {data &&
              data.map((item, index) => {
                return (
                  <TabPane
                    tab={
                      <p className="sub_title">
                        <span>{item.part}</span>
                        <span className="view_fill">
                          <img src="/assets/img/icon/view-fill.png" />
                        </span>
                      </p>
                    }
                    key={`sub${index + 1}`}
                  >
                    <div className="tabs_content_wrap">
                      <h2>
                        <span>{item.part}</span>
                      </h2>
                      <p className="sub_title">{item.contents}</p>
                    </div>
                  </TabPane>
                );
              })}
          </Tabs>
        </SiteLayoutBackground>
      </Content>
    </section>
  );
};

export default PartAbout;
