"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-4 rounded-xl border p-5">
      <h2 className="text-lg font-semibold">
        Client Component
      </h2>

      <p className="my-3 text-2xl font-bold">
        Count: {count}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(0)}
          className="rounded-lg border px-4 py-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
}