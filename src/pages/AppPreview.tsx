import OhCurioApp from "../components/OhCurioApp";

/**
 * Bare-bones page that renders just the OhCurio app.
 * Loaded inside an <iframe> in PhoneMockup so scroll,
 * fixed positioning and all UI work natively.
 */
const AppPreview = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        minHeight: "100vh",
        background: "#F9F6F2",
        overflowX: "hidden",
      }}
    >
      <OhCurioApp />
    </div>
  );
};

export default AppPreview;
