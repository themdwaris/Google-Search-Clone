// import { Result } from "postcss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppProvider } from "./utils/ContextApi";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:query/:startIndex" element={<SearchResult />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
