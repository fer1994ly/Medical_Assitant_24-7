import type { SVGAttributes } from "react";

export type MedicalLogoProps = SVGAttributes<SVGSVGElement>;

export default function MedicalLogo(props: MedicalLogoProps) {
  return (
    <svg
      width="106"
      height="25"
      viewBox="0 0 106 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Medical Cross Symbol */}
      <path
        d="M4 12.5h17"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12.5 4v17"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Text "24/7 Medical Assistant" */}
      <text
        x="30"
        y="16"
        fill="currentColor"
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: "14px",
          fontWeight: "500"
        }}
      >
        24/7 Medical
      </text>
    </svg>
  );
} 