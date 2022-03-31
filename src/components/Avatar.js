import React from "react";
import Part from "./Part";

function Avatar({
  earrings,
  glasses,
  hats,
  neckwear,
  body,
  clothing1,
  clothing2,
  clothing3,
  eyebrows,
  eyes,
  facialHair,
  hair,
  mouths,
  noses,
}) {
  return (
    <div className="avatar">
      <Part path="accessories/earrings" index={earrings} zIndex={3} />
      <Part path="accessories/glasses" index={glasses} zIndex={3} />
      <Part path="accessories/hats" index={hats} zIndex={3} />
      <Part path="accessories/neckwear" index={neckwear} zIndex={4} />
      <Part path="body" index={body} zIndex={0} />
      <Part path="clothes/layer_1" index={clothing1} zIndex={2} />
      <Part path="clothes/layer_2" index={clothing2} zIndex={3} />
      <Part path="clothes/layer_3" index={clothing3} zIndex={4} />
      <Part path="eyebrows" index={eyebrows} zIndex={2} />
      <Part path="eyes" index={eyes} zIndex={1} />
      <Part path="facial_hair" index={facialHair} zIndex={2} />
      <Part path="hair" index={hair} zIndex={1} />
      <Part path="mouths" index={mouths} zIndex={1} />
      <Part path="noses" index={noses} zIndex={1} />
    </div>
  );
}

export default Avatar;
