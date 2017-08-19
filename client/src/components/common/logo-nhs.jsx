import React from "react";

const LogoNhs = ({ className }) => {
  return (
    <div className={className} style={styles.container}>
      <div style={styles.text}>
        <div>
          <strong>Bedford Hospital</strong>
        </div>
        <div style={styles.subText}>NHS Trust</div>
      </div>
      <img
        style={styles.image}
        height={30}
        src="/assets/images/nhs_logo_10mm_blue.jpg"
        alt="NHS Logo"
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    minWidth: 220
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: 8,
    marginTop: 6
  },
  subText: {
    marginTop: -6,
    fontSize: 16,
    color: "#005EB8"
  },
  image: {}
};

export default LogoNhs;
