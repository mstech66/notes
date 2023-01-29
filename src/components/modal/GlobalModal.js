import { createContext, useContext, useState } from "react";
import NoteModal from "./NoteModal";
import React from "react";

const initialState = {
  showModal: () => {},
  hideModal: () => {},
  store: { props: { open: false } },
};

const noteContext = createContext(initialState);

const GlobalModal = (props) => {
  const [store, setStore] = useState();

  const showModal = (props) => {
    setStore({
      ...store,
      props: { ...props, open: true },
    });
  };

  const hideModal = (props) => {
    setStore({
      ...store,
      props: { ...props, open: false },
    });
  };

  const renderComponent = () => {
    if(!store){
      return null;
    }
    return <NoteModal  />
  }

  return (
    <noteContext.Provider value={{ store, showModal, hideModal }}>
      {renderComponent()}
      {props.children}
    </noteContext.Provider>
  );
};

export default GlobalModal;

export const useNotesModalContext = () => useContext(noteContext);
