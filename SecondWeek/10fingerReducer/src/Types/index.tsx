// types/index.ts

export interface Word {
    id: number;
    value: string;
    accept: AcceptStatus;
  }
  
  export type AcceptStatus = "true" | "false" | "";
  