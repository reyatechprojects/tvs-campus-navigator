import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingHelp from "./FloatingHelp";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingHelp />
    </div>
  );
};

export default Layout;
