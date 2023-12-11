import { useEffect, useState } from 'react';
import './style.css';

const GRID_BOX = 12;

function PianoComponent() {
  const [selectedBox, setSelectedBox] = useState([]);
  const [select, setSelect] = useState(null);

  const playBox = (val, idx) => {
    setTimeout(() => {
      setSelect(val);
    }, idx * 1000);
  };

  const handlePlay = () => {
    selectedBox?.map((itm, idx) => playBox(itm, idx));
  };

  useEffect(() => {
    setTimeout(() => {
      setSelect(null);
    }, 100);
  }, [select]);

  return (
    <>
      <div className="container">
        {[...Array(GRID_BOX).keys()].map((key) => (
          <div
            key={key}
            className={`${'each_box_container'} ${
              select !== key ? '' : 'blink_box'
            }`}
            onClick={() => {
              setSelect(key);
              setSelectedBox((prev) => [...prev, key]);
            }}
          >
            {key}
          </div>
        ))}
      </div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={() => setSelectedBox([])}>Reset</button>
    </>
  );
}

export default PianoComponent;
