import React from 'react';

interface LogoProps {
  className?: string;
  theme?: 'light' | 'dark';
}

export function Logo({ className = "h-12 w-auto", theme = 'light' }: LogoProps) {
  const isDark = theme === 'dark';
  const goldColor = "#b17a2b";
  const textColor = isDark ? "#ffffff" : "#1a140e";
  const dividerColor = isDark ? "#d4ad6b" : "#1a140e";

  return (
    <svg
      viewBox="0 0 620 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Anand Rathi FME IFSC - Private Wealth. uncomplicated"
    >
      {/* Top Left: ANAND RATHI */}
      <text
        x="5"
        y="60"
        fontFamily="Georgia, 'Times New Roman', 'Cinzel', serif"
        fontSize="56"
        fontWeight="bold"
        letterSpacing="0.04em"
        fill={goldColor}
      >
        ANAND RATHI
      </text>

      {/* Vertical Divider */}
      <line
        x1="432"
        y1="16"
        x2="432"
        y2="108"
        stroke={dividerColor}
        strokeWidth="2.5"
      />

      {/* Top Right: FME */}
      <text
        x="448"
        y="60"
        fontFamily="Georgia, 'Times New Roman', 'Cinzel', serif"
        fontSize="56"
        fontWeight="bold"
        letterSpacing="0.04em"
        fill={goldColor}
      >
        FME
      </text>

      {/* Bottom Left: Private Wealth. uncomplicated */}
      <text
        x="7"
        y="98"
        fontFamily="'Franklin Gothic Medium', 'Arial Black', -apple-system, BlinkMacSystemFont, sans-serif"
        fontSize="31"
        fontWeight="800"
        letterSpacing="-0.01em"
        fill={textColor}
      >
        Private Wealth. uncomplicated
      </text>

      {/* Bottom Right: I F S C */}
      <text
        x="452"
        y="97"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="31"
        fontWeight="bold"
        letterSpacing="0.45em"
        fill={goldColor}
      >
        IFSC
      </text>
    </svg>
  );
}

export default Logo;
