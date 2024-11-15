import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div tw="h-full w-full flex items-start justify-start">
          <div tw="flex items-start justify-start h-full">
            <div tw="flex w-1/2 flex-col justify-between h-full p-12 bg-gray-50">
              <div tw="flex flex-col">
                <p tw="text-2xl font-bold mb-0 text-green-600">
                  theniitettey.live
                </p>
                <h1 tw="text-5xl font-black text-left">
                  Michael Perry Nii Tettey
                </h1>
                <p tw="text-xl font-bold text-left"></p>
              </div>
              <div tw="flex flex-col">
                <p tw="text-xl font-bold ml-4">
                  What's west of westeros? That's where I'm heading
                </p>
                <div tw="flex bg-green-800  p-4 rounded-lg">
                  <p tw="text-3xl font-bold text-white">
                    Portfolio X Blog X Devotional
                  </p>
                </div>
              </div>
            </div>
            <div tw="flex w-1/2 h-full rounded-lg">
              <img
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
                src="https://github.com/michaelperryjnr.png"
              />
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error(error);
  }
}
