import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Leaf, Clock, Package, Check } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getProductById, getProductsByCategory, getCategoryById } from '@/data/products';
import logo from '@/assets/logo.jpeg';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProductById(productId) : undefined;

  if (!product) {
    return (
      <Layout>
        <div className="container px-4 md:px-6 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const category = getCategoryById(product.category);
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hello Earthy Concepts, I would like to order ${product.name}`
  );
  const whatsappUrl = `https://wa.me/971XXXXXXXXX?text=${whatsappMessage}`;

  return (
    <Layout>
      {/* Breadcrumb with Logo */}
      <div className="bg-muted/30 py-4">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img 
                src={logo} 
                alt="Earthy Concepts" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/products" className="hover:text-foreground transition-colors">
                Products
              </Link>
              <span>/</span>
              <Link 
                to={`/products?category=${product.category}`} 
                className="hover:text-foreground transition-colors"
              >
                {category?.name}
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={`${product.image}?v=1`}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {category?.name}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {product.name}
                </h1>
                <p className="text-xl text-primary font-medium">
                  {product.tagline}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Benefits */}
              <div>
                <h3 className="font-semibold mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Details */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Size</p>
                    <p className="font-medium text-sm">{product.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Shelf Life</p>
                    <p className="font-medium text-sm">{product.shelfLife}</p>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              {product.ingredients && product.ingredients.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <Badge key={index} variant="outline">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Botanical Name */}
              {product.botanicalName && (
                <div>
                  <h3 className="font-semibold mb-2">Botanical Name</h3>
                  <p className="text-muted-foreground italic">{product.botanicalName}</p>
                </div>
              )}

              {/* Preparation */}
              {product.preparation && (
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-primary" />
                    How to Prepare
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.preparation}</p>
                </div>
              )}

              {/* CTA */}
              <div className="pt-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                >
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Order on WhatsApp
                  </a>
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Click to chat with us on WhatsApp for ordering
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}

      <WhatsAppButton variant="floating" />
    </Layout>
  );
};

export default ProductDetail;
