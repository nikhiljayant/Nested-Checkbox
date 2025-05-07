import React from "react";

// Components
import Checkboxes from "./components/Checkboxes";

const data = [
  {
    id: 1,
    name: "Mango",
    children: [
      {
        id: 2,
        name: "Banana",
      },
      {
        id: 3,
        name: "Apple",
        children: [
          {
            id: 4,
            name: "Orange",
          },
          {
            id: 5,
            name: "Grape",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Pineapple",
    children: [
      {
        id: 7,
        name: "Blueberry",
      },
      {
        id: 8,
        name: "Strawberry",
        children: [
          {
            id: 9,
            name: "Raspberry",
          },
        ],
      },
    ],
  },
];

function App() {
  return <Checkboxes data={data} />;
}

export default App;
