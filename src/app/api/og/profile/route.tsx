import { ImageResponse } from "next/dist/compiled/@vercel/og";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const font = fs.promises.readFile(
  path.join(
    fileURLToPath(import.meta.url),
    "../../../../fonts/Poppins-Regular.ttf"
  )
);

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
          fontFamily: "Poppins, sans-serif",
        }}
        tw="flex flex-row w-[1200px] h-[630px] items-center justify-between px-24 py-16 border-8 border-solid border-slate-800 shadow-2xl shadow-black/30 rounded-lg"
      >
        <div tw="flex flex-col w-[70%] space-y-4">
          <h2 tw="text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Michael Perry Nii Tettey
          </h2>
          <p tw="text-3xl font-medium leading-relaxed text-slate-200">
            Software engineer by day, writer by night. What's west of Westeros?
            That's where I'm headed.
          </p>
          <p tw="text-cyan-600 text-sm sm:text-xl mt-4">theniitettey.live</p>
        </div>
        <div tw="flex items-center justify-center w-[30%]">
          <img
            width="280"
            height="280"
            src="https://github.com/michaelperryjnr.png"
            style={{
              borderRadius: "50%",
            }}
            tw="border-4 border-solid border-slate-700 shadow-2xl shadow-black/60 transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Poppins",
          data: await font,
          style: "normal",
        },
      ],
    }
  );
}
