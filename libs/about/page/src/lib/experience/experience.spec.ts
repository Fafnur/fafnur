import { CAREER_START, experienceDuration, toDate } from './experience';

describe('experienceDuration', () => {
  it('should count months inclusively', () => {
    expect(experienceDuration({ year: 2020, month: 0 }, { year: 2020, month: 0 })).toEqual({ years: 0, months: 1 });
  });

  it('should count a full calendar year as one year', () => {
    expect(experienceDuration({ year: 2020, month: 0 }, { year: 2020, month: 11 })).toEqual({ years: 1, months: 0 });
  });

  it('should split years and months', () => {
    expect(experienceDuration({ year: 2018, month: 6 }, { year: 2020, month: 11 })).toEqual({ years: 2, months: 6 });
  });

  it('should cross year boundaries', () => {
    expect(experienceDuration({ year: 2011, month: 8 }, { year: 2012, month: 1 })).toEqual({ years: 0, months: 6 });
  });

  it('should count the career from January 2015', () => {
    expect(experienceDuration(CAREER_START, { year: 2026, month: 9 }).years).toBe(11);
  });
});

describe('toDate', () => {
  it('should create the first day of the month', () => {
    expect(toDate({ year: 2018, month: 8 })).toEqual(new Date(2018, 8, 1));
  });
});
