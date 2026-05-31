document.addEventListener('DOMContentLoaded', () => {
  const path = document.getElementById('text-path');
  const svgContainer = document.getElementById('svg-container');
  const sparkLayer = document.getElementById('spark-layer');
  const svg = document.querySelector('.text-svg');
  const toggleBtn = document.getElementById('glow-toggle');

  if (!path) return;

  const styles = getComputedStyle(document.documentElement);
  const drawSpeed = parseFloat(styles.getPropertyValue('--draw-speed')) || 3.5;
  const pauseMs = parseFloat(styles.getPropertyValue('--loop-pause')) || 1500;

  let sparksActive = false;
  let sparkInterval = null;
  let glowEnabled = true;
  let isDrawing = false;

  function getLength() {
    return path.getTotalLength();
  }

  function resetPath() {
    const length = getLength();
    path.style.transition = 'none';
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.opacity = '1';
    return length;
  }

  function drawIn() {
    isDrawing = true;
    path.style.transition = `stroke-dashoffset ${drawSpeed}s ease-out`;
    path.style.strokeDashoffset = '0';
  }

  function restartLoop() {
    if (glowEnabled) setGlow(false);
    resetPath();
    requestAnimationFrame(() => {
      requestAnimationFrame(drawIn);
    });
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
    if (e.propertyName !== 'stroke-dashoffset' || !isDrawing) return;

    const offset = parseFloat(path.style.strokeDashoffset) || 0;
    if (offset > 1) return;

    isDrawing = false;
    if (glowEnabled) setGlow(true);
    setTimeout(restartLoop, pauseMs);
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      glowEnabled = !glowEnabled;
      toggleBtn.classList.toggle('active', glowEnabled);
      if (glowEnabled && !isDrawing && parseFloat(path.style.strokeDashoffset) <= 1) {
        setGlow(true);
      } else {
        setGlow(false);
      }
    });
  }

  resetPath();
  requestAnimationFrame(drawIn);

  const observer = new ResizeObserver(() => {
    const length = getLength();
    path.style.strokeDasharray = length;
    if (isDrawing) {
      const offset = parseFloat(path.style.strokeDashoffset);
      if (Number.isNaN(offset) || offset > length) {
        path.style.strokeDashoffset = String(length);
      }
    }
  });
  observer.observe(svgContainer || document.querySelector('.svg-container'));
});
