import { Route, Routes } from "react-router-dom";
import { Create } from "./Components/Create";
import { Read } from "./Components/Read";
import { Update } from "./Components/Update";


function App() {
  return (
    <>
<Routes>
<Route path="/" element={<Create/>}/>
<Route path="/read" element={<Read/>}/>
<Route path="/update" element={<Update/>}/>
</Routes>
    </>
  );
}

export default App;
