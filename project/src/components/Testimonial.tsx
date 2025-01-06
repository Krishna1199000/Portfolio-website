import { motion } from 'framer-motion';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

export function Testimonial({ name, role, content, image }: TestimonialProps) {
  return (
    <motion.div
      className="flex-shrink-0 w-96 p-6 bg-gray-800 rounded-xl mx-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-lg font-semibold text-white">{name}</h4>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300">{content}</p>
    </motion.div>
  );
}