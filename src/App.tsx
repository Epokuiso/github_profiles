import { MainSection } from "./components/MainSection/MainSection";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { defaultState, IUserInformation, UserInformationContext } from "./context/UserInformationContext";


export const App = () => 
{
  let userInformation: IUserInformation = defaultState; 

  return (
    <UserInformationContext.Provider value={userInformation}>
      <NavigationBar />
      <MainSection />
    </UserInformationContext.Provider>
  );
}