import React from 'react';
import styled from 'styled-components';

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://i.imgur.com/6VBx3io.png" alt="" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    Waqas
                    <span> 28/2/2021 17:00</span>
                </Name>
                <Text>
                    this is the best 
                </Text>

            </MessageContent>
        </Container>
    )
}

export default ChatMessage


const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;

`

const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin: 8px;

    img {
        width: 100%;
    }
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 8px;
    span {
        font-weight: 400;
        color: rgb(97,96,97);
        font-size: 13px
    }
`

const Text = styled.span`

`
