import { SimpleBlock } from "@/components";
import { EventDesktop, EventMobile, HomeDesktop, HomeMobile } from "@/views";
import { headers } from "next/headers";
import React from "react";

export default function EventPage() {
  const nextHeaders = headers();
  const ua = nextHeaders.get("user-agent") || "";
  const isMobile = /(mobile|android|iphone)/gi.test(ua);

  if (isMobile) {
    return <EventMobile />;
  }

  return <EventDesktop />;
}
