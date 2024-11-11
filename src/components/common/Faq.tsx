const Faq = () => {
  return (
    <>
      {/* FAQ */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            FAQs
          </h2>
        </div>
        {/* End Title */}
        <div className="max-w-2xl mx-auto divide-y divide-gray-200">
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div className="grow">
                <h3 className="md:text-lg font-semibold text-gray-800">
                  Cos'è una procedura?
                </h3>
                <p className="mt-1 text-gray-500">
                  Una procedura è una sequenza di istruzioni o passaggi che
                  guida l'utente nello svolgimento di un'attività o nel
                  completamento di un processo. Può comprendere indicazioni
                  dettagliate su cosa fare, come farlo e in quale ordine,
                  aiutando così a garantire uniformità, precisione e sicurezza
                  nell'esecuzione di operazioni ripetitive o complesse.
                </p>
              </div>
            </div>
          </div>
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div className="grow">
                <h3 className="md:text-lg font-semibold text-gray-800">
                  Come faccio a creare una procedura?
                </h3>
                <p className="mt-1 text-gray-500">
                  Per creare una procedura, clicca sul bottone qui sotto, scegli un titolo, aggiungi i
                  passaggi in ordine, rivedi e salva: pronta per essere
                  condivisa!
                </p>
              </div>
            </div>
          </div>
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div className="grow">
                <h3 className="md:text-lg font-semibold text-gray-800">
                  Le procedure vengono memorizzate?
                </h3>
                <p className="mt-1 text-gray-500">
                  Non salviamo nessuno dei dati sui nostri server. Quando la procedura è completa, viene generato un link univoco che puoi condividere con chiunque tu voglia, che contiene tutte le informazioni necessarie per visualizzare la procedura. Questo link è l'unico modo per accedere alla procedura, quindi assicurati di conservarlo in un luogo sicuro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End FAQ */}
    </>
  );
};

export default Faq;
