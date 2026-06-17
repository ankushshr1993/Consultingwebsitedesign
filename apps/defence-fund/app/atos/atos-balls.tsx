'use client';

import { useEffect, useMemo, useRef } from 'react';

type Point = { x: number; y: number };
type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tx: number;
  ty: number;
  color: string;
  size: number;
};

const phrase = 'Atos ;)';
const palette = ['#ff6b6b', '#7c9dff', '#9ee07f', '#f6e27f', '#8be9fd', '#f8a5ff'];

const sampleLine = (a: Point, b: Point, spacing: number): Point[] => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const length = Math.hypot(dx, dy);
  const count = Math.max(2, Math.ceil(length / spacing));
  const points: Point[] = [];

  for (let i = 0; i <= count; i += 1) {
    const t = i / count;
    points.push({ x: a.x + dx * t, y: a.y + dy * t });
  }

  return points;
};

const sampleArc = (
  center: Point,
  radius: number,
  startAngle: number,
  endAngle: number,
  spacing: number,
): Point[] => {
  const arcLength = Math.abs(endAngle - startAngle) * radius;
  const count = Math.max(8, Math.ceil(arcLength / spacing));
  const points: Point[] = [];

  for (let i = 0; i <= count; i += 1) {
    const t = i / count;
    const angle = startAngle + (endAngle - startAngle) * t;
    points.push({
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius,
    });
  }

  return points;
};

const createGlyph = (letter: string, x: number, baseline: number, size: number, spacing: number): Point[] => {
  const h = size;
  const w = size * 0.7;
  const top = baseline - h;
  const middle = baseline - h * 0.48;

  switch (letter) {
    case 'A': {
      return [
        ...sampleLine({ x: x + w * 0.08, y: baseline }, { x: x + w * 0.5, y: top }, spacing),
        ...sampleLine({ x: x + w * 0.92, y: baseline }, { x: x + w * 0.5, y: top }, spacing),
        ...sampleLine(
          { x: x + w * 0.23, y: middle },
          { x: x + w * 0.77, y: middle },
          spacing,
        ),
      ];
    }
    case 't': {
      return [
        ...sampleLine({ x: x + w * 0.5, y: top }, { x: x + w * 0.5, y: baseline }, spacing),
        ...sampleLine(
          { x: x + w * 0.18, y: top + h * 0.24 },
          { x: x + w * 0.82, y: top + h * 0.24 },
          spacing,
        ),
        ...sampleArc(
          { x: x + w * 0.68, y: baseline - h * 0.2 },
          h * 0.18,
          Math.PI * 0.2,
          Math.PI * 1.3,
          spacing,
        ),
      ];
    }
    case 'o': {
      return sampleArc(
        { x: x + w * 0.5, y: top + h * 0.55 },
        h * 0.33,
        0,
        Math.PI * 2,
        spacing,
      );
    }
    case 's': {
      return [
        ...sampleArc(
          { x: x + w * 0.52, y: top + h * 0.33 },
          h * 0.2,
          Math.PI * 1.15,
          Math.PI * 0.05,
          spacing,
        ),
        ...sampleArc(
          { x: x + w * 0.48, y: top + h * 0.72 },
          h * 0.2,
          Math.PI * 0.05,
          Math.PI * 1.2,
          spacing,
        ),
      ];
    }
    case ';': {
      return [
        ...sampleArc(
          { x: x + w * 0.52, y: top + h * 0.48 },
          h * 0.05,
          0,
          Math.PI * 2,
          spacing,
        ),
        ...sampleArc(
          { x: x + w * 0.48, y: top + h * 0.82 },
          h * 0.06,
          Math.PI * 0.2,
          Math.PI * 1.5,
          spacing,
        ),
      ];
    }
    case ')': {
      return sampleArc(
        { x: x + w * 0.12, y: top + h * 0.57 },
        h * 0.35,
        -Math.PI * 0.35,
        Math.PI * 0.35,
        spacing,
      );
    }
    default:
      return [];
  }
};

const buildTargets = (width: number, height: number): { point: Point; color: string }[] => {
  const size = Math.min(130, Math.max(82, width * 0.11));
  const spacing = Math.max(8, Math.round(size * 0.075));
  const baseline = height * 0.7;
  const gap = size * 0.24;
  const widths = [...phrase].map((char) => {
    if (char === ' ') return size * 0.26;
    if (char === ';' || char === ')') return size * 0.34;
    return size * 0.72;
  });

  const totalWidth = widths.reduce((sum, value) => sum + value, 0) + gap * (widths.length - 1);
  let cursor = (width - totalWidth) / 2;
  const all: { point: Point; color: string }[] = [];

  [...phrase].forEach((char, index) => {
    const glyphPoints = createGlyph(char, cursor, baseline, size, spacing);
    const color = palette[index % palette.length];
    glyphPoints.forEach((point) => all.push({ point, color }));
    cursor += widths[index] + gap;
  });

  return all;
};

export function AtosBalls() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);

  const dpr = useMemo(() => {
    if (typeof window === 'undefined') return 1;
    return Math.min(window.devicePixelRatio || 1, 2);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let rafId = 0;

    const seedParticles = () => {
      const targets = buildTargets(width, height);

      particles.current = targets.map(({ point, color }) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8,
        tx: point.x,
        ty: point.y,
        color,
        size: 2 + Math.random() * 1.6,
      }));
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = Math.max(480, bounds.width);
      height = Math.max(280, Math.min(420, bounds.height || 320));

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#06070d';
      ctx.fillRect(0, 0, width, height);

      for (const p of particles.current) {
        const ax = (p.tx - p.x) * 0.025;
        const ay = (p.ty - p.y) * 0.025;

        p.vx = (p.vx + ax) * 0.86;
        p.vy = (p.vy + ay) * 0.86;
        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, [dpr]);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/15 bg-[#05060a] p-4 shadow-[0_0_40px_rgba(99,102,241,0.15)]">
      <canvas ref={canvasRef} className="h-[320px] w-full" aria-label="Animated Atos text made of moving balls" />
    </div>
  );
}
