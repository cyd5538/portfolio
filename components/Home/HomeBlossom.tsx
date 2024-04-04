import React, { useEffect, useRef } from 'react';

const HomeBlossom: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    canvas.width = 1440;
    canvas.height = 600;

    const ctx = canvas.getContext('2d')!;
    const TOTAL = 50;
    const petalArray: Petal[] = [];

    const petalImg = new Image();
    petalImg.src = '/blossom.png';
    petalImg.addEventListener('load', () => {
      for (let i = 0; i < TOTAL; i++) {
        petalArray.push(new Petal());
      }
      render();
    });

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petalArray.forEach(petal => petal.animate());
      window.requestAnimationFrame(render);
    }

    let mouseX = 0;
    function touchHandler(e: MouseEvent | TouchEvent) {
      mouseX = ('clientX' in e ? e.clientX : e.touches[0].clientX) / window.innerWidth;
    }
    window.addEventListener('mousemove', touchHandler);
    window.addEventListener('touchmove', touchHandler);

    class Petal {
      x: number;
      y: number;
      w: number;
      h: number;
      opacity: number;
      flip: number;
      xSpeed: number;
      ySpeed: number;
      flipSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = (Math.random() * canvas.height * 2) - canvas.height;
        this.w = 45 + Math.random() * 15;
        this.h = 40 + Math.random() * 10;
        this.opacity = this.w / 40;
        this.flip = Math.random();

        this.xSpeed = 1.5 + Math.random() * 0.01;
        this.ySpeed = 1 + Math.random() * 0.05;
        this.flipSpeed = Math.random() * 0.03;
      }

      draw() {
        if (this.y > canvas.height || this.x > canvas.width) {
          this.x = -petalImg.width;
          this.y = (Math.random() * canvas.height * 2) - canvas.height;
          this.xSpeed = 1.5 + Math.random() * 0.5;
          this.ySpeed = 1 + Math.random() * 0.2;
          this.flip = Math.random();
        }
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(
          petalImg, 
          this.x, 
          this.y, 
          this.w * (0.6 + (Math.abs(Math.cos(this.flip)) / 3)), 
          this.h * (0.8 + (Math.abs(Math.sin(this.flip)) / 5))
        );
      }

      animate() {
        this.x += this.xSpeed + mouseX * 0.2;
        this.y += this.ySpeed + mouseX * 0.1;
        this.flip += this.flipSpeed;
        this.draw();
      }
    }

    return () => {
      window.removeEventListener('mousemove', touchHandler);
      window.removeEventListener('touchmove', touchHandler);
    };
  }, []);

  return <canvas ref={canvasRef} className="z-40 absolute top-0 left-0" />;
};

export default HomeBlossom;
