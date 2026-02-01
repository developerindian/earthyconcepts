import { useQuery } from '@tanstack/react-query';
import { shopifyClient } from '@/integrations/shopify/client';

interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }>;
  };
}

interface ShopifyProductsResponse {
  products: {
    edges: Array<{
      node: ShopifyProduct;
    }>;
  };
}

export const useShopifyProducts = (first: number = 10) => {
  return useQuery({
    queryKey: ['shopify-products', first],
    queryFn: async () => {
      const { data } = await shopifyClient.request<ShopifyProductsResponse>(`
        query GetProducts($first: Int!) {
          products(first: $first) {
            edges {
              node {
                id
                title
                handle
                images(first: 1) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
                variants(first: 1) {
                  edges {
                    node {
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `, { first });

      return data.products.edges.map(edge => edge.node);
    },
    enabled: !!import.meta.env.VITE_SHOPIFY_STORE_DOMAIN && !!import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  });
};