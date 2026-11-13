'use client';
import { useEffect, useRef } from 'react';

interface PatternWavesProps {
  preset?: string;
  color?: string;
  backgroundColor?: string;
  fade?: 'edges' | 'none';
  interactive?: boolean;
  cursorSize?: number;
  cursorStrength?: number;
}

export default function PatternWaves({
  color = '#DBC1E8',
  backgroundColor = '#30133E',
  fade = 'edges',
  interactive = true,
  cursorSize = 50,
  cursorStrength = 0.6,
}: PatternWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Handle high DPI screens
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    // Animation Loop
    const draw = () => {
      time += 0.01;
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      // Fill background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      // Draw multiple overlapping waves
      const numWaves = 3;
      for (let i = 0; i < numWaves; i++) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5 - i * 0.4;
        ctx.globalAlpha = 0.3 - i * 0.05;

        for (let x = 0; x <= width; x += 5) {
          // Base sine wave
          const yBase = Math.sin(x * 0.005 + time + i * 2) * 50 + height / 2;
          
          // Mouse interaction (push the wave away from the cursor)
          let yOffset = 0;
          if (interactive) {
            const dx = x - mouseRef.current.x;
            const dy = yBase - mouseRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < cursorSize) {
              const force = (1 - dist / cursorSize) * cursorStrength * 100;
              yOffset = dy > 0 ? force : -force;
            }
          }

          const y = yBase + yOffset;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Edge Fade Overlay
      if (fade === 'edges') {
        ctx.globalAlpha = 1;
        const gradient = ctx.createRadialGradient(
          width / 2, height / 2, Math.min(width, height) * 0.2,
          width / 2, height / 2, Math.max(width, height) * 0.7
        );
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(1, backgroundColor);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [color, backgroundColor, fade, interactive, cursorSize, cursorStrength]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full block" 
      style={{ width: '100%', height: '100%' }}
    />
  );
}