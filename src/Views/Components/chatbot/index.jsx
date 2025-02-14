import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import { Box, Button, TextField, Paper, Typography } from '@mui/material';
import emotionStyled from '@emotion/styled';
import AdjustIcon from '@mui/icons-material/Adjust';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Typewriter from 'typewriter-effect';
import { ChatButton, PaperEx, TypographyChat, Wrapper, SendButton } from './style';
import usePrompt from '../../../hooks/usePrompt';
import { ai_Tools, compare_Services, marketing, order_Now, welcomeMsg } from '../ListOfPrompts';

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const ChatBox = () => {
  const { prompt, loading: promptLoading, error: promtError } = usePrompt();
  const theme = useTheme();
  const [messages, setMessages] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState(true);
  const [userInput, setUserInput] = useState(''); // Make sure this is initialized correctly
  const [isOpen, setIsOpen] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false); // Track if the chatbot has been opened
  const [hasNewMessage, setHasNewMessage] = useState(true); // NEW: Controls notification badge
  const typewriterContainerRef = useRef(null); // Reference to the typewriter container
  const chatContainerRef = useRef(null); // Reference to the chat container
  const endOfMessagesRef = useRef(null); // Reference to the end marker

  // Scroll to the bottom function
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const handleSend = async (content = null) => {
    setIsBotTyping(true);
    const inputContent = content || userInput.trim();
    if (!inputContent) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', content: inputContent },
    ]);

    if (!content) {
      setUserInput('');
    }

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: [
            {
              role: 'system', content: `${prompt}
              You are an AI chatbot that ONLY provides information about AICM products and services.
              If a user asks something unrelated (e.g., weather, sports, history, or general knowledge), respond with:
              "I'm an AICM assistant and can only provide details about AICM products. Let me know how I can assist with AICM services! 😊"
              Never generate responses about unrelated topics.
              ` },
            { role: 'user', content: `${inputContent}, use proper html format and emojis and add line breaks if needed. Do not send repeater figures` },
          ],
          max_tokens: 2000,
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      let assistantMessage = response?.data.choices[0].message.content.trim().replace(/"/g, '');

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: 'assistant',
          content: assistantMessage,
          predefinedQuestions: welcomeMessage ? true : null,
        },
      ]);

      setWelcomeMessage(false);
      setIsBotTyping(false);

    } catch (error) {
      console.error('Error with OpenAI API:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'assistant', content: 'Oops! Something went wrong.' },
      ]);
    }
  };

  const handleOpenChatbot = () => {
    if (!hasOpened) {
      // Send welcome message only when the chatbot is opened for the first time
      handleSend(welcomeMsg);
      setHasOpened(true);
    }
    setIsOpen(!isOpen);
    setHasNewMessage(false); // Remove notification badge when the chatbot is opened
  };
  useEffect(() => {
    if (isOpen) {
      setHasNewMessage(false);
    }
  }, [isOpen]);


  useEffect(() => {
    if (chatContainerRef.current) {
      // scrollToBottom(); 
      chatContainerRef.current.scrollTop = chatContainerRef?.current?.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (typewriterContainerRef.current) {
      const observer = new MutationObserver(() => {
        scrollToBottom();
      });

      observer.observe(typewriterContainerRef.current, {
        childList: true,
        subtree: true,
        characterData: true,
      });

      return () => observer.disconnect();
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (userInput.trim() === '') return;
      handleSend();
    }
  };

  return (
    <>
      <ChatButton onClick={handleOpenChatbot}>
        <svg width="26" height="23" viewBox="0 0 56 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.6 0H8.4C6.17218 0 4.03561 0.881671 2.4603 2.45105C0.884998 4.02044 0 6.14898 0 8.36842V50.2105C0.000854999 50.7048 0.133529 51.19 0.384441 51.6164C0.635354 52.0428 0.995494 52.3952 1.428 52.6374C1.84648 52.8736 2.31899 52.9985 2.8 53C3.30255 52.9999 3.7958 52.865 4.228 52.6095L16.8 45.0221C17.2647 44.7465 17.7996 44.6109 18.34 44.6316H47.6C49.8278 44.6316 51.9644 43.7499 53.5397 42.1805C55.115 40.6111 56 38.4826 56 36.2632V8.36842C56 6.14898 55.115 4.02044 53.5397 2.45105C51.9644 0.881671 49.8278 0 47.6 0ZM16.8 25.1053C16.2462 25.1053 15.7049 24.9417 15.2444 24.6352C14.7839 24.3286 14.4251 23.893 14.2131 23.3833C14.0012 22.8736 13.9458 22.3127 14.0538 21.7716C14.1618 21.2305 14.4285 20.7334 14.8201 20.3433C15.2117 19.9532 15.7106 19.6875 16.2537 19.5799C16.7969 19.4723 17.3599 19.5275 17.8715 19.7387C18.3831 19.9498 18.8204 20.3073 19.1281 20.766C19.4358 21.2248 19.6 21.7641 19.6 22.3158C19.6 23.0556 19.305 23.7651 18.7799 24.2882C18.2548 24.8114 17.5426 25.1053 16.8 25.1053ZM28 25.1053C27.4462 25.1053 26.9049 24.9417 26.4444 24.6352C25.9839 24.3286 25.6251 23.893 25.4131 23.3833C25.2012 22.8736 25.1458 22.3127 25.2538 21.7716C25.3618 21.2305 25.6285 20.7334 26.0201 20.3433C26.4117 19.9532 26.9106 19.6875 27.4537 19.5799C27.9969 19.4723 28.5599 19.5275 29.0715 19.7387C29.5831 19.9498 30.0204 20.3073 30.3281 20.766C30.6358 21.2248 30.8 21.7641 30.8 22.3158C30.8 23.0556 30.505 23.7651 29.9799 24.2882C29.4548 24.8114 28.7426 25.1053 28 25.1053ZM39.2 25.1053C38.6462 25.1053 38.1049 24.9417 37.6444 24.6352C37.1839 24.3286 36.8251 23.893 36.6131 23.3833C36.4012 22.8736 36.3458 22.3127 36.4538 21.7716C36.5618 21.2305 36.8285 20.7334 37.2201 20.3433C37.6117 19.9532 38.1106 19.6875 38.6537 19.5799C39.1969 19.4723 39.7599 19.5275 40.2715 19.7387C40.7831 19.9498 41.2205 20.3073 41.5281 20.766C41.8358 21.2248 42 21.7641 42 22.3158C42 23.0556 41.705 23.7651 41.1799 24.2882C40.6548 24.8114 39.9426 25.1053 39.2 25.1053Z" fill="white" />
        </svg>
        {hasNewMessage && !isOpen && (
          <div style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            backgroundColor: '#e65100',
            color: 'white',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
          }}>
            1
          </div>
        )}
      </ChatButton>

      {isOpen && (
        <Wrapper>
          <div
            style={{
              padding: '5px 10px',
              backgroundColor: 'black',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: "15px",
              borderBottom: "1px solid rgba(134, 146, 158, 0.5)"
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', padding: '3px 5px' }}>
              <svg height="50" viewBox="0 0 158 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="41.5" cy="41.5" r="37.5" fill="#151515" fill-opacity="0.71" />
                <circle cx="41.5" cy="41.5" r="41" stroke="#FF7B29" />
                <path d="M55.3321 59V45.4H28.667V59H22.0008V38.6H61.9986V59H55.3321ZM38.7901 59V49.6805H45.4563V59H38.7901ZM28.667 31.8C27.7232 31.8112 26.7877 31.621 25.9218 31.2418C25.1756 30.9034 24.4994 30.4259 23.9286 29.8344C23.3047 29.1987 22.8127 28.4436 22.4817 27.6135C22.1507 26.7833 21.9872 25.8948 22.0008 25H61.9986C62.0174 25.9001 61.8512 26.7944 61.5105 27.6265C61.1699 28.4585 60.6622 29.2103 60.0193 29.8344C59.0133 30.8728 57.6929 31.5429 56.2671 31.7386C56.1645 31.7524 56.061 31.7639 55.9568 31.7732C55.7519 31.7912 55.5436 31.8002 55.3321 31.8002L28.667 31.8Z" fill="url(#paint0_linear_269_213)" />
                <path d="M97.9631 36H94.5881L100.733 18.5455H104.636L110.79 36H107.415L102.753 22.125H102.616L97.9631 36ZM98.0739 29.1562H107.278V31.696H98.0739V29.1562ZM116.251 18.5455V36H113.089V18.5455H116.251ZM134.615 24.4347H131.428C131.337 23.9119 131.169 23.4489 130.925 23.0455C130.68 22.6364 130.376 22.2898 130.013 22.0057C129.649 21.7216 129.234 21.5085 128.768 21.3665C128.308 21.2188 127.811 21.1449 127.277 21.1449C126.328 21.1449 125.487 21.3835 124.754 21.8608C124.021 22.3324 123.447 23.0256 123.033 23.9403C122.618 24.8494 122.411 25.9602 122.411 27.2727C122.411 28.608 122.618 29.733 123.033 30.6477C123.453 31.5568 124.027 32.2443 124.754 32.7102C125.487 33.1705 126.325 33.4006 127.268 33.4006C127.791 33.4006 128.28 33.3324 128.734 33.196C129.195 33.054 129.607 32.8466 129.97 32.5739C130.339 32.3011 130.649 31.9659 130.899 31.5682C131.155 31.1705 131.331 30.7159 131.428 30.2045L134.615 30.2216C134.496 31.0511 134.237 31.8295 133.839 32.5568C133.447 33.2841 132.933 33.9261 132.297 34.483C131.661 35.0341 130.916 35.4659 130.064 35.7784C129.212 36.0852 128.266 36.2386 127.226 36.2386C125.692 36.2386 124.322 35.8835 123.118 35.1733C121.913 34.4631 120.964 33.4375 120.271 32.0966C119.578 30.7557 119.232 29.1477 119.232 27.2727C119.232 25.392 119.581 23.7841 120.28 22.4489C120.979 21.108 121.93 20.0824 123.135 19.3722C124.339 18.6619 125.703 18.3068 127.226 18.3068C128.197 18.3068 129.101 18.4432 129.936 18.7159C130.771 18.9886 131.516 19.3892 132.169 19.9176C132.822 20.4403 133.359 21.0824 133.78 21.8438C134.206 22.5994 134.484 23.4631 134.615 24.4347ZM137.511 18.5455H141.38L146.562 31.1932H146.766L151.948 18.5455H155.817V36H152.783V24.0085H152.621L147.798 35.9489H145.531L140.707 23.983H140.545V36H137.511V18.5455Z" fill="white" />
                <path d="M127.148 61V49.3636H131.602C132.443 49.3636 133.142 49.4962 133.699 49.7614C134.259 50.0227 134.678 50.3807 134.955 50.8352C135.235 51.2898 135.375 51.8049 135.375 52.3807C135.375 52.8542 135.284 53.2595 135.102 53.5966C134.92 53.9299 134.676 54.2008 134.369 54.4091C134.062 54.6174 133.72 54.767 133.341 54.858V54.9716C133.754 54.9943 134.15 55.1212 134.528 55.3523C134.911 55.5795 135.223 55.9015 135.466 56.3182C135.708 56.7348 135.83 57.2386 135.83 57.8295C135.83 58.4318 135.684 58.9735 135.392 59.4545C135.1 59.9318 134.661 60.3087 134.074 60.5852C133.487 60.8617 132.748 61 131.858 61H127.148ZM129.256 59.2386H131.523C132.288 59.2386 132.839 59.0928 133.176 58.8011C133.517 58.5057 133.688 58.1269 133.688 57.6648C133.688 57.3201 133.602 57.0095 133.432 56.733C133.261 56.4527 133.019 56.233 132.705 56.0739C132.39 55.911 132.015 55.8295 131.58 55.8295H129.256V59.2386ZM129.256 54.3125H131.341C131.705 54.3125 132.032 54.2462 132.324 54.1136C132.616 53.9773 132.845 53.786 133.011 53.5398C133.182 53.2898 133.267 52.9943 133.267 52.6534C133.267 52.2027 133.108 51.8314 132.79 51.5398C132.475 51.2481 132.008 51.1023 131.386 51.1023H129.256V54.3125ZM141.379 61.1705C140.527 61.1705 139.788 60.983 139.163 60.608C138.538 60.233 138.054 59.7083 137.709 59.0341C137.368 58.3598 137.197 57.572 137.197 56.6705C137.197 55.7689 137.368 54.9792 137.709 54.3011C138.054 53.6231 138.538 53.0966 139.163 52.7216C139.788 52.3466 140.527 52.1591 141.379 52.1591C142.232 52.1591 142.97 52.3466 143.595 52.7216C144.22 53.0966 144.703 53.6231 145.044 54.3011C145.389 54.9792 145.561 55.7689 145.561 56.6705C145.561 57.572 145.389 58.3598 145.044 59.0341C144.703 59.7083 144.22 60.233 143.595 60.608C142.97 60.983 142.232 61.1705 141.379 61.1705ZM141.391 59.5227C141.853 59.5227 142.239 59.3958 142.55 59.142C142.86 58.8845 143.091 58.5398 143.243 58.108C143.398 57.6761 143.476 57.1951 143.476 56.6648C143.476 56.1307 143.398 55.6477 143.243 55.2159C143.091 54.7803 142.86 54.4337 142.55 54.1761C142.239 53.9186 141.853 53.7898 141.391 53.7898C140.917 53.7898 140.523 53.9186 140.209 54.1761C139.898 54.4337 139.665 54.7803 139.51 55.2159C139.358 55.6477 139.283 56.1307 139.283 56.6648C139.283 57.1951 139.358 57.6761 139.51 58.108C139.665 58.5398 139.898 58.8845 140.209 59.142C140.523 59.3958 140.917 59.5227 141.391 59.5227ZM151.665 52.2727V53.8636H146.648V52.2727H151.665ZM147.886 50.1818H149.943V58.375C149.943 58.6515 149.985 58.8636 150.068 59.0114C150.155 59.1553 150.269 59.2538 150.409 59.3068C150.549 59.3598 150.705 59.3864 150.875 59.3864C151.004 59.3864 151.121 59.3769 151.227 59.358C151.337 59.339 151.42 59.322 151.477 59.3068L151.824 60.9148C151.714 60.9527 151.557 60.9943 151.352 61.0398C151.152 61.0852 150.905 61.1117 150.614 61.1193C150.098 61.1345 149.634 61.0568 149.222 60.8864C148.809 60.7121 148.481 60.4432 148.239 60.0795C148 59.7159 147.883 59.2614 147.886 58.7159V50.1818Z" fill="#D9D9D9" />
                <rect x="94" y="44" width="26" height="24" rx="4" fill="url(#paint1_linear_269_213)" />
                <path d="M101.642 61H99.392L103.489 49.3636H106.091L110.193 61H107.943L104.835 51.75H104.744L101.642 61ZM101.716 56.4375H107.852V58.1307H101.716V56.4375ZM113.834 49.3636V61H111.726V49.3636H113.834Z" fill="#090909" />
                <defs>
                  <linearGradient id="paint0_linear_269_213" x1="22" y1="42" x2="62" y2="42" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7B29" />
                    <stop offset="1" stop-color="#FCBD49" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_269_213" x1="94" y1="56" x2="120" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7B29" />
                    <stop offset="1" stop-color="#FCBD49" />
                  </linearGradient>
                </defs>
              </svg>

            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#FFF',
                fontSize: '12px',
                cursor: 'pointer',
              }}
            >
              <KeyboardArrowDownIcon />
            </button>
          </div>

          {/* Messages */}
          <PaperEx ref={chatContainerRef}>
            {messages.map((msg, index) => {
              if (msg.content != welcomeMsg && msg.content != marketing && msg.content != ai_Tools && msg.content != order_Now && msg.content != compare_Services) {
                return (
                  <TypographyChat key={index} className={msg.role === 'user' ? 'user' : 'agent'}>
                    {msg.role === 'user' ?
                      <p>{msg.content}</p>
                      :
                      <>
                        {msg.predefinedQuestions ?
                          <>
                            <div dangerouslySetInnerHTML={{ __html: msg.content }} />
                            <div style={{ margin: '15px 0 25px' }}>
                              <button
                                className="predefinedButton"
                                onClick={() => handleSend(marketing)}
                                disabled={isBotTyping}
                              >
                                AI Business Solutions
                              </button>
                              <button
                                className="predefinedButton"
                                onClick={() => handleSend(ai_Tools)}
                                disabled={isBotTyping}
                              >
                                AI Business Tools
                              </button>

                              <button
                                className="predefinedButton"
                                onClick={() => handleSend(order_Now)}
                                disabled={isBotTyping}
                              >
                                Order Now
                              </button>
                              <button
                                className="predefinedButton"
                                onClick={() => handleSend(compare_Services)}
                                disabled={isBotTyping}
                              >
                                Compare Services
                              </button>
                            </div>
                          </>
                          :
                          <div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: msg.typedContent || '', // Render the typed HTML
                              }}
                              style={{ margin: '10px 0' }}
                            />
                            <Typewriter
                              onInit={(typewriter) => {
                                let typedHtml = '';
                                let buffer = ''; // Temporary buffer for each message

                                [...msg.content].forEach((char) => {
                                  typewriter.callFunction(() => {
                                    buffer += char;

                                    // Append completed HTML tags or plain text
                                    if (buffer.endsWith('>') || !buffer.includes('<')) {
                                      typedHtml += buffer;
                                      buffer = ''; // Reset buffer
                                      setMessages((prevMessages) =>
                                        prevMessages.map((m, i) =>
                                          i === index
                                            ? { ...m, typedContent: typedHtml }
                                            : m
                                        )
                                      );
                                    }
                                    scrollToBottom(); // Keep scrolling as new content appears
                                  });
                                });

                                typewriter.start();
                              }}
                              options={{
                                autoStart: true,
                                delay: 5, // Typing speed
                                cursor: '', // Disable the cursor
                              }}
                            />
                          </div>
                        }
                      </>
                    }
                  </TypographyChat>
                )
              }
            })}
            <div ref={endOfMessagesRef} /> {/* Marker for end of messages */}
            {isBotTyping && <Typography variant='subtitle2' position={'sticky'} bottom={'-11px'} fontSize={12} color={'#ffffff96'}>typing...</Typography>}
          </PaperEx>


          {/* Input */}
          <div
            style={{
              display: 'flex',
              backgroundColor: 'black',
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
              borderRadius: "15px",
              borderTop: "1px solid rgba(134, 146, 158, 0.5)",
            }}
          >
            <input
              fullWidth
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              variant="outlined" // Keep variant for internal styling consistency
              style={{
                flex: 1,
                border: 'none',
                padding: '20px',
                borderRadius: '5px',
                marginRight: '10px',
                outline: 'none',
                backgroundColor: 'transparent',
                color: 'white',
                borderColor: 'unset',
              }}
            />
            {isBotTyping ?
              <SendButton style={{ cursor: 'not-allowed' }}>
                <AdjustIcon sx={{ color: '#ffffff' }} />
              </SendButton>
              :
              <SendButton
                onClick={() => handleSend()}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.4354 0.581983C18.9352 0.0685981 18.1949 -0.122663 17.5046 0.0786645L1.408 4.75952C0.679698 4.96186 0.163487 5.54269 0.0244302 6.28055C-0.117628 7.0315 0.378575 7.98479 1.02684 8.38342L6.0599 11.4768C6.57611 11.7939 7.24239 11.7144 7.66956 11.2835L13.4329 5.4843C13.723 5.18231 14.2032 5.18231 14.4934 5.4843C14.7835 5.77623 14.7835 6.24935 14.4934 6.55134L8.71999 12.3516C8.29181 12.7814 8.21178 13.4508 8.52691 13.9702L11.6022 19.0538C11.9623 19.6577 12.5826 20 13.2628 20C13.3429 20 13.4329 20 13.513 19.9899C14.2933 19.8893 14.9135 19.3558 15.1436 18.6008L19.9156 2.52479C20.1257 1.84028 19.9356 1.09537 19.4354 0.581983Z" fill="white" />
                </svg>

              </SendButton>
            }
          </div>
        </Wrapper>
      )}
      <Box>
      </Box>
    </>
  );
}

export default ChatBox;