import React from "react";
import logo from "./logo.svg";
import "./app.css";
import MainGame from "./pages/game/main-game";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <MainGame />
      </div>
    </QueryClientProvider>
  );
}

export default App;
