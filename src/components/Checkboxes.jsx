import React from "react";

const Checkboxes = ({ data = [] }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      {data?.length > 0 &&
        data?.map((item) => {
          return (
            <div key={item?.id} className="flex flex-col gap-[10px] pl-[10px]">
              <div className="flex items-center gap-[10px]">
                <input type="checkbox" />
                <p>{item?.name}</p>
              </div>
              {item?.children && item?.children?.length > 0 && (
                <Checkboxes data={item?.children} />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Checkboxes;
