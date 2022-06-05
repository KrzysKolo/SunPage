import React, { createContext, Dispatch, JSXElementConstructor, ReactElement, SetStateAction, useState } from "react";

export type SmallMenuType = {
  showSmallMenu: boolean;
  setShowSmallMenu: Dispatch<SetStateAction<boolean>>;
  showSmallMenuChange: () => void;
};

export const MenuContext = createContext<SmallMenuType | null>(null);

const SmallMenuProvider: React.FC<React.ReactNode | ReactElement | JSXElementConstructor<any> | any> = ({ children }) => {
  const [showSmallMenu, setShowSmallMenu] = useState<boolean>(false);

  const showSmallMenuChange = () => {
    setShowSmallMenu(!showSmallMenu);
    console.log("zmieniam się")
  }
  return (
    <MenuContext.Provider value={{
      showSmallMenu,
      setShowSmallMenu,
      showSmallMenuChange,
    }}>
      {children}
    </MenuContext.Provider>
  )
};

export default SmallMenuProvider;