import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MainSection } from "./components/MainSection/MainSection";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { IRepositoriesInformation, RepositoriesInformationContext } from "./context/RepositoriesInformationContext";
import { ThemeContext } from "./context/ThemeContext";
import { defaultState, IUserInformation, UserInformationContext } from "./context/UserInformationContext";
import { Profile } from "./pages/Profile/Profile";
import { GlobalStyle } from "./styles/global";

export const App = () => 
{
  const [name, setTheme] = useState <string> ("dark");
  let userInformation: IUserInformation = defaultState; 
  let repositories: IRepositoriesInformation [] = [];

  return (
    <ThemeContext.Provider value={{name, setTheme}}>
      <UserInformationContext.Provider value={userInformation}>
        <RepositoriesInformationContext.Provider value={repositories}>
          <GlobalStyle theme={name} />
          <NavigationBar />
          <Routes>
            <Route path="/" element={<MainSection />}/>
            <Route path="/profile" element={<Profile />}/>
          </Routes>
        </RepositoriesInformationContext.Provider>
      </UserInformationContext.Provider>
      </ThemeContext.Provider>
  );
}