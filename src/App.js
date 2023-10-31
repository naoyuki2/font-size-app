import "./App.css";
import GamePage from "./Page/GamePage";
import { TopPage } from "./Page/TopPage";
import SettingPage from "./Page/SettingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<TopPage />} />
              <Route path="/setting" element={<SettingPage />} />
              <Route path="/game" element={<GamePage />} />
            </Routes>
          </div>
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
