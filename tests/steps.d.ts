/// <reference types='codeceptjs' />
type CustomHelper = import('./CustomHelper');

declare namespace CodeceptJS {
  interface SupportObject { I: I }
  interface Methods extends Puppeteer, CustomHelper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}