import React from "react"

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
          }
        ]
      }
    ]
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
          }
        ]
      }
    ]
  }
]

function App() {

  return (
    <h1 className='text-pink-500'>Hello World!</h1>
  )
}

export default App
