import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useShopifyProducts } from '@/hooks/use-shopify-products';

export const ShopifyProductGrid = () => {
  const { data: products, isLoading, error } = useShopifyProducts(9);

  if (isLoading) {
    return (
      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <p>Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <p>Unable to load products. Please check your Shopify configuration.</p>
          </div>
        </div>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <p>No products available.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="container px-4 md:px-6 mb-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-muted-foreground">
            Explore our complete range of natural wellness products
          </p>
        </motion.div>
      </div>

      {/* Grid layout */}
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/products/${product.handle}`}>
                <div className="group cursor-pointer">
                  <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-4">
                    {product.images.edges[0] && (
                      <img
                        src={product.images.edges[0].node.url}
                        alt={product.images.edges[0].node.altText || product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  {product.variants.edges[0] && (
                    <p className="text-muted-foreground">
                      {product.variants.edges[0].node.price.currencyCode} {product.variants.edges[0].node.price.amount}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};