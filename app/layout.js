import "./globals.css";

import { Poppins, Great_Vibes } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-greatvibes",
});

export const metadata = {
  title: "Our Story ❤️",
  description: "Website spesial buat kamu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`
          ${poppins.variable}
          ${greatVibes.variable}
          font-sans
          overflow-x-hidden
        `}
      >

        {children}

      </body>

    </html>
  );
}