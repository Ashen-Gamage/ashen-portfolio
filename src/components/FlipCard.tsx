'use client';

import React, { useState } from 'react';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  width?: number;
  height?: number;
}

export default function FlipCard({ front, back, width = 320, height = 240 }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{
        width,
        height,
        perspective: '1000px',
        cursor: 'pointer',
      }}
      onClick={() => setFlipped(prev => !prev)}
      role="button"
      tabIndex={0}
      aria-label={flipped ? 'Show project title' : 'Show project details'}
      aria-pressed={flipped}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped(prev => !prev);
        }
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 520ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            borderRadius: '18px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            overflow: 'hidden',
          }}
        >
          {front}
        </div>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: '18px',
            background: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(129, 140, 248, 0.35)',
            overflow: 'hidden',
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
