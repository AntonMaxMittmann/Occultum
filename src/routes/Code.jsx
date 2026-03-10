import { useState } from "react";

export default function Code() {
  const [page, setPage] = useState(1);
  const bg1 = page == 1 ? "#3399ff" : "#d1e0e0";
  const bg2 = page == 2 ? "#3399ff" : "#d1e0e0";
  return (
    <div className="flex items-center justify-center mt-5">
      <button
        onClick={() => setPage(1)}
        style={{ backgroundColor: bg1 }}
        className="mr-4 p-2 rounded-sm cursor-pointer"
      >
        Verschlüsseln
      </button>
      <button
        onClick={() => setPage(2)}
        style={{ backgroundColor: bg2 }}
        className="mr-4 p-2 rounded-sm cursor-pointer"
      >
        Entschlüsseln
      </button>
    </div>
  );
}
