// app/(pages)/layout.tsx
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function WithFooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollIndicator
        color="var(--primary)" /* showText={true} if you like */
      />
      {children}
      <Footer />
    </>
  );
}
