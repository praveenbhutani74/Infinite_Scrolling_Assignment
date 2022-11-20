import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

const ContextApi = ({ children }) => {
  const [isLogged, setLogged] = useState(false);
  const [Loading, setLoading] = useState(false);

  return (
    <ChatContext.Provider value={{ isLogged, setLogged, Loading, setLoading }}>
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ContextApi;
