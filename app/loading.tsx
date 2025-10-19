"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [randomInt, setRandomInt] = useState<number | null>(null);

  useEffect(() => {
    const num = Math.floor(Math.random() * 10) + 1;
    setRandomInt(num);
  }, []);

  if (randomInt === null) {
    // mientras se genera el número, podés mostrar un loader base o nada
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <img
        src={`https://manhwaweb.com/assets/cargando/${randomInt}.gif`}
        alt="Cargando..."
      />
    </div>
  );
}
