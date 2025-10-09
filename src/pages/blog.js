// src/pages/blog.js
import React from "react"
import { Link } from "gatsby"

const BlogPage = () => (
  <div>
    <h1>Blog</h1>
    <section>
      <p>
        Welcome to my blog! Here I share insights, tutorials, and thoughts about
        web development.
      </p>
    </section>

    <section>
      <h2>Recent Posts</h2>
      <ul>
        <li>
          <h3>Getting Started with Gatsby.js</h3>
          <p>Learn how to build fast, modern websites with Gatsby and React.</p>
        </li>
        <li>
          <h3>Responsive Web Design Best Practices</h3>
          <p>
            Tips and techniques for creating websites that look great on any
            device.
          </p>
        </li>
        <li>
          <h3>Introduction to React Hooks</h3>
          <p>
            Understand how to use hooks to manage state and side effects in
            React applications.
          </p>
        </li>
      </ul>
    </section>

    <Link to="/">Go to Home</Link>
  </div>
)

export default BlogPage
