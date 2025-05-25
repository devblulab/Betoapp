import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle, DefaultTheme } from 'styled-components';
import { AutenticacaoProvider } from '@/data/contexts/AutenticacaoContext';
import { MantineProvider } from '@mantine/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import muiTheme from '@/theme'; // Verifique se o arquivo existe!
import Particles from '@/components/landing/particles';
import { FaSun, FaMoon } from 'react-icons/fa';
import type { AppProps } from 'next/app';

import MenuTopBeto from '@/components/home/home'; // Caminho do seu menu
import '@/styles/globals.css';

// Temas customizáveis
const lightTheme: DefaultTheme = {
  backgroundColor: '#f4f6fa',
  textColor: '#222',
};

const darkTheme: DefaultTheme = {
  backgroundColor: '#15161a',
  textColor: '#fafafa',
};

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props: any) => props.theme.backgroundColor};
    color: ${(props: any) => props.theme.textColor};
    font-family: 'Montserrat', 'Poppins', 'Segoe UI', 'Roboto', Arial, sans-serif;
    transition: background-color 0.3s, color 0.3s;
    min-height: 100vh;
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`;

/**
 * App principal - gerencia provedores globais, temas, partículas, menu fixo e alternância de tema.
 */
function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <AutenticacaoProvider>
           
            {/* Navbar/menu global premium */}
            <MenuTopBeto />
            {/* Conteúdo principal da página */}
            <Component {...pageProps} />
            {/* Partículas animadas de fundo */}
            <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
          </AutenticacaoProvider>
        </MantineProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
