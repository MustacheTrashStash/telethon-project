import React from "react";

const LiveStreamCard = () => {
  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.translate = "1.5px 1.5px";
    target.style.boxShadow = "1.5px 1.5px 0 #000000";
    target.style.background = "#1ac2ff";
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.translate = "0";
    target.style.boxShadow = "3px 3px 0 #000000";
    target.style.background = "#4ade80";
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.translate = "3px 3px";
    target.style.boxShadow = "0 0 0 #000000";
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.translate = "1.5px 1.5px";
    target.style.boxShadow = "1.5px 1.5px 0 #000000";
  };

  return (
    <div
      className="card"
      style={{
        fontFamily: "Montserrat, sans-serif",
        width: "300px",
        height: "250px",
        translate: "-6px -6px",
        background: "#883377",
        border: "3px solid #000000",
        boxShadow: "12px 12px 0 #000000",
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="head"
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "14px",
          fontWeight: "900",
          width: "100%",
          height: "32px",
          background: "#ffffff",
          padding: "5px 12px",
          color: "#000000",
          borderBottom: "3px solid #000000",
        }}
      >
        Live Stream
      </div>
      <div
        className="content"
        style={{ padding: "8px 12px", fontSize: "14px", fontWeight: "600" }}
      >
        <p>Watch our live embedded stream here!</p>

      </div>
    </div>
  );
};

export default LiveStreamCard;