import Container from "./views/container/Container";
import { useState } from "react";

const listOfProducts = [
  {
  id: 1,
  name: "Crop top",
  model: "Evren for you",
  description: "Crop top 100% algodón de alta calidad, estampados de alta densidad",
  price: 20000,
  gender: "Mujer",
  img: "https://i.imgur.com/JdQJ2W7.jpg"
  },
  {
    id: 2,
    name:"Camiseta",
    model:"Evren high",
    description:"Camiseta 100% algodón de alta calidad, estampados de alta densidad",
    price: 20000,
    gender:"Hombre",
    img:"https://i.imgur.com/15yRBNj.jpg"
  },
  {
    id: 3,
    name: "Camiseta",
    model: "Evren explore",
    description: "Camiseta 100% algodón de alta calidad, estampados de alta densidad",
    price: 20000,
    gender: "Hombre",
    img: "https://i.imgur.com/rsgJCak.jpg"
  },
  {
    id: 4,
    name: "Camiseta",
    model: "Evren for you",
    description: "Camiseta 100% algodón de alta calidad, estampados de alta densidad",
    price: 20000,
    gender: "Hombre",
    img: "https://i.imgur.com/R9cnYuI.jpg"
  },
  {
    id: 5,
    name: "Crop Top",
    model: "Evren explore",
    description: "Crop top 100% algodón de alta calidad, estampados de alta densidad",
    price: 20000,
    gender: "Mujer",
    img: "https://i.imgur.com/no968N7.jpg"
  },
  {
    id: 6,
    name: "Camiseta",
    model: "Evren high",
    description: "Camiseta 100% algodón de alta calidad, estampados de alta densidad",
    price: 20000,
    gender: "Hombre",
    img: "https://i.imgur.com/9HZIJYA.jpg"
  }
  ]


function App() {

  const [todoList, setTodoList] = useState(listOfProducts)

  console.log(todoList)
  console.log(setTodoList)

  return (
    <div className="App">
<Container/>
    </div>
  );
}

export default App;