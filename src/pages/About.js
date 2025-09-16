import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaLinux, FaReact, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaWindows } from 'react-icons/fa';
import { SiTerraform, SiKubernetes, SiJenkins, SiGithubactions, SiMicrosoftazure, SiGrafana, SiCplusplus, SiGnubash } from 'react-icons/si';

const About = () => {
  const skillCategories = [
    {
      category: 'Cloud Platforms',
      skills: [
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Azure', icon: <SiMicrosoftazure /> }
      ]
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'Shell/Bash Scripting', icon: <SiGnubash /> }
      ]
    },
    {
      category: 'DevOps & Automation',
      skills: [
        { name: 'Terraform', icon: <SiTerraform />},
        { name: 'Jenkins', icon: <SiJenkins /> },
        { name: 'GitHub Actions', icon: <SiGithubactions /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'AWS CodePipeline, Commit, Build', icon: <FaAws /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> }
      ]
    },
    {
      category: 'Server Administration',
      skills: [
        { name: 'Linux', icon: <FaLinux /> },
        { name: 'Windows (Active Directory, Certificates, Domains)', icon: <FaWindows /> }
      ]
    },
    {
      category: 'Monitoring and Logging',
      skills: [
        { name: 'CloudWatch', icon: <FaAws /> },
        { name: 'Grafana', icon: <SiGrafana /> }
      ]
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> }
      ]
    },
    {
      category: 'Core Subjects',
      skills: [
        { name: 'Data Structures and Algorithms' },
        { name: 'Cloud Computing' },
        { name: 'OOPs' },
        { name: 'DBMS' },
        { name: 'OS' },
        { name: 'Computer Networks' },
        { name: 'Software Engineering' }
      ]
    },
    {
      category: 'AI & LLM Tools',
      skills: [
        { name: 'ChatGPT' },
        { name: 'Gemini' },
        { name: 'Perplexity AI' },
        { name: 'Amazon Q' },
        { name: 'Amazon Titan' },
        { name: 'Anthropic Claude 4' },
        { name: 'Agentic AI' },
        { name: 'MCP Server' }
      ]
    }
  ];

  const certifications = [
    { name: 'AWS Certified Developer - Associate (DVA-C02)', icon: <FaAws /> },
    { name: 'AWS Certified AI Practitioner (AIF-C01)', icon: <FaAws /> },
    { name: 'Terraform Certified Associate (HCTAO-003)', icon: <SiTerraform /> }
  ];

  return (
    <motion.div 
      className="min-h-screen pt-32 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <motion.section 
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-primary-text)' }}>About Me</h1>
          <motion.div 
            className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="xl:col-span-3 backdrop-blur-md p-6 rounded-xl border-2" style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-card-border)' }}>
              <div className="text-lg text-justify leading-relaxed space-y-6" style={{ color: 'var(--color-primary-text)' }}>
                <p>
                  I am a passionate Cloud Engineer and AWS Community Builder with 2 years of experience in designing and implementing scalable, secure, and high-performance cloud infrastructure. Currently at Searce Inc, I specialize in AWS and Azure platforms, with a strong focus on automation, security, and performance optimization.
                </p>
                <p>
                  Holding a CGPA of 8.63 in Information Technology and multiple cloud certifications, I combine solid theoretical knowledge with hands-on experience to deliver impactful solutions. I am also dedicated to contributing to the global AWS community by sharing technical insights and creating meaningful content.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-primary-text)' }}>Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={category.category}
                className="backdrop-blur-md p-6 rounded-xl border-2 hover:shadow-xl transition-all"
                style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-card-border)' }}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-primary-text)' }}>{category.category}:</h3>
                {category.category === 'Core Subjects' || category.category === 'AI & LLM Tools' ? (
                  <p className="leading-relaxed" style={{ color: 'var(--color-accent)' }}>
                    {category.skills.map(skill => skill.name).join(', ')}
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        {skill.icon && <span className="text-lg" style={{ color: 'var(--color-accent)' }}>{skill.icon}</span>}
                        <span style={{ color: 'var(--color-accent)' }}>{skill.name}</span>
                        {skillIndex < category.skills.length - 1 && <span style={{ color: 'var(--color-primary-text)' }}>,</span>}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-primary-text)' }}>Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="backdrop-blur-md flex items-center gap-4 p-6 rounded-xl border-2 hover:shadow-xl transition-all"
                style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-card-border)' }}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className="text-3xl" style={{ color: 'var(--color-accent)' }}>{cert.icon}</span>
                <span className="text-lg font-medium" style={{ color: 'var(--color-primary-text)' }}>{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;