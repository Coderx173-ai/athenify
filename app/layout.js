
import "./globals.css";
import LayoutWrapper from "./Components/LayoutWrapper";


export const metadata = {
  title: "athenify",
  description: "athenify.ai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-AvenirBlackFont`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
