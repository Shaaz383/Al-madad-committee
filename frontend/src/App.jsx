import "./App.css";
import { Button } from "./components/ui/button";
import { CarouselDemo } from "./components/ui/Demo/CarouselDemo";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Click Here</Button>
      <CarouselDemo/>
    </>
  );
}

export default App;