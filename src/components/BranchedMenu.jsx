'use client';

import { isValidElement, useLayoutEffect, useRef, useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Briefcase01Icon,
  Megaphone01Icon,
  UserGroupIcon,
  CodeIcon
} from '@hugeicons/core-free-icons';
import './BranchedMenu.css';

const PAD = 6;
const MARK = 16;

const renderIcon = icon => (isValidElement(icon) ? icon : <HugeiconsIcon icon={icon} size={16} strokeWidth={1.8} />);
const toSet = open => new Set(Array.isArray(open) ? open : open >= 0 ? [open] : []);

export const LEADERSHIP_ITEMS = [
  {
    label: 'AIESEC in SLIIT',
    children: [
      { value: 'b2c-2025', label: 'B2C · Front Office & Marketing', icon: Megaphone01Icon },
      { value: 'b2b-2025', label: 'B2B Team Leader', icon: UserGroupIcon },
      { value: 'legacy-2025', label: 'Legacy ’25 · VP Marketing', icon: Briefcase01Icon },
      { value: 'igv-cxp-2026', label: 'IGV · Campaign & CXP Team Lead', icon: UserGroupIcon },
      { value: 'campaign-manager-2026', label: 'Campaign Manager · Current', icon: Megaphone01Icon }
    ]
  },
  {
    label: 'AIESEC in Sri Lanka · NST',
    children: [
      { value: 'nst-2025', label: 'National Support Team · Member', icon: UserGroupIcon }
    ]
  },
  {
    label: 'AIESEC Dev Team',
    children: [
      { value: 'dev-2026', label: 'Software Engineer · Current', icon: CodeIcon }
    ]
  }
];

export default function BranchedMenu({
  items = LEADERSHIP_ITEMS,
  defaultOpen = 0,
  defaultActive = 'campaign-manager-2026',
  onSelect,
  onToggle,
  color = '#f5f6f2',
  accentColor = '#b9f279',
  lineColor = 'rgba(255,255,255,.15)',
  width = 370,
  rowHeight = 42,
  indent = 40,
  trunk = 14,
  radius = 10,
  lineWidth = 1.5,
  fontSize = 13,
  drawDuration = 400,
  foldDuration = 300,
  className = ''
}) {
  const [open, setOpen] = useState(() => toSet(defaultOpen));
  const [active, setActive] = useState(() => {
    if (defaultActive) return defaultActive;
    const first = items.find((item, i) => item.children && toSet(defaultOpen).has(i));
    return first?.children?.[0]?.value ?? '';
  });
  const navRef = useRef(null);
  const heads = useRef([]);
  const markerRef = useRef(null);
  const latest = useRef({});
  latest.current = { onSelect, onToggle };

  const activeSection = items.findIndex(item => item.children?.some(child => child.value === active));
  const markerShown = activeSection >= 0 && open.has(activeSection);

  useLayoutEffect(() => {
    const place = glide => {
      const marker = markerRef.current;
      const head = heads.current[activeSection];
      if (!marker) return;
      const on = markerShown && head;
      if (!glide) marker.style.transition = 'none';
      if (on) marker.style.top = `${head.offsetTop + (head.offsetHeight - MARK) / 2}px`;
      marker.toggleAttribute('data-on', Boolean(on));
      if (!glide) {
        void marker.offsetHeight;
        marker.style.transition = '';
      }
    };
    place(true);
    let first = true;
    const observer = new ResizeObserver(() => {
      if (first) {
        first = false;
        return;
      }
      place(false);
    });
    if (navRef.current) observer.observe(navRef.current);
    return () => observer.disconnect();
  }, [activeSection, markerShown, items, fontSize, rowHeight]);

  const select = (value, item) => {
    setActive(value);
    latest.current.onSelect?.(value, item);
  };
  const toggle = index => {
    setOpen(previous => {
      const next = new Set(previous);
      const isOpen = !next.has(index);
      if (isOpen) next.add(index);
      else next.delete(index);
      latest.current.onToggle?.(index, isOpen);
      return next;
    });
  };

  const r = Math.min(radius, rowHeight / 2 - 2);
  const endX = indent - 8;
  const rowY = index => PAD + index * rowHeight + rowHeight / 2;
  const branch = index => `M ${trunk} ${rowY(index) - r} A ${r} ${r} 0 0 0 ${trunk + r} ${rowY(index)} H ${endX}`;
  const reach = index => `M ${trunk} 0 V ${rowY(index) - r} A ${r} ${r} 0 0 0 ${trunk + r} ${rowY(index)} H ${endX}`;
  const length = index => rowY(index) - r + (Math.PI * r) / 2 + (endX - trunk - r);

  return (
    <nav
      ref={navRef}
      className={`branched-menu${className ? ` ${className}` : ''}`}
      style={{
        '--bm-w': `${width}px`, '--bm-ink': color, '--bm-accent': accentColor, '--bm-line': lineColor,
        '--bm-font': `${fontSize}px`, '--bm-row': `${rowHeight}px`, '--bm-indent': `${indent}px`,
        '--bm-line-w': lineWidth, '--bm-draw': `${drawDuration}ms`, '--bm-fold': `${foldDuration}ms`
      }}
      aria-label="Leadership and volunteering roles"
    >
      <span ref={markerRef} className="branched-menu__marker" aria-hidden="true" />
      {items.map((item, index) => {
        const kids = item.children;
        const isOpen = kids ? open.has(index) : false;
        const leafValue = item.value ?? item.label;
        const leafActive = !kids && leafValue === active;
        const bodyHeight = kids ? PAD * 2 + kids.length * rowHeight : 0;
        return (
          <div key={item.value ?? item.label} className="branched-menu__section" data-open={isOpen ? '' : undefined}>
            <button
              ref={element => { heads.current[index] = element; }}
              type="button"
              className="branched-menu__head"
              aria-expanded={kids ? isOpen : undefined}
              aria-current={leafActive ? 'true' : undefined}
              data-active={leafActive ? '' : undefined}
              onClick={() => (kids ? toggle(index) : select(leafValue, item))}
            >
              {item.label}
            </button>
            {kids ? (
              <div className="branched-menu__body">
                <div className="branched-menu__fold">
                  <div className="branched-menu__tree" style={{ height: bodyHeight }}>
                    <svg className="branched-menu__lines" width={indent} height={bodyHeight} aria-hidden="true">
                      <path className="branched-menu__base" d={`M ${trunk} 0 V ${rowY(kids.length - 1) - r}`} />
                      {kids.map((kid, childIndex) => <path key={kid.value} className="branched-menu__base" d={branch(childIndex)} />)}
                      {kids.map((kid, childIndex) => (
                        <path key={kid.value} className="branched-menu__reach" d={reach(childIndex)} style={{ strokeDasharray: length(childIndex), strokeDashoffset: kid.value === active ? 0 : length(childIndex) }} />
                      ))}
                    </svg>
                    {kids.map(kid => (
                      <button
                        key={kid.value}
                        type="button"
                        className="branched-menu__item"
                        aria-current={kid.value === active ? 'true' : undefined}
                        data-active={kid.value === active ? '' : undefined}
                        tabIndex={isOpen ? 0 : -1}
                        onClick={() => select(kid.value, kid)}
                      >
                        {kid.icon ? <span className="branched-menu__icon" aria-hidden="true">{renderIcon(kid.icon)}</span> : null}
                        <span className="branched-menu__label">{kid.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
