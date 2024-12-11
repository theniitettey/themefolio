"use client";
import { motion } from "framer-motion";
import { HTMLMotionProps } from "framer-motion";

const MotionDiv: React.FC<HTMLMotionProps<"div">> = motion.div;
const MotionHeader: React.FC<HTMLMotionProps<"header">> = motion.header;
const MotionFooter: React.FC<HTMLMotionProps<"footer">> = motion.footer;

export { MotionDiv, MotionHeader, MotionFooter };
