import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Navigation() {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos < 100 || prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.div 
      className="flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-5 px-10 items-center justify-center space-x-4 border-white/[0.2] bg-black-100"
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -20
      }}
      transition={{ duration: 0.3 }}
    >
      {[
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#contact", label: "Contact" }
      ].map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
        >
          <span className="block sm:hidden"></span>
          <span className="text-sm !cursor-pointer">{label}</span>
        </a>
      ))}
    </motion.div>
  );
}