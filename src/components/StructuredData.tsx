import React from 'react';

interface StructuredDataProps {
  data: Record<string, any>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => (
  <script type="application/ld+json">
    {JSON.stringify(data)}
  </script>
);