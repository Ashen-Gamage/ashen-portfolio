'use client';

import React from 'react';

interface SpecularButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
}

export default function SpecularButton({
  size = 'md',
  children,
  style,
  ...props
}: SpecularButtonProps) {
  const paddingMap = {
    sm: '0.45rem 0.9rem',
    md: '0.65rem 1.25rem',
    lg: '0.85rem 1.6rem',
  };

  const fontSizeMap = {
    sm: '0.82rem',
    md: '0.95rem',
    lg: '1.05rem',
  };

  return (
    <button
      {...props}
      style={{
        position: 'relative',
        padding: paddingMap[size],
        fontSize: fontSizeMap[size],
        fontWeight: 600,
        color: '#ffffff',
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 100%)',
        border: '1px solid rgba(255,255,255,0.24)',
        borderRadius: '999px',
        cursor: 'pointer',
        backdropFilter: 'blur(10px)',
        boxShadow:
          'inset 0 1px 1px rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.45)',
        transition: 'transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease',
        ...style,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
        e.currentTarget.style.boxShadow =
          'inset 0 1px 2px rgba(255,255,255,0.5), 0 10px 28px rgba(99,102,241,0.25)';
        props.onMouseEnter?.(e);
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.24)';
        e.currentTarget.style.boxShadow =
          'inset 0 1px 1px rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.45)';
        props.onMouseLeave?.(e);
      }}
      onMouseDown={e => {
        e.currentTarget.style.transform = 'scale(0.97)';
        props.onMouseDown?.(e);
      }}
      onMouseUp={e => {
        e.currentTarget.style.transform = 'scale(1)';
        props.onMouseUp?.(e);
      }}
    >
      {children}
    </button>
  );
}