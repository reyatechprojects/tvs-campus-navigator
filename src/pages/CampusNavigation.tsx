import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, MapPin, ArrowRight, ArrowLeft, ArrowUp, ArrowDown,
  MoveRight, Clock, Landmark, CheckCircle2, Navigation
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Layout from "@/components/Layout";
import { locations, type Location } from "@/data/campusDirections";

const directionIcon = (dir: string) => {
  switch (dir) {
    case "left": return <ArrowLeft className="h-5 w-5" />;
    case "right": return <ArrowRight className="h-5 w-5" />;
    case "up": return <ArrowUp className="h-5 w-5" />;
    case "down": return <ArrowDown className="h-5 w-5" />;
    case "arrive": return <CheckCircle2 className="h-5 w-5" />;
    default: return <MoveRight className="h-5 w-5" />;
  }
};

const directionColor = (dir: string) => {
  switch (dir) {
    case "arrive": return "bg-school-green text-primary-foreground";
    case "up": return "bg-school-gold text-accent-foreground";
    case "down": return "bg-school-gold text-accent-foreground";
    default: return "bg-primary text-primary-foreground";
  }
};

const CampusNavigation = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Location | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return locations.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.category.toLowerCase().includes(q) ||
        l.block?.toLowerCase().includes(q) ||
        l.id.toLowerCase().includes(q)
    ).slice(0, 10);
  }, [query]);

  const handleSelect = (loc: Location) => {
    setSelected(loc);
    setQuery(loc.name);
    setShowSuggestions(false);
    setActiveStep(0);
  };

  const progressPercent = selected
    ? ((activeStep + 1) / selected.steps.length) * 100
    : 0;

  return (
    <Layout>
      <section className="py-12 bg-gradient-to-b from-secondary to-background min-h-[85vh]">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Campus Navigation
            </h1>
            <p className="text-muted-foreground">
              Search for any classroom, lab, office, or facility
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowSuggestions(true);
                  if (!e.target.value.trim()) setSelected(null);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search for a classroom, lab, office, or facility (e.g., I-A, Physics Lab, Library)"
                className="pl-12 h-14 text-base rounded-xl border-2 border-primary/20 focus:border-primary bg-card shadow-sm"
              />
            </div>

            <AnimatePresence>
              {showSuggestions && filtered.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute z-30 mt-2 w-full rounded-xl border bg-card shadow-lg overflow-hidden"
                >
                  {filtered.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => handleSelect(loc)}
                      className="w-full px-4 py-3 text-left hover:bg-secondary transition-colors flex items-center gap-3 border-b last:border-b-0"
                    >
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">{loc.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">
                          {loc.category}{loc.block ? ` · ${loc.block}` : ""}
                        </span>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Results */}
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Header card */}
                <div className="rounded-xl border bg-card p-6 mb-6 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-2xl font-bold text-foreground">{selected.name}</h2>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">{selected.category}</Badge>
                        {selected.block && <Badge variant="outline">{selected.block}</Badge>}
                        {selected.floor && <Badge variant="outline">{selected.floor}</Badge>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>~{selected.walkingTime} walk</span>
                    </div>
                  </div>

                  {selected.nearbyLandmarks.length > 0 && (
                    <div className="mt-4 flex items-center gap-2 flex-wrap text-sm">
                      <Landmark className="h-4 w-4 text-school-gold" />
                      <span className="text-muted-foreground">Nearby:</span>
                      {selected.nearbyLandmarks.map((l) => (
                        <Badge key={l} variant="outline" className="text-xs">{l}</Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span>Step {activeStep + 1} of {selected.steps.length}</span>
                    <span>{Math.round(progressPercent)}% complete</span>
                  </div>
                  <Progress value={progressPercent} className="h-2" />
                </div>

                {/* Starting point */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-school-green flex items-center justify-center text-primary-foreground">
                    <Navigation className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Starting Point</p>
                    <p className="font-semibold text-foreground">Main Entrance – Gate No 2</p>
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-0">
                  {selected.steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className={`flex gap-4 cursor-pointer rounded-lg px-2 transition-colors ${i === activeStep ? "bg-secondary/60" : "hover:bg-secondary/30"}`}
                      onClick={() => setActiveStep(i)}
                    >
                      {/* Timeline */}
                      <div className="flex flex-col items-center">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${i <= activeStep ? directionColor(step.direction) : "bg-muted text-muted-foreground"}`}>
                          {directionIcon(step.direction)}
                        </div>
                        {i < selected.steps.length - 1 && (
                          <div className={`w-0.5 flex-1 my-1 transition-colors ${i < activeStep ? "bg-primary" : "bg-border"}`} />
                        )}
                      </div>
                      {/* Content */}
                      <div className="pb-6 pt-2">
                        <p className={`font-medium transition-colors ${i <= activeStep ? "text-foreground" : "text-muted-foreground"}`}>{step.instruction}</p>
                        {step.landmark && (
                          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                            <Landmark className="h-3 w-3" /> Look for: {step.landmark}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Step navigation buttons */}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="px-4 py-2 text-sm rounded-lg border bg-card hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setActiveStep(Math.min(selected.steps.length - 1, activeStep + 1))}
                    disabled={activeStep === selected.steps.length - 1}
                    className="px-4 py-2 text-sm rounded-lg border bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="mx-auto h-20 w-20 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <MapPin className="h-10 w-10 text-primary/50" />
                </div>
                <p className="text-muted-foreground text-lg">
                  Type a location above to get step-by-step directions
                </p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  {["Library", "Physics Lab", "Canteen", "Class I-A", "Gym"].map((q) => (
                    <button
                      key={q}
                      onClick={() => {
                        setQuery(q);
                        setShowSuggestions(true);
                        const found = locations.find((l) => l.name.toLowerCase().includes(q.toLowerCase()));
                        if (found) handleSelect(found);
                      }}
                      className="px-3 py-1.5 text-sm rounded-full border hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default CampusNavigation;
