import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from "react-redux";
import MainPage from '../Views/Pages/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pricing from "../Views/Pages/Pricing";

const getActiveTheme = (themeMode) => {
  return createTheme({
    pageColor: themeMode === 'true' || !themeMode ? '#efefef': '#161616',

    bgPrimary: themeMode === 'true' || !themeMode ? '#efefef': '#161616',
    bgSecondary: themeMode === 'true' || !themeMode ? 'green': 'red',

    textPrimary: themeMode === 'true' || !themeMode ? '#000000': '#ffffff',
    textSecondary: themeMode === 'true' || !themeMode ? 'white': 'black',

    switchColor: themeMode === 'true' || !themeMode ? '#6c6c6c': '#b1b1b1',
  })
}
const ThemeContainer = () => {
  const currentTheme = useSelector((state) => state.LDTheme.value);
  const [activeTheme, setActiveTheme] = useState(getActiveTheme(currentTheme));

  useEffect(()=>{    
    setActiveTheme(getActiveTheme(currentTheme))
  },[currentTheme]);
  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default ThemeContainer;