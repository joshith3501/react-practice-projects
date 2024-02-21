import "./index.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ItemList from "./components/ItemList";

function App() {
  return (
    <main className="mx-2 mt-5 min-h-screen flex align-center justify-start flex-col">
      <form className="flex w-full items-center justify-center space-x-2">
        <Input
          placeholder="Enter your term"
          className="w-96 focus-visible:outline-none"
        />
        <Button variant="outline">Search</Button>
      </form>
      <ItemList />
    </main>
  );
}

export default App;
