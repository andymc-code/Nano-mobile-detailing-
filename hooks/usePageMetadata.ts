
import { useEffect } from 'react';

export const usePageMetadata = (title: string, description: string, noIndex: boolean = false) => {
  useEffect(() => {
    document.title = title;
    
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', description);
    }

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (noIndex) {
        if (!robotsMeta) {
            robotsMeta = document.createElement('meta');
            robotsMeta.setAttribute('name', 'robots');
            document.head.appendChild(robotsMeta);
        }
        robotsMeta.setAttribute('content', 'noindex, follow');
    } else {
        if (robotsMeta) {
            document.head.removeChild(robotsMeta);
        }
    }

  }, [title, description, noIndex]);
};
