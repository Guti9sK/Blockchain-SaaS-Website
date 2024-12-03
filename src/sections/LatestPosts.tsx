import Card from "../components/Card";
import type { CollectionEntry } from "astro:content";
import { getPostColorFromCategory } from "../utils/post";
import Tag from "../components/Tag";
import CutCornerButton from "../components/CutCornerButton";
import { twMerge } from "tailwind-merge";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const LatestPosts = (props: { latestPosts: CollectionEntry<"blog">[] }) => {
  const { latestPosts } = props;
  const targetRef= useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });
  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);
  return (
    <section className="py-32 md:py-72 lg:py-96">
      <div className="padding-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-4xl text-center md:text-5xl lg:text-6xl">
            Your portal to everything blockchain.
          </h2>
          <p className="text-xl lg:text-2xl text-center text-zinc-400 mt-6">
            Keep up with the newest trends, updates, and insights in the
            blockchain world, updated weekly.
          </p>
        </div>
        <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-y-8">
            {latestPosts.map(
              ({ data: { title, description, category } }, i) => (
                <Card
                  key={i}
                  buttonText="Read more"
                  color={getPostColorFromCategory(category)}
                  className={twMerge((i === 1 || i === 3) && "md:hidden")}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="font-heading font-black text-3xl mt-6">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-4">{description}</p>
                </Card>
              )
            )}
          </div>
          <motion.div ref={targetRef} className="hidden md:flex flex-col gap-8 mt-16" style={{
            marginTop,
          }}>
            {latestPosts.map(
              ({ data: { title, description, category } }, i) => (
                <Card
                  key={i}
                  buttonText="Read more"
                  color={getPostColorFromCategory(category)}
                  className={twMerge((i === 0 || i === 2) && "md:hidden")}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="font-heading font-black text-3xl mt-6">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-4">{description}</p>
                </Card>
              )
            )}
          </motion.div>
        </div>
        <div className="flex justify-center mt-48 md:mt-32">
          <CutCornerButton href="/blog">Read the blog</CutCornerButton>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
