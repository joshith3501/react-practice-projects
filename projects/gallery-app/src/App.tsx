import "./index.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Item from "./components/Item";
import { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formStatus, setFormStatus] = useState(true);
  const [term, setTerm] = useState("random");

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
  }, []);

  return (
    <main className="mx-2 mt-5 min-h-screen flex align-center justify-start flex-col">
      <form className="flex w-full items-center justify-center space-x-2">
        <Input
          placeholder="Enter your term"
          className="w-96 focus-visible:outline-none"
        />
        <Button variant="outline">Search</Button>
      </form>
      <div className="grid gap-5 grid-cols-1 m-2 md:m-8 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4">
        {images &&
          images.map((image: any) => <Item key={image.id} image={image} />)}
      </div>
    </main>
  );
}

export default App;
