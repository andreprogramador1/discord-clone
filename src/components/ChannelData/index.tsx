import React, { useRef, useEffect } from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if(div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="André Ponce"
            date="16/10/2020"
            content="Conteudo qualquer"
          />
        ))}

        <ChannelMessage
          author="Diego fernandes"
          date="16/10/2020"
          content={
            <>
              <Mention>@André Ponce</Mention>, Mensagem de referencia
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
          <Input type="text" placeholder="Converesarem #chat-livre"/>
          <InputIcon />
      </InputWrapper>
        
    </Container>
  )
}

export default ChannelData