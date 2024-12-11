"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type HTMLElementTagNames = 
  | "div" 
  | "header" 
  | "footer" 
  | "section" 
  | "nav" 
  | "main" 
  | "article" 
  | "aside";

type ExtendedHTMLMotionProps<T extends HTMLElementTagNames> = 
  HTMLMotionProps<T> & 
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>, 
    HTMLElement
  > & { 
    className?: string 
  };

const MotionDiv: React.FC<ExtendedHTMLMotionProps<"div">> = motion.div;
const MotionHeader: React.FC<ExtendedHTMLMotionProps<"header">> = motion.header;
const MotionFooter: React.FC<ExtendedHTMLMotionProps<"footer">> = motion.footer;

export { MotionDiv, MotionHeader, MotionFooter };
