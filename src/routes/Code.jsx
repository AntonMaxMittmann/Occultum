import { useState } from "react";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";

export default function Code() {
  const [page, setPage] = useState(1);
  const bg1 = page == 1 ? "#3399ff" : "#d1e0e0";
  const bg2 = page == 2 ? "#3399ff" : "#d1e0e0";
  return (
    <div>
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
          className="p-2 rounded-sm cursor-pointer"
        >
          Entschlüsseln
        </button>
      </div>
      <div>{page == 1 ? <Page1 /> : <Page2 />}</div>
    </div>
  );
}
