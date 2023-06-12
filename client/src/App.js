import React from "react";
import { Outlet } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "./theme.js";

function App() {
const mode = useSelector((state) => state.mode);
const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div>
      <ThemeProvider theme = {theme}>
        <CssBaseline />
        <Outlet />
      </ThemeProvider> 
    </div>
  );
}

export default App;
