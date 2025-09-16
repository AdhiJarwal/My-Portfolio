import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaAws, FaReact, FaAndroid, FaDocker, FaPython, FaInfoCircle, FaTimes, FaPen } from 'react-icons/fa';
import { SiTerraform, SiJavascript, SiJenkins } from 'react-icons/si';

const Projects = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleNoCodeClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };
  const projects = [
    {
      title: 'SimpleTime AWS ECS Infra & CI/CD',
      description: 'Implemented a containerized time-tracking application with Terraform-based AWS ECS infrastructure and a fully automated CI/CD pipeline for rapid, repeatable deployments.',
      technologies: ['AWS', 'Terraform', 'Docker', 'GitHub Actions'],
      icons: [<FaAws />, <SiTerraform />, <FaDocker />],
      highlights: [
        'Fully automated infrastructure provisioning with Terraform',
        'Seamless Docker image build and deploy via GitHub Actions',
        'Zero-downtime updates using ECS Fargate'
      ],
      category: 'Cloud Infrastructure',
      githubUrl: 'https://github.com/AdhiJarwal/SimpleTime-AWS-ECS-Terraform-CI-CD'
    },
    {
      title: 'Centralized VPN Deployment System',
      description: 'Developed a web-based interface enabling one-click deployment of three VPN solutions with 2048-bit certificates, significantly reducing manual configuration time.',
      technologies: ['AWS', 'Terraform', 'React', 'Node.js'],
      icons: [<FaAws />, <FaPython />,<SiJavascript />],
      highlights: [
        '90% reduction in manual configuration time',
        'End-to-end automated EC2 infrastructure setup',
        'Provisioning time cut from 30 minutes to under 2 minutes'
      ],
      category: 'Cloud Infrastructure',
      githubUrl: '#'
    },
    {
      title: 'AWS AI Practitioner Quiz Web App',
      description: 'Built an interactive quiz platform featuring 100+ randomized MCQs, real-time timers, and a modular JavaScript architecture to enhance learning engagement.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'AWS'],
      icons: [<FaAws />, <SiJavascript />],
      highlights: [
        '100+ randomized multiple-choice questions',
        'Real-time feedback and progress tracking',
        'Responsive UI with pause and resume functionality'
      ],
      category: 'Web Development',
      githubUrl: 'https://github.com/AdhiJarwal/AWS-AI-Practitioner-Quiz'
    },
    {
      title: 'Jenkins CI/CD Pipeline for Maven Web App',
      description: 'Created an automated Jenkins pipeline to build, test, and deploy a Maven-based web application with seamless GitHub integration for continuous delivery.',
      technologies: ['Jenkins', 'AWS', 'Ansible', 'Maven'],
      icons: [<FaAws />, <SiJenkins />],
      highlights: [
        'Automatic build triggers on GitHub commits',
        'Deployment to scalable AWS EC2 instances via Ansible playbooks',
        'Faster deployments and improved infrastructure manageability'
      ],
      category: 'DevOps',
      githubUrl: 'https://github.com/AdhiJarwal/Jenkins-CI-CD-pipeline-for-a-Maven-based-Web-Application'
    },
    {
      title: 'Machine-Learning Fake News Detector',
      description: 'Engineered an NLP-driven classifier to detect fake news using an 18k-article Kaggle dataset, leveraging advanced text preprocessing and feature engineering.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Scikit-learn'],
      icons: [<FaPython />],
      highlights: [
        'Achieved 91.8% accuracy with PassiveAggressiveClassifier',
        'Full NLP pipeline with stemming, stop-word removal, and n-gram features',
        'Interpretable insights through feature importance and confusion matrix'
      ],
      category: 'Machine Learning',
      githubUrl: 'https://github.com/AdhiJarwal/Machine-Learning-Classifier-for-Fake-News-Detection'
    },
    {
      title: 'Kahani – Interactive Hindi Story App',
      description: 'Designed an Android application for children to read, watch, and listen to Hindi stories across genres like Adventure and Mythology with a kid-friendly interface.',
      technologies: ['Android', 'Java', 'XML', 'Firebase'],
      icons: [<FaAndroid />],
      highlights: [
        'Multi-modal story experience (read, watch, listen)',
        'Designed an intuitive, child-friendly UI/UX design',
        'Curated categories including Adventure and Mythology'
      ],
      category: 'Mobile Development',
      githubUrl: 'https://github.com/AdhiJarwal/Kahani-The-Story-Tale-App'
    }
  ];

  return (
    <motion.div 
      className="min-h-screen pt-32 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <motion.h1 
          className="text-4xl font-bold text-center mb-4"
          style={{ color: 'var(--color-primary-text)' }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          My Projects
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="xl:col-span-3 backdrop-blur-md p-6 rounded-xl border-2" style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-card-border)' }}>
            <div className="text-lg text-justify leading-relaxed space-y-6" style={{ color: 'var(--color-primary-text)' }}>
              <p>
                Here are some of the projects I've worked on, showcasing my expertise in cloud infrastructure, web development, and mobile applications. Each project demonstrates my commitment to delivering scalable, efficient, and innovative solutions.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="backdrop-blur-md rounded-2xl p-8 border-2 shadow-xl hover:shadow-2xl transition-all flex flex-col h-full"
              style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-card-border)' }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  {project.icons.map((icon, iconIndex) => (
                    <span key={iconIndex} className="text-2xl" style={{ color: 'var(--color-accent)' }}>{icon}</span>
                  ))}
                </div>
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: 'var(--color-light-bg)', color: 'var(--color-primary-text)' }}>{project.category}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary-text)' }}>{project.title}</h3>
              <p className="mb-4 leading-relaxed text-justify flex-grow" style={{ color: 'var(--color-accent)' }}>{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2" style={{ color: 'var(--color-primary-text)' }}>Key Achievements:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2">
                      <span className="mt-1" style={{ color: 'var(--color-accent)' }}>✓</span>
                      <span className="text-sm" style={{ color: 'var(--color-primary-text)' }}>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: 'var(--color-light-bg)', color: 'var(--color-primary-text)' }}>{tech}</span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                {project.githubUrl && (
                  project.githubUrl === '#' ? (
                    <button onClick={handleNoCodeClick} className="flex items-center gap-2 font-semibold" style={{ color: 'var(--color-accent)' }}>
                      <FaGithub /> Code
                    </button>
                  ) : (
                    <a href={project.githubUrl} className="flex items-center gap-2 font-semibold" style={{ color: 'var(--color-accent)' }} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                  )
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} className="flex items-center gap-2 font-semibold" style={{ color: 'var(--color-accent)' }} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-primary-text)' }}>Professional Contributions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="backdrop-blur-md p-8 rounded-2xl border-2 shadow-xl text-center" style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-card-border)' }} whileHover={{ scale: 1.02 }}>
              <FaAws className="text-4xl mb-4 mx-auto" style={{ color: 'var(--color-accent)' }} />
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary-text)' }}>AWS Community Builder</h3>
              <p className="leading-relaxed text-justify" style={{ color: 'var(--color-accent)' }}>Contributing to the global AWS community through knowledge sharing and technical content creation in Security and Networking domain.</p>
            </motion.div>
            <motion.div className="backdrop-blur-md p-8 rounded-2xl border-2 shadow-xl text-center" style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-card-border)' }} whileHover={{ scale: 1.02 }}>
              <FaPen className="text-4xl mb-4 mx-auto" style={{ color: 'var(--color-accent)' }} />
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary-text)' }}>Technical Writing</h3>
              <p className="leading-relaxed text-justify" style={{ color: 'var(--color-accent)' }}>Publishing articles on Medium about cloud technologies, best practices, and industry insights.</p>
            </motion.div>
            <motion.div className="backdrop-blur-md p-8 rounded-2xl border-2 shadow-xl text-center" style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-card-border)' }} whileHover={{ scale: 1.02 }}>
              <FaGithub className="text-4xl mb-4 mx-auto" style={{ color: 'var(--color-accent)' }} />
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary-text)' }}>Open Source</h3>
              <p className="leading-relaxed text-justify" style={{ color: 'var(--color-accent)' }}>Contributing to open-source projects and sharing reusable Terraform modules and automation scripts.</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
      
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            className="backdrop-blur-md p-8 rounded-2xl border-2 max-w-md mx-4"
            style={{ backgroundColor: 'rgba(219, 226, 239, 0.95)', borderColor: 'rgba(249, 247, 247, 0.8)' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <FaInfoCircle className="text-2xl" style={{ color: 'var(--color-accent)' }} />
                <h3 className="text-xl font-bold" style={{ color: 'var(--color-primary-text)' }}>No Code Available</h3>
              </div>
              <button onClick={() => setShowPopup(false)} className="text-2xl" style={{ color: 'var(--color-primary-text)' }}>
                <FaTimes />
              </button>
            </div>
            <p className="leading-relaxed" style={{ color: 'var(--color-accent)' }}>
              This project's source code is not publicly available on GitHub due to proprietary or confidential nature.
            </p>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;