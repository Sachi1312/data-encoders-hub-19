import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Calendar, Users } from "lucide-react";
import Layout from "@/components/Layout";
import teamCollab from "@/assets/team-collab.jpg";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description:
      "We push boundaries and explore new technologies to solve real problems.",
  },
  {
    icon: Heart,
    title: "Collaboration",
    description:
      "Together we achieve more. Every voice matters in our community.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for quality in everything we do, from code to communication.",
  },
];

const milestones = [
  { year: "2020", event: "Data Encoders club founded" },
  { year: "2021", event: "First inter-college hackathon hosted" },
  { year: "2022", event: "Launched mentorship program" },
  { year: "2023", event: "100+ active members milestone" },
  { year: "2024", event: "Partnered with tech companies" },
  { year: "2025", event: "Expanded to online workshops" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 font-display text-4xl font-bold md:text-6xl">
              About <span className="gradient-text">Data Encoders</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We are a vibrant community of students passionate about data
              science, programming, and technology. Our mission is to empower
              the next generation of tech leaders through hands-on learning and
              collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="feature-card"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-2xl font-bold">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To create a collaborative learning environment where students
                can develop technical skills, work on meaningful projects, and
                prepare for successful careers in technology. We believe in
                learning by doing and growing together as a community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="feature-card"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-3 font-display text-2xl font-bold">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To be the leading student tech community that bridges the gap
                between academic learning and industry requirements. We envision
                a future where every member becomes a confident technologist
                ready to make an impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src={teamCollab}
              alt="Data Encoders team working together"
              className="h-[400px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-display text-2xl font-bold">
                Building Tomorrow, Together
              </h3>
              <p className="text-muted-foreground">
                Our members collaborating at the annual hackathon
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-display text-3xl font-bold">
              Our <span className="gradient-text">Core Values</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="feature-card text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-display text-3xl font-bold">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </motion.div>

          <div className="relative mx-auto max-w-2xl">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-ml-px" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-8 flex items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary md:left-1/2 md:-ml-4">
                  <Calendar className="h-3 w-3 text-primary-foreground" />
                </div>
                <div
                  className={`ml-16 rounded-lg border border-border/50 bg-card p-4 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <span className="font-display text-lg font-bold text-primary">
                    {milestone.year}
                  </span>
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-border/50 bg-card/50 p-8 md:p-12">
            <div className="grid gap-8 text-center md:grid-cols-4">
              {[
                { icon: Users, number: "100+", label: "Active Members" },
                { icon: Award, number: "25+", label: "Awards Won" },
                { icon: Calendar, number: "50+", label: "Events Organized" },
                { icon: Target, number: "30+", label: "Projects Completed" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <div className="font-display text-3xl font-bold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
