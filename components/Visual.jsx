import { SymbolIcon } from "./SymbolIcon";
import { imageOf, visualType } from "../lib/api";

function symbolFor(type) {
  if (type === "mountain") return "mountain";
  if (type === "retreat") return "yoga";
  if (type === "nomad") return "camel";
  return "boot";
}

export function TrekVisual({ item, large = false }) {
  const image = imageOf(item);
  const type = visualType(item);

  return (
    <div className={`trek-photo ${large ? "trek-photo-large" : ""} photo-${type}`}>
      {image ? <img src={image} alt={item?.title || "Morocco trekking landscape"} /> : null}
      <div className="photo-overlay" />
      <svg className="landscape-lines" viewBox="0 0 600 340" preserveAspectRatio="none">
        <path d="M0 250 C90 190 165 242 270 160 C390 70 455 145 600 70" fill="none" stroke="white" strokeWidth="2.2" />
        <path d="M0 292 C130 222 220 275 330 205 C430 135 500 170 600 125" fill="none" stroke="white" strokeWidth="1.2" />
        <path d="M55 220 C140 202 158 156 242 175 C352 198 368 112 470 120" fill="none" stroke="white" strokeWidth="1" opacity=".65" />
      </svg>
      <span className="symbol-float"><SymbolIcon name={symbolFor(type)} /></span>
    </div>
  );
}
