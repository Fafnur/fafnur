export type InkLineType = 'narrator' | 'player';

export interface InkLine {
  readonly id: number;
  readonly text: string;
  readonly type: InkLineType;
  readonly blockId: number;
}
