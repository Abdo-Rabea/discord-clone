import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/providers/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  const [count] = useState(0);
  useEffect(() => {
    console.log("count", count);
  }, [count]);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="discord-clone-theme">
      <div className="text-2xl font-bold text-indigo-500">
        hello from front-end
      </div>
      <Button variant="destructive" className="mt-4">
        Button
      </Button>
      <ModeToggle />
    </ThemeProvider>
  );
}

export default App;
