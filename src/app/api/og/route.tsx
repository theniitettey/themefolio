import { ImageResponse } from "next/dist/compiled/@vercel/og";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const font = fs.promises.readFile(
  path.join(
    fileURLToPath(import.meta.url),
    "../../../fonts/Poppins-Regular.ttf"
  )
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title =
    searchParams.get("title") || "The Nii Tettey | Portfolio & Blog";
  const description = searchParams.get("description") || "A blog by Nii Tettey";

  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
        }}
        tw="flex flex-col w-full h-full items-start justify-between border-8 border-solid border-[#13547a] p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <div tw="flex flex-col space-y-4">
          <h2 tw="text-6xl font-extrabold tracking-tighter text-[#222831] leading-tight">
            {title}
          </h2>
          <p tw="text-4xl font-semibold tracking-tight text-white opacity-90 leading-snug">
            {description}
          </p>
        </div>
        <div tw="flex flex-row items-center mt-6">
          <img
            width="130"
            height="130"
            src="https://github.com/michaelperryjnr.png"
            style={{
              borderRadius: "50%",
            }}
            tw="border-4 border-solid border-[#f96d00]/40 shadow-2xl shadow-indigo-600/60 transform hover:scale-105 transition-transform duration-300"
          />
          <h3 tw="ml-4 text-3xl font-bold text-white opacity-90">
            theniitettey
          </h3>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 627,
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
