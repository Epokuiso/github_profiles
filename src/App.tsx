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
  const [ name, setTheme ] = useState (window.localStorage.getItem ("theme") ?? "dark");
  let userInformation: IUserInformation = defaultState; 
  let repositories: IRepositoriesInformation [] = [];

  const resetUserInformationContext = () =>
  {
      userInformation.username = defaultState.username;
      userInformation.followers = defaultState.followers;
      userInformation.following = defaultState.following;
      userInformation.stars = defaultState.stars;
      userInformation.profile_picture = defaultState.profile_picture;
      userInformation.profile_url = defaultState.profile_url;
  }

  const resetRepositoriesContext = () =>
  {
      while (repositories.length !== 0) 
      {    repositories.pop(); }
          
  }

  const resetContexts = () =>
  {
      resetUserInformationContext ();
      resetRepositoriesContext (); 
  }

  const toggleTheme = () =>
  {
    if (name === 'dark')
    {
      setTheme ('light'); 
      window.localStorage.setItem ("theme", 'light')
    }
    else 
    {
      setTheme ('dark'); 
      window.localStorage.setItem ("theme", 'dark')
    }
      
  }

  return (
    <UserInformationContext.Provider value={userInformation}>
      <RepositoriesInformationContext.Provider value={repositories}>
        <ThemeContext.Provider value={{name, setTheme: toggleTheme }}>
          <GlobalStyle theme={ name } />
          <NavigationBar resetData={resetContexts}/>
          <Routes>
            <Route path="/" element={<MainSection />}/>
            <Route path="/profile" element={<Profile />}/>
          </Routes>
        </ThemeContext.Provider>
      </RepositoriesInformationContext.Provider>
    </UserInformationContext.Provider>
  );
}