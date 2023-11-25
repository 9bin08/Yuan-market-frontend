import { memo } from 'react';

type HighlightedTextProps = {
  text: string;
  query: string;
};

const HighlightedText = memo(({ text, query }: HighlightedTextProps) => {
  if (query && text.includes(query)) {
    const parts = text.split(
      new RegExp(`(${query.replace(/[()]/g, '\\$&')})`, 'gi')
    );

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={index}>{part}</mark>
          ) : (
            part
          )
        )}
      </>
    );
  }

  return <>{text}</>;
});

export default HighlightedText;
