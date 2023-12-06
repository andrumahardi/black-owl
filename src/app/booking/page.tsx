import { BookingDesktop, BookingMobile } from "@/views";
import { headers } from "next/headers";
import React from "react";

export default function BookingPage() {
  const nextHeaders = headers();
  const ua = nextHeaders.get("user-agent") || "";
  const isMobile = /(mobile|android|iphone)/gi.test(ua);

  if (isMobile) {
    return <BookingMobile />;
  }

  return <BookingDesktop />;
}
