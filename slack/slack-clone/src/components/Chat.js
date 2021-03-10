import React, {useEffect, useState} from 'react';
import styled from  'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import Db from '../Firebase';
import { useParams } from 'react-router-dom';
import Firebase from 'firebase';

function Chat({user}) {

    let {channelId} = useParams();
    const [channel, setChannel] = useState();
    const [messages, setMessages] = useState([]);

    const getMessages = () => {
        Db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timetamp','asc')
        .onSnapshot((snapshot)=>{
            let messages = snapshot.docs.map((doc)=>doc.data());
            console.log(messages);
            setMessages(messages);
        })
    }

    const sendMessage = (text) => {
        if(channelId){
            let payload = {
                text:text,
                timestamp:Firebase.firestore.Timestamp.now(),
                user:user.name,
                userImage: user.photo
            }
            Db.collection("rooms").doc(channelId).collection('messages').add(payload);
            
        }
    }

    const getChannel = () => {
        Db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot)=> {
            setChannel(snapshot.data());
        })
    }

    useEffect(() => {
        getChannel();
        getMessages();
    }, [channelId])

    return (
        <Container>

            <Header>
                <Channel>
                    <ChannelName>
                    # {channel && channel.name}
                    </ChannelName>
                    <ChannelInfo>
                        Company-wide announcements 
                    </ChannelInfo>

                </Channel>
                <ChannelDetail>
                    <div>
                        Details
                    </div>
                    <Info/>
                    
                </ChannelDetail>

            </Header>

            <MessageContainer>
                {
                    messages.length > 0 &&
                    messages.map((data, index)=>(
                        <ChatMessage
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                        />
                    ))
                }
            </MessageContainer>
            <ChatInput sendMessage={sendMessage}/>
        </Container>
        

    )
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
    min-height:0;
`

const Header = styled.div`
    padding-left: 20px;
    padding-right:20px;
    display:flex;
    align-items: center;
    border-bottom: 1px solid rgba(83,39, 83,.13);
    justify-content: space-between;
`

const MessageContainer = styled.div`
   
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    
`



const ChannelDetail = styled.div`
    display: flex;
    align-items: center;
    color: #606060;

`

const Channel = styled.div`

`

const ChannelName = styled.div`
    font-weight: 700;
`

const ChannelInfo = styled.div`
     font-weight: 400;
     color: #606060;
     font-size: 13px;
     margin-top: 8px
`

const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`