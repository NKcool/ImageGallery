import { createContext, useState } from "react";
import Images from "./components/Images";
import Jumbutron from "./components/Jumbutron";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";
import Nav from "./components/Nav";
import Popup from "./hooks/Popup";

// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const [isDark, setIsDark] = useState(false)
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&per_page=30&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
    isDark,
    setIsDark
  }
  

  return (
    <ImageContext.Provider value={value}>
      <div className={isDark ? "dark:text-white dark:bg-neutral-800" :""}>
      <Nav />
      <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Images />
      
      </div>
    </ImageContext.Provider>
  );
}

export default App;
