import { useState } from "react";
import { HelpCircle, X, MapPin, Navigation, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FloatingHelp = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-72 rounded-lg border bg-card p-4 shadow-xl animate-fade-up">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-display font-semibold text-foreground">Need Help?</h4>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-2">
            <Link
              to="/navigate"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-md p-2 hover:bg-secondary transition-colors text-sm"
            >
              <Search className="h-4 w-4 text-primary" />
              <span>Search for a location</span>
            </Link>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-md p-2 hover:bg-secondary transition-colors text-sm"
            >
              <Navigation className="h-4 w-4 text-primary" />
              <span>Back to Main Entrance</span>
            </Link>
            <Link
              to="/mission"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-md p-2 hover:bg-secondary transition-colors text-sm"
            >
              <MapPin className="h-4 w-4 text-primary" />
              <span>About Our School</span>
            </Link>
          </div>
        </div>
      )}
      <Button
        onClick={() => setOpen(!open)}
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg pulse-soft"
      >
        {open ? <X className="h-6 w-6" /> : <HelpCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default FloatingHelp;
