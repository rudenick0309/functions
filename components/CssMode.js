import React, {useState} from "react";
import Button from "./button";
import styled, {ThemeProvider} from "styled-components";
// import {dark, light} from "./theme"; // 환경별 테마 정보 가져오기

const dark = {
  colors: {
    titleColor: "#121212",
    bgColor: "#2a0082",
  }
};

const light = {
  colors: {
    titleColor: "#b8b8b8",
    bgColor: "navy",
  }
};

const CssMode = () => {
  const [themeMode, setThemeMode] = useState("light");
  const theme = themeMode === "light" ? light : dark;

  const toggleTheme = () => setThemeMode(themeMode === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme}>
      {/*<S.Main>*/}
      <Main>
        <Button title={"바꾸기"}
                click={toggleTheme}/>
      </Main>
    </ThemeProvider>
  );
};

export default CssMode;


const Main = styled.div`
  width: 100%;
  height: 100vh;
  border:2px solid red;
  background-color: ${props => props.theme.colors.bgColor};
`;
