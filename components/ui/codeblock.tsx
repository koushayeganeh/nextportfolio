// components/ui/codeblock.tsx

import React from "react";

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
}

export default function CodeBlock({ children, language }: CodeBlockProps) {
  return (
    <pre className="bg-neutral-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
      <code className={language ? `language-${language}` : ""}>{children}</code>
    </pre>
  );
}
