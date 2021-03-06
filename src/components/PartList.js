import React from "react";

function PartList({ total, path, zoom = 1, top = "50%", selected, set }) {
  let parts = [];
  for (let i = 0; i <= total - 1; i++) {
    parts.push(
      <div
        key={i}
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
      >
        <img
          src={`./character/${path}/${i + 1}.png`}
          alt=""
          height={60 * zoom}
          style={{ top }}
          className="img-center"
          onClick={() => set(i)}
        />
      </div>
    );
  }
  return <div className="list">{parts}</div>;
}
export default PartList;
