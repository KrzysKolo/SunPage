import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from './pages';
import { Footer, NavMenu } from './components';
import './App.css';
import { GlobalStyle } from './assets/styles/GlobalStyles';
import { theme } from './assets/styles/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
