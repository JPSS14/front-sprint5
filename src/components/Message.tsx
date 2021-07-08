import { useContext } from "react";
import styled from "styled-components";
import MessageContext from "../contexts/MessageContext";

const Alert = styled.div`
    padding: 20px;
    background-color: #f44336; /* Red */
    color: white;
    margin-bottom: 15px;
`;

const CloseBtn = styled.span`
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: black;
    }
`;

function Message() {
    const { message, setMessage } = useContext(MessageContext);

    return (
        <>
            {message &&
                <Alert>
                    <CloseBtn onClick={() => setMessage("")} >&times;</CloseBtn>
                    {message}
                </Alert>
            }
        </>
    );
}

export default Message;