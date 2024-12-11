"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type ExtendedHTMLMotionProps<T extends keyof React.ReactHTML> = 
  HTMLMotionProps<T> & 
  React.HTMLAttributes<HTMLElement> & { 
    className?: string 
  };

const MotionDiv: React.FC<ExtendedHTMLMotionProps<"div">> = motion.div;
const MotionHeader: React.FC<ExtendedHTMLMotionProps<"header">> = motion.header;
const MotionFooter: React.FC<ExtendedHTMLMotionProps<"footer">> = motion.footer;

export { MotionDiv, MotionHeader, MotionFooter };
