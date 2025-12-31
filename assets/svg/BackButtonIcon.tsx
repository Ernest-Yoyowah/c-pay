import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface BackButtonIconProps {
  width?: number;
  height?: number;
}

const BackButtonIcon: React.FC<BackButtonIconProps> = ({
  width = 40,
  height = 40,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
      <Rect x="0.5" y="0.5" width="39" height="39" rx="11.5" stroke="#E5E7EB" />
      <G clipPath="url(#clip0_27_1464)">
        <Path
          d="M23 14L17 20L23 26"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_27_1464">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(8 8)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default BackButtonIcon;
