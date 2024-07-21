export type AcceptStatus = "true" | "false" | "";

export interface Word {
  id: number;
  value: string;
  accept: AcceptStatus;
}

export type State = {
  strings: Word[];
  id: number;
  correctCount: number;
  incorrectCount: number;
  search: string;

};
