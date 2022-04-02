import { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
  earring: 32,
  hats: 28,
  neckwear: 18,
  facial_hair: 17,
};

function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [eyebrows, setEyebrow] = useState(0);
  const [hair, setHair] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [earrings, setEarrings] = useState(0);
  const [hats, setHats] = useState(0);
  const [neckwear, setNeckwear] = useState(0);
  const [facialHair, setFacialHair] = useState(0);
  const [noses] = useState(0);

  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setEyebrow(Math.floor(Math.random() * total.eyebrows));
    setHair(Math.floor(Math.random() * total.hair));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
    setMouth(Math.floor(Math.random() * total.mouth));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setEarrings(Math.floor(Math.random() * total.earring));
    setHats(Math.floor(Math.random() * total.hats));
    setNeckwear(Math.floor(Math.random() * total.neckwear));
    setFacialHair(Math.floor(Math.random() * total.facial_hair));
  };

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <div className="avatar-wrapper">
          <Avatar
            earrings={earrings}
            glasses={glasses}
            hats={hats}
            neckwear={neckwear}
            body={body}
            clothing1={clothing1}
            clothing2={clothing2}
            clothing3={clothing3}
            eyebrows={eyebrows}
            eyes={eyes}
            facialHair={facialHair}
            hair={hair}
            mouths={mouth}
            noses={noses}
          />
          <div className="text-center">
            <button className="button" onClick={randomize}>
              Randomize!
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="list-section">
          <h2>Body</h2>
          <PartList
            total={total.body}
            path="body"
            selected={body}
            set={setBody}
          />
        </div>
        <div className="list-section">
          <h2>Eyes</h2>
          <PartList
            total={total.eyes}
            path="eyes"
            selected={eyes}
            set={setEyes}
          />
        </div>
        <div className="list-section">
          <h2>Hair</h2>
          <PartList
            total={total.hair}
            path="hair"
            selected={hair}
            set={setHair}
          />
        </div>
        <div className="list-section">
          <h2>Mouth</h2>
          <PartList
            total={total.mouth}
            path="mouths"
            selected={mouth}
            set={setMouth}
          />
        </div>
        <div className="list-section">
          <h2>Eyebrows</h2>
          <PartList
            total={total.eyebrows}
            path="eyebrows"
            selected={eyebrows}
            set={setEyebrow}
          />
        </div>
        <div className="list-section">
          <h2>Glasses</h2>
          <PartList
            total={total.glasses}
            path="accessories/glasses"
            selected={glasses}
            set={setGlasses}
          />
        </div>
        <div className="list-section">
          <h2>Clothing (L1)</h2>
          <PartList
            total={total.clothing1}
            path="clothes/layer_1"
            selected={clothing1}
            set={setClothing1}
          />
        </div>
        <div className="list-section">
          <h2>Clothing (L2)</h2>
          <PartList
            total={total.clothing2}
            path="clothes/layer_2"
            selected={clothing2}
            set={setClothing2}
          />
        </div>
        <div className="list-section">
          <h2>Clothing (L3)</h2>
          <PartList
            total={total.clothing3}
            path="clothes/layer_3"
            top="-15px"
            zoom={2}
            selected={clothing3}
            set={clothing3}
          />
        </div>
        <div className="list-section">
          <h2>Hat</h2>
          <PartList
            total={total.hats}
            path="accessories/hats"
            selected={hats}
            set={setHats}
          />
        </div>
        <div className="list-section">
          <h2>Facial Hair</h2>
          <PartList
            total={total.facial_hair}
            path="facial_hair"
            selected={facialHair}
            set={setFacialHair}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
