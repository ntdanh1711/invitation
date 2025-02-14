"use client"; // 👈 Ensures this is a Client Component

import dynamic from "next/dynamic";

// Lazy load the component without SSR
const HangoutInvite = dynamic(() => import("./HangoutInvite"), { ssr: false });

export default function DynamicHangoutInvite() {
  return <HangoutInvite />;
}
