import React from "react";

const Checkboxes = ({ data = [], checked = {}, setChecked = () => {} }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const updatedState = { ...prev, [node?.id]: isChecked };

      // If Parent is checked then all the corresponding childrens should also get checked
      const handleChildrens = (node) => {
        if (node?.children) {
          node?.children?.forEach((child) => {
            updatedState[child?.id] = isChecked;
            if (child?.children) {
              handleChildrens(child);
            }
          });
        }
      };
      handleChildrens(node);

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
