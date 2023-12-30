import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import React, { useState } from 'react';
import { mobile } from './responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })}
`;

const InputContainer = styled.div`
  width: 70%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: '80%' })}
`;

const Input = styled.input`
  border: none;
  flex: 1;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to send the email to the server
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Subscription successful!');
      } else {
        alert('Subscription failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error during subscription:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>🎉 Subscribe now to receive daily exciting offers and divine Aartis of Bhagwan in your inbox! <br />
       🌟 Embrace the joy of savings and spiritual bliss. Don't miss out! 💌✨ .</Desc>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">
            <Send />
          </Button>
        </InputContainer>
      </form>
    </Container>
  );
};

export default Newsletter;
