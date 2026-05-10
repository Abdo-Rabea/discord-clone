import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count] = useState(0);
  useEffect(() => {
    console.log("count", count);
  }, [count]);
  return (
    <>
      <div className="text-2xl font-bold text-indigo-500">
        hello from front-end
      </div>
      <Button variant="outline" className="mt-4">
        Button
      </Button>
    </>
  );
}

export default App;
