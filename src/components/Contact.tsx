import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(!validateEmail(email));
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    if (name !== '' && validateEmail(email) && message !== '') {
      var templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log(templateParams);
      emailjs.send('service_0uxwide', 'template_yfzu2ye', templateParams, 'rl-BHhIBFrHKYDYK8').then(
        (response: any) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error: Error) => {
          console.log('FAILED...', error);
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <div className="input-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={nameError ? 'error' : ''}
                />
                {nameError && <span className="error-text">Please enter your name</span>}
              </div>
              <div className="input-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="text"
                  id="email"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={emailError ? 'error' : ''}
                />
                {emailError && <span className="error-text">Please enter a valid email address</span>}
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                placeholder="Send me any inquiries or questions"
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`body-form ${messageError ? 'error' : ''}`}
              />
              {messageError && <span className="error-text">Please enter the message</span>}
            </div>
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;