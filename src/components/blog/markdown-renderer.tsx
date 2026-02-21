'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function MarkdownRenderer({ children }: { children: string }) {
  // @ts-ignore
    return (
    <div className="prose-styles">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node, ...props}) => <h1 className="text-4xl font-headline font-bold mb-6 mt-8" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-3xl font-headline font-semibold mb-4 mt-6 border-b pb-2" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-2xl font-headline font-semibold mb-3 mt-4" {...props} />,
          p: ({node, ...props}) => <p className="leading-relaxed mb-4" {...props} />,
          a: ({node, ...props}) => <a className="text-primary font-medium hover:underline" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc list-outside mb-4 pl-6 space-y-2" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal list-outside mb-4 pl-6 space-y-2" {...props} />,
          li: ({node, ...props}) => <li className="pl-2" {...props} />,
          blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary/50 pl-4 italic text-muted-foreground my-4" {...props} />,
            // @ts-ignore
            code: ({node, inline, className, children, ...props}) => {
            if (inline) {
              return <code className="bg-muted px-1.5 py-1 rounded-sm font-code text-sm" {...props}>{children}</code>;
            }
            return (
              <div className="my-4 rounded-md overflow-hidden bg-gray-800">
                <pre className="p-4 overflow-x-auto">
                  <code className="font-code text-sm text-gray-200" {...props}>
                    {children}
                  </code>
                </pre>
              </div>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
