import { List } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Content } from 'antd/lib/layout/layout';
import { SiteLayoutBackground } from './styeld';
const data = [
  {
    id: '1',
    title: '제목도 필요없을 듯',
    contents: '일단은 핵심적인 내용만 구현할게요',
  },
  {
    id: '2',
    title: '필요할려나 퍼블분들꺼 봐야할듯해요',
    contents: '잘하고싶네용',
  },
  {
    id: '3',
    title: '호호호',
    contents: '최대한 빠르게 잘 해보겠습니다',
  },
];
const QuestionList: FC = () => {
  return (
    <section className="section">
      <Content className="site-layout">
        <SiteLayoutBackground>
          <h2 className="sub_title">
            <span>궁금한게 있으시다면 무엇이든지 물어보세요!</span>
          </h2>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <Link to={`question/${item.id}`}>
                <List.Item>
                  <div className="Q">Q.</div>
                  <List.Item.Meta title={<a href="https://ant.design">{item.title}</a>} description={item.contents} />
                  <div>
                    <img src="/assets/ico/ico_next_lg.svg" />
                  </div>
                </List.Item>
              </Link>
            )}
          />
          <Link className="to_question_link" to="question">
            <span>VIEW MORE</span>
          </Link>
        </SiteLayoutBackground>
      </Content>
    </section>
  );
};

export default QuestionList;
