import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import Modal from 'react-modal';

const Chatbot = ({ chatMessages, onSendMessage, setChatMessages }) => {
  const [userMessage, setUserMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendMessage = async () => {
    if (userMessage.trim() !== '') {
      onSendMessage(userMessage);
      setUserMessage('');
    }
  };

  const handleRestartConversation = () => {
    setChatMessages([]);
    setUserMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Button variant="contained" color="primary" size="small" onClick={toggleModal} style={{ margin: '5px' }}>
        Open Chat
      </Button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        style={modalStyle}
        shouldCloseOnOverlayClick={false}
      >
        <Paper style={{ height: '400px', padding: '10px', overflow: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={toggleModal} size="small">
              <CloseIcon />
            </IconButton>
          </div>
          <Typography variant="h6" style={{ marginBottom: '10px' }}>
            Chatting with Bot
          </Typography>
          {chatMessages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
            >
              {message.sender === 'user' ? (
                <>
                  <strong style={{ color: 'blue' }}>You:</strong> {message.text}
                </>
              ) : (
                <>
                  <strong style={{ color: 'grey' }}>Bot:</strong> {message.text}
                </>
              )}
            </div>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              style={{ marginBottom: '10px' }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleSendMessage}
            >
              Send
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={handleRestartConversation}
              style={{ marginTop: '5px' }}
            >
              Restart Conversation
            </Button>
          </div>
        </Paper>
      </Modal>
    </div>
  );
};

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    border: '1px solid #ccc',
    background: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  },
};

export default Chatbot;
