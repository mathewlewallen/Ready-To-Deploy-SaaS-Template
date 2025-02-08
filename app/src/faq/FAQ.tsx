import React, { useState } from 'react';
  
interface FAQs {
  id: number;
  question: string;
  answer: string;
  href?: string | null;
}

export default function FAQs({ faqs }: { readonly faqs: FAQs[] }) {
  const [expandedAll, setExpandedAll] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number[] | null>(null);

  const toggleAll = () => {
    setExpandedAll((prev) => !prev);
    setOpenFAQ(expandedAll ? null : faqs.map((faqs) => faqs.id));
  };

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ?.includes(id) 
      ? openFAQ.filter(faqId => faqId !== id)
      : [...(openFAQ ?? []), id]
    );
  };
  
  return (
    <div className='mx-auto pb-0 px-6 max-w-7xl divide-y divide-primary'>
      <div className="flex justify-between items-center">
        <h2 className="pb-2 text-3xl font-bold  text-white">
          Frequently Asked Questions
        </h2>
        <button
          onClick={toggleAll}
          className="text-sm text-primary hover:underline"
          aria-label={expandedAll ? "Collapse All Questions" : "Expand All Questions"}
        >
          {expandedAll ? "Collapse All" : "Expand All"}
        </button>
      </div>
      <dl className="space-y-2">
        {faqs.map((faqs) => (
          <div key={faqs.id} className="border-b py-4">
            <button
              onClick={() => toggleFAQ(faqs.id)}
              className="w-full text-left cursor-pointer text-base font-semibold text-white"
            >
              {faqs.question}
              <span className="ml-2 text-md text-primary">
              {openFAQ?.includes(faqs.id) ? "  ▲" : "  ▼"}
            </span>
            </button>
            {(expandedAll || openFAQ?.includes(faqs.id)) && (
              <dd className='mt-2 text-sm text-neutral-400'>
                {faqs.answer}
                {faqs.href && (
                  <a
                    href={faqs.href}
                    className="ml-2 text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                )}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}
