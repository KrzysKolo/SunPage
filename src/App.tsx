import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Contact, Blog } from './pages';
import { Footer, NavMenu } from './components';
import './App.css';
import { GlobalStyle } from './assets/styles/GlobalStyles';
import { theme } from './assets/styles/theme';
import NotFound from './pages/NotFound';


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
