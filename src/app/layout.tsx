import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {config} from '@fortawesome/fontawesome-svg-core' 
import '@fortawesome/fontawesome-svg-core/styles.css'
import Nav from "./(component)/Nav";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ticket System",
  description: "Create a functional tikecting system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen" >
          <Nav />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
              {children}
          </div>
        </div>
      </body>
    </html>
  );
}
