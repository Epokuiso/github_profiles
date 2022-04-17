import { Routes, Route } from "react-router-dom";
import { MainSection } from "./components/MainSection/MainSection";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { IRepositoriesInformation, RepositoriesInformationContext } from "./context/RepositoriesInformationContext";
import { defaultState, IUserInformation, UserInformationContext } from "./context/UserInformationContext";
import { Profile } from "./pages/Profile/Profile";

export const App = () => 
{
  let userInformation: IUserInformation = defaultState; 
  let repositories: IRepositoriesInformation [] = [];

  return (
    <UserInformationContext.Provider value={userInformation}>
      <RepositoriesInformationContext.Provider value={repositories}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<MainSection />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </RepositoriesInformationContext.Provider>
    </UserInformationContext.Provider>
  );
}