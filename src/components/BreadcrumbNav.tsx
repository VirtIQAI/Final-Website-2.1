import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': `https://virtiq.dk${item.path}`,
        name: item.label,
      },
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-300">{item.label}</span>
              ) : (
                <Link
                  to={item.path}
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </>
  );
};