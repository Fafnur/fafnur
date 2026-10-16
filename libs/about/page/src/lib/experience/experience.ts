import { YearMonth } from '@fafnur/core';

export interface ExperienceDuration {
  readonly years: number;
  readonly months: number;
}

/** The first commercial job — Glavweb, January 2015. */
export const CAREER_START: YearMonth = { year: 2015, month: 0 };

/** Inclusive: from January to December of the same year is 12 months. */
export function experienceDuration(start: YearMonth, end: YearMonth): ExperienceDuration {
  const total = (end.year - start.year) * 12 + end.month - start.month + 1;

  return { years: Math.floor(total / 12), months: total % 12 };
}

export function toDate({ year, month }: YearMonth): Date {
  return new Date(year, month);
}
