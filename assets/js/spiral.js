(function() {
  const canvas = document.getElementById('spiral-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId;
  let rotation = 0;

  function resize() {
    canvas.width = 150;
    canvas.height = 150;
  }

  function drawSpiral() {
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRadius = Math.min(width, height) / 2;

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, width, height);

    const numArms = 6;
    const turns = 3;
    const points = 500;

    for (let arm = 0; arm < numArms; arm++) {
      const isBlack = arm % 2 === 0;
      ctx.fillStyle = isBlack ? '#000' : '#fff';
      ctx.strokeStyle = isBlack ? '#000' : '#fff';

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);

      const armOffset = (arm / numArms) * Math.PI * 2;

      for (let i = 0; i <= points; i++) {
        const t = i / points;
        const angle = t * turns * Math.PI * 2 + armOffset + rotation;
        const radius = t * maxRadius;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        ctx.lineTo(x, y);
      }

      const nextArmOffset = ((arm + 1) / numArms) * Math.PI * 2;

      for (let i = points; i >= 0; i--) {
        const t = i / points;
        const angle = t * turns * Math.PI * 2 + nextArmOffset + rotation;
        const radius = t * maxRadius;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        ctx.lineTo(x, y);
      }

      ctx.closePath();
      ctx.fill();
    }
  }

  function animate() {
    rotation += 0.01;
    drawSpiral();
    animationId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  resize();
  animate();

  // Cleanup on page unload
  window.addEventListener('beforeunload', function() {
    cancelAnimationFrame(animationId);
  });
})();
