import React, { createContext, Dispatch, JSXElementConstructor, ReactElement, SetStateAction, useState } from "react";

export type SmallMenuType = {
  showSmallMenu: boolean;
  setShowSmallMenu: Dispatch<SetStateAction<boolean>>;
  click: boolean;
  setClick: Dispatch<SetStateAction<boolean>>;
};

export const MenuContext = createContext<SmallMenuType | null>(null);

const SmallMenuProvider: React.FC<React.ReactNode | ReactElement | JSXElementConstructor<any> | any> = ({ children }) => {
  const [showSmallMenu, setShowSmallMenu] = useState<boolean>(false);
  const [click, setClick] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{
      showSmallMenu,
      setShowSmallMenu,
      click,
      setClick,
    }}>
      {children}
    </MenuContext.Provider>
  )
};

export default SmallMenuProvider;