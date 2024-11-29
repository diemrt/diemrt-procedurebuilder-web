# Procedure builder - Web App

## Descrizione del Progetto

Procedure Builder è un'applicazione web progettata per creare e visualizzare procedure passo-passo per attività manuali. Il progetto mira a sostituire le tradizionali procedure cartacee con istruzioni digitali dinamiche e facilmente modificabili.

## Caratteristiche

- Interfaccia web per la creazione di procedure
- Rendering dinamico delle procedure
- Esportazione e importazione dei dati delle procedure
- Generazione di codici QR per una facile condivisione delle procedure

## Specifiche Tecniche

L'applicazione è costruita interamente come soluzione frontend per minimizzare i costi di infrastruttura. Gli aspetti tecnici chiave includono:

- Architettura solo frontend (senza backend o database)
- Struttura dei dati delle procedure in formato JSON
- Download e upload del file generato e generazione link univoco
- Condivisione delle procedure basata su URL
- Integrazione di codici QR per la rappresentazione visiva degli URL delle procedure

Per persistere i dati l'applicazione fa uso di uno storage cloud nel quale memorizzare i file json generati. Per ulteriori informazioni consultare la guida di Supabase: https://supabase.com/docs

## Dettagli di Implementazione

Il nucleo dell'applicazione consiste in due componenti principali:

### 1. Costruttore di Procedure

Genera una struttura di output JSON che rappresenta i passaggi della procedura e i dati associati.

### 2. Renderer di Procedure

Interpreta i dati JSON per renderizzare dinamicamente una pagina web con il set completo di istruzioni.

## Flusso dei Dati

- L'utente crea la procedura utilizzando l'interfaccia del Costruttore
- L'applicazione genera l'output JSON
- I dati codificati vengono aggiunti ad uno storage cloud, contestualmente viene generato un link univoco
- L'URL può essere convertito in un codice QR per una facile condivisione
- Il Renderer decodifica i dati del file e visualizza la procedura

## Miglioramenti Futuri

- Supporto offline utilizzando tecnologie Progressive Web App (PWA)