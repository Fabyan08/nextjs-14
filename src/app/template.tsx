// "use client";

// import { useState } from "react";
export default function Template({ children }: { children: React.ReactNode }) {
  // const [tambah, setTambah] = useState(0);
  return (
    <div className="p-10">
      {/* <div>
        // <h1 className="text-center">tes</h1>
        //{" "}
        <div className="flex items-center justify-center">
          //{" "}
          <button
            className="bg-blue-500 p-2 rounded-lg text-white"
            onClick={() => setTambah(tambah + 1)}
          >
            // Template (Reset Tiap Pindah Page) //{" "}
          </button>
          // <h1>{tambah}</h1>
          //{" "}
        </div> */}
      {children}
      {/* //{" "} */}
    </div>
  );
}
