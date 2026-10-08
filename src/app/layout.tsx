import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgileX FieldForce AI — Dynamic Field Force Optimisation",
  description: "AI-powered commercial intelligence and field-force effectiveness platform for pharmaceutical organisations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fcfbfe] text-slate-900 min-h-screen antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
