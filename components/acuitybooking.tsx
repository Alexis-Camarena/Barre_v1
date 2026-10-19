
"use client";

import Script from "next/script";

export default function AcuityBooking() {
  return (
    <div className="w-full">
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=40644225&ref=embedded_csp"
        title="Book a Class"
        width="100%"
        height="800"
        style={{ border: 0 }}
        allow="payment"
        className="w-full"
      />

      <Script
        src="https://embed.acuityscheduling.com/js/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
