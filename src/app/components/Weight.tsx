import React from "react";
import Image from "next/image";

const Weight = () => {
  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center gap-28 font-sans">
      <h1 className="font-bold text-6xl w-[500px] text-gray-600">
        Try the Goodveda’s AM/PM Complex used by 7,466 customers
      </h1>
      <div>
        <Image
          src="/assets/images/img6.jpg"
          alt="image"
          width={600}
          height={800}
        />
      </div>
    </section>
  );
};

export default Weight;
