const setRem = () => {
  let dpr = window.devicePixelRatio || 0
  const doc = document.documentElement
  const currentWidth = doc.clientWidth
  let scale = currentWidth / 750
  let rem = 750 / 10 * scale
  doc.style.fontSize = `${rem}px`
  doc.setAttribute('data-dpr', dpr)
}

setRem()
window.addEventListener('resize', setRem, false)
