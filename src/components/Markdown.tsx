"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Markdown({ file }: { file: string }) {
  return (
    <ReactMarkdown
      className="max-w-none"
      remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...props}
              style={materialDark}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...props}>{children}</code>
          );
        },
      }}
    >
      {file}
    </ReactMarkdown>
  );
}
