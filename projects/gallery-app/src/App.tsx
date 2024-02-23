import "./index.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Item from "./components/Item";
import { useState, useEffect, FormEvent} from "react";

function App() {
  const [images, setImages] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [term, setTerm] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTerm(inputValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://pixabay.com/api/?key=${
          import.meta.env.VITE_PIXABAY_API_KEY
        }&q=${term}&image_type=photo`
      );

      result.json().then((json) => {
        setImages(json.hits);
        setIsLoading(false);
      });
    };

    fetchData();
  }, [term]);

  return (
    <main className="mx-2 mt-5 min-h-screen flex align-center justify-start flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center justify-center space-x-2"
      >
        <Input
          placeholder="Enter your term"
          name="term-input"
          defaultValue={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="w-96 focus-visible:outline-none"
        />
        <Button variant="outline" type="submit">
          Search
        </Button>
      </form>
      <div className="grid gap-5 grid-cols-1 m-2 md:m-8 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4">
        {isLoading ? (
          <div> Use the Search bar to search for images</div>
        ) : (
          images &&
          images.map((image: any) => <Item key={image.id} image={image} />)
        )}
      </div>
    </main>
  );
}

export default App;
