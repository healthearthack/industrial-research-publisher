/**
 * Industrial Research Publisher
 * Strict TypeScript interfaces for automated publication metadata, DOIs, and BibTeX citations.
 */

export interface DOIDepositionResult {
  status: string;
  doi: string;
  doi_url: string;
  deposition_id?: number;
  title: string;
  version: string;
}

export interface PublicationManifest {
  publication_id: string;
  title: string;
  author: string;
  affiliation: string;
  doi: string;
  doi_url: string;
  timestamp_utc: string;
  abstract: string;
  bibtex: string;
  synthesis_inputs: {
    atmospheric_xco2_ppm: number;
    net_power_mw_e: number;
    eroi: number;
    carbon_delta_kg: number;
    annual_45x_credit_usd: number;
    annual_waqf_endowment_usd: number;
  };
  cryptographic_fingerprint_sha256: string;
}
