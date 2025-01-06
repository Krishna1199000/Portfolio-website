import { motion } from 'framer-motion';
import { Code2, Database, Server, Settings } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: 'frontend' | 'backend' | 'database' | 'devops';
  delay: number;
}

export function SkillCard({ title, skills, icon, delay }: SkillCardProps) {
  const icons = {
    frontend: <Code2 className="w-8 h-8 mb-4" />,
    backend: <Server className="w-8 h-8 mb-4" />,
    database: <Database className="w-8 h-8 mb-4" />,
    devops: <Settings className="w-8 h-8 mb-4" />
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex flex-col items-center text-center">
        {icons[icon]}
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="space-y-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-gray-700 px-3 py-1 rounded-full text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}