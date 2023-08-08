// BlogPage.tsx
import React from "react";
import Head from "next/head";
import { blogData } from "@/data/blogdata";
import BlogPost from "@/Components/blog/BlogPost";
import BaseLayouts from "@/Components/layouts/BaseLayouts";

const BlogPage: React.FC = () => {
  return (
    <BaseLayouts>
      <div className="container mx-auto py-10">
        <Head>
          <title>Travel Blog </title>
        </Head>
        <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase text-center font-bold mb-16 text-red-800">
          Our Blogs
        </h1>
        <div className="flex flex-col mx-auto max-w-7xl gap-20">
          {blogData.map((blog: any) => (
            <BlogPost
              key={blog.title}
              title={blog.title}
              content={blog.content}
              rating={blog.rating}
              likes={blog.likes}
            />
          ))}
        </div>
      </div>
    </BaseLayouts>
  );
};

export default BlogPage;
