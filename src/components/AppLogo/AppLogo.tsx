import { APP_LOGO } from "../../constants/assets";

export const AppLogo = () => {
  return (
    <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
      <img
        src={APP_LOGO}
        alt="logo"
        height={70}
        style={{
          objectFit: "contain",
          filter: "sepia(1) hue-rotate(190deg) saturate(5)",
          cursor: "pointer",
        }}
      />
    </div>
  );
};
