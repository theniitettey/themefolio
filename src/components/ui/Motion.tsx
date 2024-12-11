"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type ExtendedHTMLMotionProps<T extends keyof JSX.IntrinsicElements> = 
  HTMLMotionProps<T> & { 
    className?: string 
  };

const MotionDiv: React.FC<ExtendedHTMLMotionProps<"div">> = motion.div;
const MotionHeader: React.FC<ExtendedHTMLMotionProps<"header">> = motion.header;
const MotionFooter: React.FC<ExtendedHTMLMotionProps<"footer">> = motion.footer;

export { MotionDiv, MotionHeader, MotionFooter };
