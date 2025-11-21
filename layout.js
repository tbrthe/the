import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "The Exploit Museum",
  description: "Cybersecurity Learning Vault",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
