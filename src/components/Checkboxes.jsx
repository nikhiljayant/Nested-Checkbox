import React from "react";

const checkboxesData = [
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
            children: [
              {
                id: 10,
                name: "Berry",
              },
            ],
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

const Checkboxes = ({ data = [], checked = {}, setChecked = () => {} }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const updatedState = { ...prev, [node?.id]: isChecked };

      // If Parent is checked or unchecked then all the corresponding childrens should also follow the same (Top to Bottom Approach)
      const handleChildrens = (node) => {
        // Loop through every Child to mark it as Checked or Unchecked
        node?.children?.forEach((child) => {
          updatedState[child?.id] = isChecked;
          // If there more Children of that Child recursively call the function
          if (child?.children) {
            handleChildrens(child);
          }
        });
      };
      handleChildrens(node);

      // If all the Childrens are Checked or Unchecked of a Parent, then Parent should also follow the same (Bottom to Top Approach)
      // *NOTE : PARTIALLY DONE*
      const verifyChecked = (node) => {
        // If no Childrens
        if (!node.children) {
          return updatedState[node.id] || false;
        }

        // Will Return TRUE or FALSE
        const areAllChildrensChecked = node.children.every((child) =>
          verifyChecked(child)
        );

        updatedState[node.id] = areAllChildrensChecked;

        return areAllChildrensChecked;
      };
      // Call the function for every node to check if all the childrens are checked or not
      checkboxesData.forEach((node) => verifyChecked(node));

      return updatedState;
    });
  };

  return (
    <div className="flex flex-col gap-[10px]">
      {data?.length > 0 &&
        data?.map((node) => {
          return (
            <div key={node?.id} className="flex flex-col gap-[10px] pl-[10px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="checkbox"
                  checked={checked[node?.id]}
                  onChange={(e) => handleChange(e.target.checked, node)}
                />
                <p>{node?.name}</p>
              </div>
              {node?.children && node?.children?.length > 0 && (
                <Checkboxes
                  data={node?.children}
                  checked={checked}
                  setChecked={setChecked}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Checkboxes;
