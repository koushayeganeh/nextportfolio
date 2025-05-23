import Nav from "@/components/Nav";
import "./globals.css";

export const metadata = {
  title: "Kousha Yeganeh",
  description: "Portfolio of Kousha Yeganeh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground font-sans">
        <Nav />
        {children}
      </body>
    </html>
  );
}
