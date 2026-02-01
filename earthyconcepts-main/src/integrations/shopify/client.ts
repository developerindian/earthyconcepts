import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const SHOPIFY_STORE_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

// Import the shopify client like this:
// import { shopifyClient } from "@/integrations/shopify/client";

export const shopifyClient = createStorefrontApiClient({
  storeDomain: SHOPIFY_STORE_DOMAIN,
  apiVersion: '2024-01',
  publicAccessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});