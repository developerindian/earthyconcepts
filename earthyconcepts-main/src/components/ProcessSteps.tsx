import { motion } from 'framer-motion';
import { Leaf, FlaskConical, Package, Heart } from 'lucide-react';

const steps = [
  {
    icon: Leaf,
    title: 'Source',
    description: 'Ethically harvested botanicals from trusted farms',
    color: 'from-emerald-500 to-green-600',
  },
  {
    icon: FlaskConical,
    title: 'Formulate',
    description: 'Blended using traditional Ayurvedic wisdom',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: Package,
    title: 'Package',
    description: 'Sealed in eco-conscious, sustainable packaging',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Heart,
    title: 'Deliver',
    description: 'Bringing wellness directly to your doorstep',
    color: 'from-rose-500 to-pink-500',
  },
];

export const ProcessSteps = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-emerald-50/50 relative overflow-hidden">
      {/* Connecting line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden lg:block" />

      <div className="container px-4 md:px-6 relative">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From nature to you - crafted with care at every step
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-sm font-bold text-primary border-2 border-primary/20 z-10">
                {index + 1}
              </div>

              <motion.div 
                className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-xl`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <step.icon className="h-12 w-12 text-white" />
              </motion.div>

              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>

              {/* Arrow connector (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="absolute top-12 -right-4 hidden lg:block">
                  <motion.div 
                    className="w-8 h-8 text-primary/30"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
