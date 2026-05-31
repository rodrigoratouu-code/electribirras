document.addEventListener('DOMContentLoaded', () => {
  const path = document.getElementById('text-path');
  const svgContainer = document.getElementById('svg-container');
  const sparkLayer = document.getElementById('spark-layer');
  const svg = document.querySelector('.text-svg');
  const toggleBtn = document.getElementById('glow-toggle');

  if (!path) return;

  const styles = getComputedStyle(document.documentElement);
  const drawSpeed = parseFloat(styles.getPropertyValue('--draw-speed')) || 3.5;
  const eraseSpeed = parseFloat(styles.getPropertyValue('--erase-speed')) || 2.5;
  const pauseMs = parseFloat(styles.getPropertyValue('--loop-pause')) || 1500;

  let sparksActive = false;
  let sparkInterval = null;
  let glowEnabled = true;
  let loopPhase = 'draw';

  function getLength() {
    return path.getTotalLength();
  }

  function resetPath() {
    const length = getLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.opacity = '1';
    return length;
  }

  function drawIn() {
    loopPhase = 'draw';
    path.style.transition = `stroke-dashoffset ${drawSpeed}s ease-out`;
    path.style.strokeDashoffset = '0';
  }

  function drawOut() {
    loopPhase = 'erase';
    const length = getLength();
    path.style.transition = `stroke-dashoffset ${eraseSpeed}s ease-in`;
    path.style.strokeDashoffset = String(length);
  }

  function svgPointToLayer(svgX, svgY) {
    const pt = svg.createSVGPoint();
    pt.x = svgX;
    pt.y = svgY;
    const screenPt = pt.matrixTransform(svg.getScreenCTM());
    const layerRect = sparkLayer.getBoundingClientRect();
    return {
      x: screenPt.x - layerRect.left,
      y: screenPt.y - layerRect.top
    };
  }

  function createSpark() {
    if (!sparkLayer || !path.classList.contains('glow-on')) return;

    const pathLength = path.getTotalLength();
    const point = path.getPointAtLength(Math.random() * pathLength);
    const pos = svgPointToLayer(point.x, point.y);

    const spark = document.createElement('div');
    spark.className = 'spark';

    const angle = Math.random() * 360;
    const dist = 6 + Math.random() * 14;
    const rad = (angle * Math.PI) / 180;
    const duration = 0.35 + Math.random() * 0.4;

    spark.style.left = pos.x + 'px';
    spark.style.top = pos.y + 'px';
    spark.style.setProperty('--tx', Math.cos(rad) * dist + 'px');
    spark.style.setProperty('--ty', Math.sin(rad) * dist + 'px');
    spark.style.setProperty('--ray-angle', angle + 'deg');
    spark.style.setProperty('--ray-len', 6 + Math.random() * 10 + 'px');
    spark.style.setProperty('--spark-duration', duration + 's');

    sparkLayer.appendChild(spark);
    spark.addEventListener('animationend', () => spark.remove());
  }

  function startSparks() {
    if (sparksActive || !glowEnabled) return;
    sparksActive = true;
    sparkInterval = setInterval(() => {
      const count = 2 + Math.floor(Math.random() * 3);
      for (let i = 0; i < count; i++) {
        createSpark();
      }
    }, 120);
  }

  function stopSparks() {
    sparksActive = false;
    if (sparkInterval) {
      clearInterval(sparkInterval);
      sparkInterval = null;
    }
    if (sparkLayer) sparkLayer.innerHTML = '';
  }

  function setGlow(active) {
    path.classList.toggle('glow-on', active);
    if (active) {
      startSparks();
    } else {
      stopSparks();
    }
  }

  path.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'stroke-dashoffset') return;

    const length = getLength();
    const offset = parseFloat(path.style.strokeDashoffset) || 0;

    if (loopPhase === 'draw' && offset <= 1) {
      if (glowEnabled) setGlow(true);
      setTimeout(() => {
        if (glowEnabled) setGlow(false);
        drawOut();
      }, pauseMs);
    } else if (loopPhase === 'erase' && offset >= length - 1) {
      setTimeout(drawIn, 300);
    }
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      glowEnabled = !glowEnabled;
      toggleBtn.classList.toggle('active', glowEnabled);
      if (glowEnabled && loopPhase === 'draw' && parseFloat(path.style.strokeDashoffset) <= 1) {
        setGlow(true);
      } else {
        setGlow(false);
      }
    });
  }

  resetPath();
  requestAnimationFrame(drawIn);

  const cursorGlow = document.getElementById('cursor-glow');
  if (cursorGlow) {
    document.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    });
  }

  const observer = new ResizeObserver(() => {
    const length = getLength();
    path.style.strokeDasharray = length;
    if (loopPhase === 'draw') {
      const offset = parseFloat(path.style.strokeDashoffset);
      if (Number.isNaN(offset) || offset > length) {
        path.style.strokeDashoffset = String(length);
      }
    }
  });
  observer.observe(svgContainer || document.querySelector('.svg-container'));
});
