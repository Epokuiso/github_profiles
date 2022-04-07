import { MainSection } from "./components/MainSection/MainSection";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { defaultState, UserInformation, UserInformationContext } from "./context/UserInformationContext";


export const App = () => 
{
  let userInformation :UserInformation = defaultState; 

  return (
    <UserInformationContext.Provider value={userInformation}>
      <NavigationBar />
      <MainSection />
    </UserInformationContext.Provider>
  );
}