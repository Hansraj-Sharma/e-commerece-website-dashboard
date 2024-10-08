import ComfirmaEmail from "./components/confirmaEmail";
import CreateAccount from "./components/creactAccount";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Login from "./components/login";
import PasswordReset from "./components/passwordReset";
import RegistrationComplete from "./components/registrationomplete";
import SideMenuBar from "./components/sideMenuBar";

function App() {
  return (
    <>
      {/* <Login />
      <CreateAccount />
      <PasswordReset />
      <ComfirmaEmail />
      <RegistrationComplete /> */}
      <Header />
      <SideMenuBar />
      <Dashboard />
    </>
  );
}

export default App;
