import { MapPin, Phone, Mail, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t bg-card py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 font-display text-xl font-bold text-primary">
              <MapPin className="h-6 w-6" />
              The TVS School
            </div>
            <p className="text-muted-foreground text-sm italic">
              "Happy Schooling… This is My School"
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 90478 88111 / 0452 2694040, 2694330</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:thetvsschool@tvslvs.com" className="hover:text-primary transition-colors">
                thetvsschool@tvslvs.com
              </a>
            </div>
            <p>Madurai, Tamil Nadu, India</p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Button variant="destructive" size="sm" className="gap-2">
              <AlertTriangle className="h-4 w-4" />
              Emergency Help
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} The TVS School. Interactive Campus Guide.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
