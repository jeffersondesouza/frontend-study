import React from "react";

export default function Game() {
  const [position, setPosition] = React.useState({
    left: 0,
    top: 0,
  });

  function left() {
    setPosition((current) => ({
      ...current,
      left: current.left - 10,
    }));
  }

  function right() {
    setPosition((current) => ({
      ...current,
      left: current.left + 10,
    }));
  }

  function up() {
    setPosition((current) => ({
      ...current,
      top: current.top + 10,
    }));
  }

  function down() {
    setPosition((current) => ({
      ...current,
      top: current.top - 10,
    }));
  }

  function move(direction) {
    if (direction === "RIGHT") {
      right();
    }
    if (direction === "LEFT") {
      left();
    }
    if (direction === "UP") {
      up();
    }
    if (direction === "DOWN") {
      down();
    }
  }

  function moveStrategy(direction) {
    const movement = {
      RIGHT: right,
      LEFT: left,
      UP: up,
      DOWN: down,
    };

    const moveFn = movement[direction];

    if (moveFn) {
      moveFn();
    }
  }

  const handleClick = (direction) => () => {
    console.log(direction);
    // move(direction);
    moveStrategy(direction);
  };

  return (
    <div>
      <div>GAME</div>
      <br />
      <pre>{JSON.stringify(position, null, 2)}</pre>
      <br />
      <div>
        <button onClick={handleClick("LEFT")}>LEFT</button>
      </div>
      <div>
        <button onClick={handleClick("RIGHT")}>RIGHT</button>
      </div>
      <div>
        <button onClick={handleClick("UP")}>UP</button>
      </div>
      <div>
        <button onClick={handleClick("DOWN")}>DOWN</button>
      </div>
    </div>
  );
}
