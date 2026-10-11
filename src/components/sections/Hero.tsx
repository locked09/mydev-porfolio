"use client";

import { motion } from "framer-motion";
import { profile, stackLayers } from "@/data/portfolio";
import { heroText } from "@/lib/animations";
import { ButtonLink } from "@/components/ui/Button";
import { StackDiagram } from "@/components/ui/StackDiagram";

export function Hero() {
  const heroLayers = stackLayers.filter((layer) => layer.inHero);

  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-14 sm:px-8 md:pt-20 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pb-28"
    >
      <motion.div initial="hidden" animate="show" className="lg:col-span-7">
        <motion.p custom={0} variants={heroText} className="text-muted">
          {profile.role}, {profile.experience}
        </motion.p>

        <motion.h1
          custom={1}
          variants={heroText}
          className="type-condensed mt-4 font-display text-[clamp(3.5rem,11vw,8.5rem)] font-bold leading-[0.88] tracking-[-0.03em]"
        >
          {profile.nameLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          custom={2}
          variants={heroText}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ink/85"
        >
          {profile.intro}
        </motion.p>

        <motion.div custom={3} variants={heroText} className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="#projects">See selected work</ButtonLink>
          <ButtonLink href="#contact" variant="outline">
            Get in touch
          </ButtonLink>
        </motion.div>
      </motion.div>

      <div className="lg:col-span-5 lg:pb-2">
        <StackDiagram layers={heroLayers} />
      </div>
    </section>
  );
}
