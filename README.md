## Content Structure Documentation for Portfolio Site

This document describes the types of content that you can create for your portfolio site. Your content will be defined using the `contentlayer` system. Below are the document types you can create, the fields they accept, and how to use them.

### 1. **Page**

The `Page` type is used for defining pages in your portfolio site, like the homepage or about me page.

#### Fields:

- `title` (required)  
  **Type**: `string`  
  The title of the page.

- `description` (optional)  
  **Type**: `string`  
  A brief description of the page.

#### Computed Fields:

- `slug`:  
  **Type**: `string`  
  Resolves to the URL path of the page (e.g., `/about-me` for the `about-me.mdx` file).

- `slugAsParams`:  
  **Type**: `string`  
  Resolves to the URL path used as URL parameters (e.g., `about-me` for the `about-me.mdx` file).

- `readTimeMinutes`:  
  **Type**: `string`  
  Computes the estimated reading time in minutes based on the number of words in the content. For example, `5 min read`.

#### Example:

```mdx
---
title: "About Me"
description: "A little bit about myself."
---

# About Me

Welcome to my portfolio site!
```
