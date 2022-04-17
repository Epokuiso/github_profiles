import { Routes, Route } from "react-router-dom";
import { MainSection } from "./components/MainSection/MainSection";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { defaultState, IUserInformation, UserInformationContext } from "./context/UserInformationContext";
import { Profile } from "./pages/Profile/Profile";

export const App = () => 
{
  let userInformation: IUserInformation = defaultState; 

  return (
    <UserInformationContext.Provider value={userInformation}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainSection />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </UserInformationContext.Provider>
  );
}