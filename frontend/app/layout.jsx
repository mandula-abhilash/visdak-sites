import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { ToastProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
