import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import background from '../assets/background.png';

const LoaderOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Loader = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #214592;
  border-radius: 50%;
`;

const ContactContainer = styled.div`
  min-height: 100vh;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  position: relative;
  padding: 60px 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(33, 69, 146, 0.95),
      rgba(213, 18, 86, 0.95)
    );
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  color: white;
  font-size: 48px;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'days-one';
`;

const Subtitle = styled(motion.p)`
  color: white;
  font-size: 18px;
  text-align: center;
  margin-bottom: 50px;
  opacity: 0.9;
`;

const FormContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  color: white;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 16px;
  min-height: 150px;
  transition: all 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 15px;
  background: white;
  border: none;
  border-radius: 8px;
  color: #214592;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  color: #4CAF50;
  background: rgba(76, 175, 80, 0.1);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ErrorMessage = styled(motion.div)`
  text-align: center;
  color: #f44336;
  background: rgba(244, 67, 54, 0.1);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ContactUs = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    try {
      const formData = new FormData(e.target);
      const data = {
        timestamp: new Date().toISOString(),
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      const response = await fetch('https://script.google.com/macros/s/AKfycbz6rhr-COZ0g4dDG5ujl498mYdCADyU6tsK257s61gnqRCUs8_VVZ91cXovnjmlh9pL/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(data)
      });

      if (response.type === 'opaque' || response.ok) {
        setStatus({ submitting: false, success: true, error: false });
        e.target.reset();
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ submitting: false, success: false, error: true });
    }

    setTimeout(() => {
      setStatus(prev => ({ ...prev, success: false, error: false }));
    }, 3000);
  };

  return (
    <ContactContainer>
      {status.submitting && (
        <LoaderOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Loader
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </LoaderOverlay>
      )}
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get in touch with us for any queries about Celebrity Cricket League
        </Subtitle>

        <FormContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {status.success && (
            <SuccessMessage
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Thank you for your message! We'll get back to you soon.
            </SuccessMessage>
          )}

          {status.error && (
            <ErrorMessage
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Oops! Something went wrong. Please try again later.
            </ErrorMessage>
          )}

          <form ref={formRef} onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Phone</Label>
              <Input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Subject</Label>
              <Input
                type="text"
                name="subject"
                placeholder="Enter message subject"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Message</Label>
              <TextArea
                name="message"
                placeholder="Enter your message"
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={status.submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </SubmitButton>
          </form>
        </FormContainer>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default ContactUs;