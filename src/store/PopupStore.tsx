import React, { createContext, useState } from "react";

interface IPopupContext {
  invitationPopup: boolean;
  setInvitationPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PopupContext = createContext<IPopupContext>({
  invitationPopup: false,
  setInvitationPopup: () => {},
});

const PopupStore = ({ children }: { children: React.ReactNode }) => {
  const [invitationPopup, setInvitationPopup] = useState(false);

  return <PopupContext.Provider value={{ invitationPopup, setInvitationPopup }}>{children}</PopupContext.Provider>;
};

export default PopupStore;
