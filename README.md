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
- Codifica Base64 per una trasmissione efficiente dei dati
- Condivisione delle procedure basata su URL
- Integrazione di codici QR per la rappresentazione visiva degli URL delle procedure

## Dettagli di Implementazione

Il nucleo dell'applicazione consiste in due componenti principali:

### 1. Costruttore di Procedure

Genera una struttura di output JSON che rappresenta i passaggi della procedura e i dati associati.

### 2. Renderer di Procedure

Interpreta i dati JSON per renderizzare dinamicamente una pagina web con il set completo di istruzioni.

## Flusso dei Dati

- L'utente crea la procedura utilizzando l'interfaccia del Costruttore
- L'applicazione genera l'output JSON
- Il JSON viene codificato in Base64
- I dati codificati vengono aggiunti a un URL
- L'URL può essere convertito in un codice QR per una facile condivisione
- Il Renderer decodifica i dati Base64 e visualizza la procedura

## Miglioramenti Futuri

- Supporto offline utilizzando tecnologie Progressive Web App (PWA)

## Note

- Documentazione db e storage: https://supabase.com/docs