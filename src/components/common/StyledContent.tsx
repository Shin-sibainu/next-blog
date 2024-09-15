"use client";

import { CheckIcon, ClipboardIcon } from "@heroicons/react/16/solid";

import {
  HTMLReactParserOptions,
  Element,
  domToReact,
  DOMNode,
} from "html-react-parser";

import parse from "html-react-parser";
import { useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface StyledContentProps {
  content: string;
}

const StyledContent = ({ content }: StyledContentProps) => {
  const CodeBlock = ({
    code,
    language,
  }: {
    code: string;
    language: string;
  }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 200);
    };

    return (
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 bg-gray-700 rounded-md text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          {copied ? (
            <CheckIcon className="h-5 w-5" />
          ) : (
            <ClipboardIcon className="w-5 h-5" />
          )}
        </button>

        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    );
  };

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        switch (domNode.name) {
          case "h1":
            return (
              <h1 className="text-4xl font-bold my-8">
                {domToReact(domNode.children as DOMNode[], options)}
              </h1>
            );
          case "h2":
            return (
              <h2 className="text-3xl font-semibold my-8">
                {domToReact(domNode.children as DOMNode[], options)}
              </h2>
            );
          case "h3":
            return (
              <h3 className="text-2xl font-medium my-4">
                {domToReact(domNode.children as DOMNode[], options)}
              </h3>
            );
          case "p":
            return (
              <p className="my-4 leading-relaxed">
                {domToReact(domNode.children as DOMNode[], options)}
              </p>
            );
          case "ul":
            return (
              <ul className="list-disc list-inside my-2">
                {domToReact(domNode.children as DOMNode[], options)}
              </ul>
            );
          case "ol":
            return (
              <ol className="list-decimal list-inside my-2">
                {domToReact(domNode.children as DOMNode[], options)}
              </ol>
            );
          case "li":
            return (
              <li className="my-4">
                {domToReact(domNode.children as DOMNode[], options)}
              </li>
            );
          case "a":
            return (
              <a
                className="text-blue-600 hover:underline"
                href={domNode.attribs.href}
              >
                {domToReact(domNode.children as DOMNode[], options)}
              </a>
            );
          case "blockquote":
            return (
              <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
                {domToReact(domNode.children as DOMNode[], options)}
              </blockquote>
            );
          case "code":
            if ((domNode.parent as Element)?.name !== "pre") {
              return (
                <code className="bg-gray-100 text-red-500 rounded px-1 py-0.5 font-mono text-sm">
                  {domToReact(domNode.children as DOMNode[], options)}
                </code>
              );
            }
            const language =
              domNode.attribs.class?.replace("language-", "") || "plaintext";
            const code = (domNode.children[0] as unknown as { data: string })
              .data;
            return <CodeBlock code={code} language={language} />;
          case "pre":
            return domToReact(domNode.children as DOMNode[], options);
          // 他の要素に対するスタイリングをここに追加
        }
      }
    },
  };

  return <div className="max-w-none">{parse(content, options)}</div>;
};

export default StyledContent;
