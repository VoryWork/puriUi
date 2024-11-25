import "./index.css";
export default function createRipple(event: any) {
  const element = event.target as any;
  const circle = document.createElement("span");
  const diameter = Math.max(element.clientWidth, element.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - element.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - element.offsetTop - radius}px`;
  circle.classList.add("puri-ripple-round");

  const ripple = element.getElementsByClassName("puri-ripple-round")[0];

  if (ripple) {
    ripple.remove();
  }

  element.appendChild(circle);
}
