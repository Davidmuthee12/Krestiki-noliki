import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditting, setIsEditting] = useState(false);

  function handelEditClick() {
    setIsEditting((editing) => !editing);

    if (isEditting) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let edittablePlayeName = <span className="player-name">{playerName}</span>;

  if (isEditting) {
    edittablePlayeName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {edittablePlayeName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelEditClick}>{isEditting ? "Save" : "Edit"}</button>
    </li>
  );
}
