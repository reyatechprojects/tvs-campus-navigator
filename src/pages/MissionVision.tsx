import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Heart, Flag, Users, Building } from "lucide-react";
import Layout from "@/components/Layout";

const missionPillars = [
  { icon: BookOpen, title: "Sound Academics", desc: "Imparting sound academics that build a strong educational foundation." },
  { icon: Lightbulb, title: "21st-Century Skills", desc: "Providing students 21st-century skills and honing their innate talents." },
  { icon: Heart, title: "Desirable Values", desc: "Inculcating desirable values that shape character and integrity." },
  { icon: Flag, title: "Indian Heritage", desc: "Instilling pride in Indian heritage and culture across all aspects of learning." },
  { icon: Users, title: "Teacher Development", desc: "Building a team of committed and competent teachers dedicated to excellence." },
  { icon: Building, title: "Academic Resources", desc: "Establishing strong academic resources for society's growth and progress." },
];

const MissionVision = () => {
  return (
    <Layout>
      {/* Vision */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase">Our Vision</span>
            <div className="mt-6 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-primary/10 font-display">"</div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-snug px-4">
                To build confident, competent and compassionate citizens through value-based quality education.
              </h1>
              <div className="absolute -bottom-4 right-1/4 text-6xl text-primary/10 font-display">"</div>
            </div>
            <div className="mt-8 h-1 w-20 bg-school-gold mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary font-medium tracking-widest text-sm uppercase">Our Mission</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              What Drives Us Every Day
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionPillars.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl border bg-card p-8 text-center hover-glow cursor-default"
              >
                <div className="mx-auto mb-5 h-16 w-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MissionVision;
