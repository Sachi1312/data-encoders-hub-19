import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Users, Lightbulb, Rocket, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import teamCollab from "@/assets/team-collab.jpg";

const features = [
  {
    icon: Code2,
    title: "Hands-On Coding",
    description:
      "Weekly coding sessions where we tackle real-world problems using Python, JavaScript, and more.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description:
      "Work in teams on projects, share knowledge, and learn from peers with diverse skill sets.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Projects",
    description:
      "Build solutions that matter - from data analysis tools to AI-powered applications.",
  },
  {
    icon: Rocket,
    title: "Career Growth",
    description:
      "Get mentorship, prepare for interviews, and connect with industry professionals.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Data Encoders Hero"
            className="clickable-image h-full w-full object-cover opacity-40"
            onClick={() => window.open(heroBg, "_blank")}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary"
            >
              <span className="h-2 w-2 animate-pulse-glow rounded-full bg-primary" />
              Welcome to the Future of Learning
            </motion.div>

            <h1 className="mb-6 font-display text-5xl font-bold leading-tight md:text-7xl">
              <span className="gradient-text">Data</span>
              <span className="text-foreground">Encoders</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              A community of passionate coders, data enthusiasts, and future
              tech leaders. Join us to learn, build, and innovate together.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="hero-btn flex items-center gap-2">
                Join the Club
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="hero-btn-outline">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 md:gap-16"
          >
            {[
              { number: "100+", label: "Active Members" },
              { number: "50+", label: "Projects Built" },
              { number: "20+", label: "Events Hosted" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl font-bold text-primary md:text-4xl">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              What We <span className="gradient-text">Do</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From workshops to hackathons, we provide opportunities for growth
              and learning in the world of technology.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="feature-card"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={teamCollab}
                alt="Team collaboration at hackathon"
                className="clickable-image rounded-2xl"
                onClick={() => window.open(teamCollab, "_blank")}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
                Ready to <span className="gradient-text">Level Up</span> Your
                Skills?
              </h2>
              <p className="mb-6 text-muted-foreground">
                Whether you're a complete beginner or an experienced coder, Data
                Encoders welcomes everyone who's passionate about technology.
                Join our community and start building the future today.
              </p>
              <ul className="mb-8 space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Weekly coding workshops and tutorials
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Participate in national hackathons
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Network with industry professionals
                </li>
              </ul>
              <Link to="/contact" className="hero-btn inline-flex items-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
