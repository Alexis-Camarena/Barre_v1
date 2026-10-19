
"use client";

import { useEffect, useRef } from "react";

const VAGARO_SCRIPT =
  "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqqE3WsE3acT3qmV35y6RuRFXoSlXYO61Cq7fYO61WO4pkUcvCu7gevEhAJDXwOapcUbfY?v=4tuCjoiLPzsZknJTIpHE9rvCybAuOW29z5VVnOzMXoXG#";

export default function VagaroBooking() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src = VAGARO_SCRIPT;
    script.type = "text/javascript";
    script.defer = true;

    container.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <div
        id="frameTitle"
        className="embedded-widget-title"
        style={{
          fontSize: "23px",
          color: "#333",
          fontFamily: "Arial, Helvetica, sans-serif",
          lineHeight: "24px",
          padding: "18px 10px 8px",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      />

      <div
        ref={containerRef}
        className="vagaro"
        style={{
          width: "250px",
          padding: 0,
          border: 0,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <style>
          {`.vagaro a {
            font-size: 14px;
            color: #AAA;
            text-decoration: none;
          }`}
        </style>

        <a href="https://www.vagaro.com/pro/">
          Powered by Vagaro
        </a>
        {" "}
        <a href="https://www.vagaro.com/pro/salon-software">
          Salon Software
        </a>
        ,{" "}
        <a href="https://www.vagaro.com/pro/spa-software">
          Spa Software
        </a>
        {" & "}
        <a href="https://www.vagaro.com/pro/fitness-software">
          Fitness Software
        </a>
      </div>
    </>
  );
}
