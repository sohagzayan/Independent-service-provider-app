import { AuthContextProvider } from "./context/AuthContextProvider";
import Routing from "./Routing/Routing";
function App() {

  return (
    <>
    <AuthContextProvider>
      <Routing />
    </AuthContextProvider>
    </>
  );
}

export default App;
