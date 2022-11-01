import { useAppInfo } from "../context/AppContext";

import { Login } from "../components/index";


function Auth() {

const {appInfo} = useAppInfo()

  return (
    <div>
      <Login />
    </div>
  );
}

export default Auth;
