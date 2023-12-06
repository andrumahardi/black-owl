import { SimpleBlock } from "@/components";
import { HomeDesktop, HomeMobile } from "@/views";
import { headers } from "next/headers";
import React from "react";

export default function HomePage() {
  const nextHeaders = headers();
  const ua = nextHeaders.get("user-agent") || "";
  const isMobile = /(mobile|android|iphone)/gi.test(ua);

  if (isMobile) {
    return <HomeMobile />;
  }

  return <HomeDesktop />;
}
