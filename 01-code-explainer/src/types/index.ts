export interface ExplanationRequest {
  code: string;
  language?: string;
}

export interface ExplanationResponse {
  explanation: string;
  error?: string;
}

export interface CodeExample {
  title: string;
  code: string;
  language: string;
}
