import type { Metadata } from "next"; 
import "./globals.css";
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";

export const metadata: Metadata = {
  title: "NWSL Next App",
  description: "Generateed by Berna using Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='font-poppins antialiased'
      >
        <HeaderBar/>
        {children} 
      </body>
    </html>
  );
}
