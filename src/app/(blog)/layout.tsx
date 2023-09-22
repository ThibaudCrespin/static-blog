import "./globals.css";
import { Ubuntu } from "next/font/google";

import type { FC, PropsWithChildren } from "react";

const inter = Ubuntu({ weight: "300", subsets: ["latin"] });

export const metadata = {
  title: "Next.js Static CMS Blog",
  description: "Je fais juste un test c'est rien",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
