import { InjectionToken } from '@angular/core';

export interface MetricOptions {
  readonly [key: PropertyKey]: unknown;
  readonly ym?: object;
  readonly ga?: Record<string, unknown> & {
    readonly eventCategory?: string;
    readonly eventLabel?: string;
    readonly eventValue?: unknown;
    readonly eventAction?: string;
  };
}

export interface MetricConfig {
  readonly ids: string[];
  readonly counter: number;
  readonly paths: string[];
  readonly domains: string[];
}

export const METRIC_CONFIG = new InjectionToken<MetricConfig>('MetricConfig');
