import React from 'react';
import { Button, Modal, Text } from '@nextui-org/react';

export function SuccessModal({ success }) {
  const [visible, setVisible] = success;

  const closeHandler = () => {
    setVisible(false);
    globalThis.location.href = '/';
  };

  return (
    <>
      <Modal closeButton animated blur open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Text b size={18}>
            Thanks for contacting me ✅
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text
            b
            css={{
              alignSelf: 'center',
            }}
          >
            I will answer you soon 😃
          </Text>
          <Button color='success' auto onClick={() => setVisible(false)}>
            <Text b size={16}>
              Return
            </Text>
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}