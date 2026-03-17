import React from 'react';
import styles from './AnimatedGradientText.module.css';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * 仿 Magic UI 的 Animated Gradient Text 元件 (使用 CSS Modules 實作)
 */
export default function AnimatedGradientText({ children, className = '' }: AnimatedGradientTextProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <span className={styles.gradientText}>
        {children}
      </span>
    </div>
  );
}
