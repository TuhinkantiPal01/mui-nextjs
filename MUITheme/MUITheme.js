"use client";

import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

const themeOptions = {

};

const theme = createTheme(themeOptions);

const MUITheme = ({ children }) => {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};

export default MUITheme;
