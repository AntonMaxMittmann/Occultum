import arrowDown from "../assets/arrow-down.png";
import { useState } from "react";
import b from "../assets/b.png";

export default function Page1() {
  const [input, setInput] = useState("");
  return (
    <div className="flex justify-center mt-10 p-5 flex-col items-center">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Zu verschlüsselnden Text eingeben..."
        className="bg-blue-100 w-full p-2 h-min-32 rounded-xl"
      />
      <img src={arrowDown} alt="" className="w-10 mt-4" />
      {input === "Ben" || input === "ben" ? (
        <img src={b} alt="" />
      ) : (
        <div className="bg-blue-100 w-full h-min-32 rounded-xl mt-10 p-2">
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            repellat, maxime ex praesentium rem a laborum ipsa sapiente
            voluptate libero delectus cupiditate saepe illum laboriosam illo.
            Alias beatae quo rerum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Natus sunt iure perspiciatis obcaecati quod.
            Sapiente a obcaecati voluptates iure sed laboriosam debitis rerum
            veritatis assumenda ratione in, asperiores quis consequatur?
          </div>
          <div className="mt-3 bg-blue-200 p-2 rounded-xl">
            <select>
              <option>Verschlüsselung 1</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
