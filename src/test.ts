// tslint:disable-next-line: no-submodule-imports
import 'zone.js/testing';
// tslint:disable-next-line: ordered-imports
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// tslint:disable-next-line: no-any
const context: any = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
