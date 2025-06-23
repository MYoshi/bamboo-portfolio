import React from 'react';

export default function CompanyDetails({ details }: { details: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-2">
      {details.map(detail => (
        <li key={detail}>{detail}</li>
      ))}
    </ul>
  );
}
