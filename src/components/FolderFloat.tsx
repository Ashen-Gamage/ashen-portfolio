'use client';

import React, { useState } from 'react';
import { Folder, FolderOpen } from 'lucide-react';

export interface FolderItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  meta?: string;
}

interface FolderFloatProps {
  label: string;
  items: FolderItem[];
  trigger?: 'click' | 'hover';
  closeOnSelect?: boolean;
  onSelect?: (item: FolderItem) => void;
}

export default function FolderFloat({
  label,
  items,
  trigger = 'click',
  closeOnSelect = false,
  onSelect,
}: FolderFloatProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ display: 'inline-block' }}
      onMouseEnter={() => {
        if (trigger === 'hover') setOpen(true);
      }}
      onMouseLeave={() => {
        if (trigger === 'hover') setOpen(false);
      }}
    >
      <button
        type="button"
        onClick={() => {
          if (trigger === 'click') setOpen(prev => !prev);
        }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.75rem 1.2rem',
          borderRadius: '14px',
          border: '1px solid rgba(255,255,255,0.18)',
          background: open ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
          color: '#ffffff',
          fontSize: '0.95rem',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        {open ? <FolderOpen size={18} /> : <Folder size={18} />}
        <span>{label}</span>
        <span style={{ fontSize: '0.78rem', opacity: 0.65 }}>({items.length})</span>
      </button>

      {open && (
        <div
          style={{
            marginTop: '1rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
            gap: '0.85rem',
            width: 'min(680px, 90vw)',
          }}
        >
          {items.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => {
                onSelect?.(item);
                if (closeOnSelect) setOpen(false);
              }}
              style={{
                padding: '0.9rem 1rem',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                transform: `translateY(${idx % 2 === 0 ? '-2px' : '4px'})`,
                transition: 'transform 180ms ease, border-color 180ms ease',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.meta && (
                <div style={{ fontSize: '0.78rem', opacity: 0.68, marginTop: '0.3rem' }}>
                  {item.meta}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}