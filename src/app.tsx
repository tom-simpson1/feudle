import "./app.css";
import MainGame from "./pages/game/main-game";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";

function App() {
  const queryClient = new QueryClient();

  const theme = {
    main: "mediumseagreen",
  };

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ThemeProvider theme={theme}> */}
      <MainGame />
      {/* </ThemeProvider> */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
