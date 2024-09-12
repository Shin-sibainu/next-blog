import {
  HTMLReactParserOptions,
  Element,
  domToReact,
  DOMNode,
} from "html-react-parser";
import parse from "html-react-parser";

interface StyledContentProps {
  content: string;
}

const StyledContent = ({ content }: StyledContentProps) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        switch (domNode.name) {
          case "h1":
            return (
              <h1 className="text-4xl font-bold my-4">
                {domToReact(domNode.children as DOMNode[], options)}
              </h1>
            );
          case "h2":
            return (
              <h2 className="text-3xl font-semibold my-3">
                {domToReact(domNode.children as DOMNode[], options)}
              </h2>
            );
          case "h3":
            return (
              <h3 className="text-2xl font-medium my-2">
                {domToReact(domNode.children as DOMNode[], options)}
              </h3>
            );
          case "p":
            return (
              <p className="my-2 leading-relaxed">
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
              <li className="my-1">
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
            // インライン・コードのスタイリング
            if (domNode.parent?.name !== "pre") {
              return (
                <code className="bg-gray-300 text-red-600 rounded px-1 py-0.5 font-mono text-sm">
                  {domToReact(domNode.children as DOMNode[], options)}
                </code>
              );
            }
            // コードブロックのスタイリング
            return (
              <code className="block bg-gray-800 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                {domToReact(domNode.children as DOMNode[], options)}
              </code>
            );
          case "pre":
            return (
              <pre className="my-4">
                {domToReact(domNode.children as DOMNode[], options)}
              </pre>
            );
          // 他の要素に対するスタイリングをここに追加
        }
      }
    },
  };

  return <div className="prose prose-md">{parse(content, options)}</div>;
};

export default StyledContent;
