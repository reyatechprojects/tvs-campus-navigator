import { Link, useLocation } from "react-router-dom";
import { MapPin, Home, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const pageNames: Record<string, string> = {
  "/": "Welcome",
  "/mission": "Mission & Vision",
  "/navigate": "Campus Navigation",
};

const Header = () => {
  const location = useLocation();
  const currentPage = pageNames[location.pathname] || "Page";
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-card/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-primary">
            <MapPin className="h-5 w-5" />
            <span className="hidden sm:inline">TVS School Guide</span>
          </Link>
          {!isHome && (
            <>
              <span className="text-border">|</span>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>{currentPage}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-1">
            <Button variant={location.pathname === "/" ? "secondary" : "ghost"} size="sm" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant={location.pathname === "/mission" ? "secondary" : "ghost"} size="sm" asChild>
              <Link to="/mission">Mission</Link>
            </Button>
            <Button variant={location.pathname === "/navigate" ? "secondary" : "ghost"} size="sm" asChild>
              <Link to="/navigate">Navigate</Link>
            </Button>
          </nav>
          {location.pathname !== "/" && (
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <Home className="h-4 w-4 mr-1" />
                Back to Entrance
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
