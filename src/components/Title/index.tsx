import { useEffect } from 'react';

function Title({ title }: { title?: string }) {
  useEffect(() => {
    document.title = title
      ? `${title} | Business List`
      : `Business List – 62teknologi Assessment`;
  });

  return <></>;
}

export default Title;
