import { useRef } from "react";
import Circle from "../components/Circle";
import CutCornerButton from "../components/CutCornerButton";
import Hexagon from "../components/Hexagon";
import { motion, useScroll, useTransform } from "framer-motion";

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);
  return (
    <section ref={sectionRef} className="py-60 overflow-hidden">
      <div className="padding-container">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={700} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={1100} reverse duration={60} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute left-0 -top-[400px]" animate>
              <motion.img
                src="/assets/images/cuboid.png"
                alt="Cuboid Image"
                className="size-[140px]"
                style={{
                  rotate,
                }}
              />
            </Circle>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute -left-[600px] -top-[70px]" animate>
              <motion.img
                src="/assets/images/cylinder.png"
                alt="Cylinder Image"
                className="size-[140px]"
                style={{
                  rotate,
                }}
              />
            </Circle>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Ready to <span className="block">get started?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-zinc-400 text-center mt-6 max-w-sm mx-auto">
            Start building using blockchain technology, with Blockforge.
          </p>
          <div className="flex justify-center mt-12">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
