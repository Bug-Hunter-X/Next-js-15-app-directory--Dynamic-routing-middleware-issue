# Next.js 15 App Directory Dynamic Routing Middleware Issue

This repository demonstrates an unexpected behavior encountered when using dynamic routing with custom middleware in Next.js 15's App directory.  The issue involves a mismatch between the expected route and the actual route processed by the middleware.

## Bug Description

The middleware is supposed to intercept requests to dynamic routes, but it behaves inconsistently, potentially causing unexpected redirects or data fetching failures. The root cause is currently unclear, but seems to be related to interactions between the `params` object and middleware execution.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the unexpected behavior when accessing dynamic routes. 

## Expected Behavior

The middleware should correctly intercept requests to dynamic routes and modify the response or redirect as expected.

## Actual Behavior

The middleware either doesn't intercept the requests to dynamic routes, or it doesn't parse the params correctly. 

## Solution

The solution is to ensure that middleware function accesses the `params` using the correct property and that all routes are defined correctly within the `app` directory.
