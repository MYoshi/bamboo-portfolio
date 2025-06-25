import React from 'react';

export default function CompanySelector({ companies, selectedCompany, setSelectedCompany }: {
  companies: string[];
  selectedCompany: number;
  setSelectedCompany: (idx: number) => void;
}) {
  return (
    <div className="flex flex-row justify-between mt-5">
      {companies.map(company => (
        <button
          key={company}
          type="button"
          onClick={() => setSelectedCompany(companies.indexOf(company))}
          className={`cursor-pointer mt-7 font-semibold flex-grow-1 text-center border-2 rounded-t-2xl flex items-center justify-center h-14 ${
            selectedCompany === companies.indexOf(company)
              ? 'bg-white/70 text-green-800'
              : 'bg-white/30 text-green-950'
          }`}
        >
          <span className={selectedCompany === companies.indexOf(company) ? '' : 'text-gray-400'}>
            {company}
          </span>
        </button>
      ))}
    </div>
  );
}
