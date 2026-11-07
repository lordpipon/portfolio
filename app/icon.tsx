import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  // The existing pfp.png asset contains JPEG data despite its extension.
  const avatar = await readFile(join(process.cwd(), "public/pfp.png"));
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: 64,
        height: 64,
      }}
    >
      {/* ImageResponse renders HTML directly, rather than Next.js image components. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/jpeg;base64,${avatar.toString("base64")}`}
        width={64}
        height={64}
        alt=""
        style={{ objectFit: "cover", borderRadius: "50%" }}
      />
    </div>,
    size,
  );
}
