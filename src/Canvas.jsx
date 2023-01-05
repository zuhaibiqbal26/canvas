import { useEffect, useRef } from 'react';

const Canvas = ({...props}) => {
  const canvasRef = useRef(null);

  console.log(canvasRef)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
        return;
    }

    const ctx = canvas.getContext('2d')
    if(!ctx) {
        return;
    }
    ctx.fillStyle = 'blue'
    ctx.fillRect(0,0,100,100)
    ctx.strokeRect(100,100,50,50)
  }, []);

  return <canvas width={props.width} height={props.height} ref={canvasRef} />;
};

export default Canvas;
