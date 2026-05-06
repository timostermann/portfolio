import * as Sentry from "@sentry/sveltekit";
import { handleErrorWithSentry, sentryHandle } from "@sentry/sveltekit";

Sentry.init({
  dsn: process.env.PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.05,
  environment: process.env.NODE_ENV,
});

export const handle = sentryHandle();
export const handleError = handleErrorWithSentry();
