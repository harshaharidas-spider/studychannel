import { Plus_Jakarta_Sans, Caveat } from  "next/font/google";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-handwriting",
});

export const metadata = {
  title: "Indian Study Channel | Your Dream Degree Is Within Reach",
  description:
    "Flexible Bachelor's & Master's degree programs designed for your future in Dubai.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${caveat.variable} antialiased`}
    >
      <body className="font-sans bg-white text-slate-900 selection:bg-orange-500 selection:text-white">
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}

