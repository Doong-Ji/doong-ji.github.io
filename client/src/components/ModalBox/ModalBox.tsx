import React, { FC, useState } from 'react';
import { Modal, Button } from 'antd';
import { ModalStyle } from './styled';

const ModalBox: FC = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <ModalStyle>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </ModalStyle>
  );
};
// 사용 예시
{
  /* <ModalBox>
        <h1>이것은 모달 샘플입니다</h1>
        <h2>모달 태그 안에 원하시는 내용을 넣어주세요</h2>
      </ModalBox> */
}
export default ModalBox;
