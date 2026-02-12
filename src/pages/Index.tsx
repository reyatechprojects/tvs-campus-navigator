import { Link } from "react-router-dom";
import { MapPin, Compass, Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import campusHero from "@/assets/campus-hero.png";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Hero background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${campusHero})` }}
        />
        <div className="absolute inset-0 bg-foreground/50" />
        {/* Floating icons */}
        <motion.div
          className="absolute top-20 left-[15%] text-primary-foreground/40"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <MapPin className="h-12 w-12 md:h-16 md:w-16" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-[12%] text-school-gold/60"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Compass className="h-10 w-10 md:h-14 md:w-14" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-[20%] text-school-green/50"
          animate={{ y: [-8, 12, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Footprints className="h-10 w-10 md:h-12 md:w-12" />
        </motion.div>

        {/* Content */}
        <div className="container relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
              <MapPin className="h-4 w-4" />
              Interactive Campus Guide
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight drop-shadow-lg">
              Welcome to<br />
              <span className="text-school-gold">The TVS School</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-4">
              We're delighted to guide you through our campus.
            </p>

            <p className="text-base text-primary-foreground/80 max-w-xl mx-auto mb-10">
              This smart campus guide helps parents and visitors easily find classrooms, labs, offices, and facilities inside The TVS School.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8 pulse-soft" asChild>
                <Link to="/mission">Explore Our School</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/navigate">Find a Classroom</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full text-background" fill="currentColor">
            <path d="M0,60 C360,100 1080,0 1440,60 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* Quick info */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              { icon: MapPin, title: "50+ Locations", desc: "Classrooms, labs, offices & facilities mapped" },
              { icon: Compass, title: "Step-by-Step", desc: "Clear walking directions from the main entrance" },
              { icon: Footprints, title: "Easy Navigation", desc: "Search, find, and walk with confidence" },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                className="flex items-start gap-4 rounded-xl border bg-card p-6 hover-glow"
                whileHover={{ y: -4 }}
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
