import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div 
      className="min-h-screen pt-32 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          style={{ color: 'var(--color-primary-text)' }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Professional Experience
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="xl:col-span-3 backdrop-blur-md p-6 rounded-xl border-2" style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-card-border)' }}>
          <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary-text)' }}>Cloud Engineer - Searce Inc</h3>
          <p className="font-semibold mb-6" style={{ color: 'var(--color-accent)' }}>January 2024 – Present | Hyderabad, India</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1" style={{ color: 'var(--color-accent)' }}>▶</span>
              <span style={{ color: 'var(--color-primary-text)' }}>Developed Terraform modules to automate custom model infrastructure on Amazon Bedrock, eliminating 100% of manual setup.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1" style={{ color: 'var(--color-accent)' }}>▶</span>
              <span style={{ color: 'var(--color-primary-text)' }}>Deployed Palo Alto VM-Series with custom security rules, URL filtering, and IP policies, set up Active-Passive HA and designed Active-Active HA with Gateway Load Balancer for 99% uptime and centralized control via Panorama.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1" style={{ color: 'var(--color-accent)' }}>▶</span>
              <span style={{ color: 'var(--color-primary-text)' }}>Secured web applications using AWS WAF with multiple Web ACLs, geo-blocks, managed rules, and bot control; allowed only valid bots and integrated Security Hub, GuardDuty, and Inspector for centralized threat detection.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1" style={{ color: 'var(--color-accent)' }}>▶</span>
              <span style={{ color: 'var(--color-primary-text)' }}>Delivered 3+ LLM-based applications (chatbots, summarizers, QnA agents) using Amazon Bedrock, Knowledge Bases, and Guardrails, enabling secure and scalable GenAI deployments with &lt;300ms latency.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1" style={{ color: 'var(--color-accent)' }}>▶</span>
              <span style={{ color: 'var(--color-primary-text)' }}>Automated repeated notifications for 10+ critical CloudWatch alarms using EventBridge, Step Functions, and Lambda, reducing missed alerts by 60% through tag-based orchestration with AWS CDK.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1" style={{ color: 'var(--color-accent)' }}>▶</span>
              <span style={{ color: 'var(--color-primary-text)' }}>Supported Linux and Windows environments by resolving security, networking, and system issues, and performing OS patching/hardening. Streamlined maintenance and enhanced monitoring/alerting, reducing incidents by 30% and boosting system reliability.</span>
            </li>
          </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;