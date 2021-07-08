import React from 'react';

interface Message{

    message: string;
    setMessage: (arg: string) => void;
}

const MessageContext = React.createContext<Message>({message: '', setMessage: () => ''});

export default MessageContext;