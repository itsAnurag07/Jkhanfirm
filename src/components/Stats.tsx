import { useEffect, useRef, useState } from 'react';

/* ── Individual stat definition ── */
interface StatItem {
  end: number;          // target number
  suffix: string;       // e.g. "M+", "+", "%"
  prefix?: string;      // e.g. "1." for "1.2M+"
  label: string;
  decimals?: number;    // decimal places to show during count
}

/* ── Hook: count from 0 → end when triggered ── */
function useCountUp(end: number, duration = 3000, trigger: boolean, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, end, duration, decimals]);

  return count;
}

/* ── Single animated stat box ── */
function StatBox({ stat, trigger }: { stat: StatItem; trigger: boolean }) {
  const count = useCountUp(stat.end, 1800, trigger, stat.decimals ?? 0);

  const display = stat.prefix
    ? `${stat.prefix}${count.toFixed(stat.decimals ?? 0)}${stat.suffix}`
    : `${count.toFixed(stat.decimals ?? 0)}${stat.suffix}`;

  return (
    <div
      style={{ textAlign: 'center', flex: '1 1 200px' }}
      className="stat-box"
    >
      <h3
        style={{
          fontSize: '3rem',
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
          color: 'var(--accent-dark)',
          margin: '0 0 0.25rem 0',
          lineHeight: 1.1,
          fontVariantNumeric: 'tabular-nums',
          transition: 'color 0.2s',
        }}
      >
        {display}
      </h3>
      <p
        style={{
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontWeight: 600,
          margin: 0,
        }}
      >
        {stat.label}
      </p>
    </div>
  );
}

/* ── Main Stats section ── */
export default function Stats() {
  const stats: StatItem[] = [
    { end: 2,    suffix: 'M+',  prefix: '1.', decimals: 0, label: 'Square Feet Built' },
    { end: 150,  suffix: '+',                              label: 'Landmark Projects' },
    { end: 200,  suffix: '+',                              label: 'Local Artisans' },
    { end: 100,  suffix: '%',                              label: 'Structural Assurance' },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '60px 20px',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        zIndex: 5,
        marginTop: '-30px',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', padding: 0 }}>
        {/* Glassmorphic Stats Wrapper */}
        <div
          style={{
            backgroundColor: 'rgba(245, 241, 233, 0.6)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(142, 122, 99, 0.12)',
            borderRadius: '24px',
            padding: '2.5rem',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2.5rem',
            boxShadow: 'var(--shadow-sm)',
          }}
          className="stats-container"
        >
          {stats.map((stat, idx) => (
            <StatBox key={idx} stat={stat} trigger={triggered} />
          ))}
        </div>
      </div>

      {/* Embedded CSS for responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          .stats-container {
            padding: 2rem 1.5rem !important;
            gap: 2rem !important;
          }
          .stat-box h3 {
            font-size: 2.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
