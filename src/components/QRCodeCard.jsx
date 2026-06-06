import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

export default function QRCodeCard() {
  const qrRef = useRef(null);

  useEffect(() => {
    const qrCode = new QRCodeStyling({
      width: 300,
      height: 300,

      data: "https://qrcodescanner-ashen.vercel.app/profile",

      backgroundOptions: {
        color: "#000000",
      },

      dotsOptions: {
        color: "#ffffff",
        type: "classy-rounded",
      },

      cornersSquareOptions: {
        color: "#ffffff",
        type: "extra-rounded",
      },

      cornersDotOptions: {
        color: "#ffffff",
        type: "dot",
      },
    });

    qrCode.append(qrRef.current);
  }, []);

  return (
    <div className="flex justify-center">
      <div ref={qrRef}></div>
    </div>
  );
}