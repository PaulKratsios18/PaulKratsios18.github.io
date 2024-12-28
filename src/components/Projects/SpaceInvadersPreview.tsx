import React, { useEffect, useRef } from 'react';

interface SpaceInvadersPreviewProps {
  width: number;
  height: number;
}

const SpaceInvadersPreview: React.FC<SpaceInvadersPreviewProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
      });
    };

    const drawPreviewMenu = async () => {
      // Load background
      const background = await loadImage('/assets/space_invaders/background-black.png');
      
      const animate = () => {
        // Draw background
        ctx.drawImage(background, 0, 0, width, height);
        
        // Draw overlay
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, width, height);
        
        // Draw title (scaled down)
        ctx.fillStyle = '#fff';
        ctx.font = '32px Arial';
        const titleText = 'SPACE INVADERS';
        const titleWidth = ctx.measureText(titleText).width;
        ctx.fillText(titleText, width / 2 - titleWidth / 2, height / 3);

        // Animate button
        const time = Date.now() * 0.001;
        const pulseScale = 1 + Math.sin(time * 2) * 0.05;

        // Draw button with pulse effect
        const baseButtonWidth = 150;
        const baseButtonHeight = 35;
        const buttonWidth = baseButtonWidth * pulseScale;
        const buttonHeight = baseButtonHeight * pulseScale;
        const buttonX = width / 2 - buttonWidth / 2;
        const buttonY = height / 2 - buttonHeight / 2;

        ctx.fillStyle = 'rgba(37, 99, 235, 0.8)';
        ctx.beginPath();
        ctx.roundRect(buttonX, buttonY, buttonWidth, buttonHeight, 5);
        ctx.fill();

        // Draw button text
        ctx.fillStyle = '#fff';
        ctx.font = '20px Arial';
        const buttonText = 'Click to Play!';
        const textWidth = ctx.measureText(buttonText).width;
        ctx.fillText(buttonText, width / 2 - textWidth / 2, buttonY + buttonHeight / 2 + 7);

        requestAnimationFrame(animate);
      };

      animate();
    };

    drawPreviewMenu();

    return () => {
      // Cleanup animation frame on unmount
      cancelAnimationFrame(requestAnimationFrame(() => {}));
    };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  );
};

export default SpaceInvadersPreview; 