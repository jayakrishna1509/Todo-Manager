import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ handleClick }) => {
  console.log("Child re-rendered!");
  return (
    <button 
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#ff4757",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "all 0.3s ease"
      }}
      onMouseEnter={(e) => e.target.style.opacity = "0.8"}
      onMouseLeave={(e) => e.target.style.opacity = "1"}
    >
      Click Me
    </button>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Memoized function, only changes when `count` changes
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div style={{
      maxWidth: "600px",
      margin: "0 auto",
      padding: "30px",
      borderRadius: "12px",
      textAlign: "center",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "20px"
    }}>
      <p style={{ color: "white", fontSize: "18px", margin: "10px 0" }}>Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#00b36e",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => e.target.style.opacity = "0.8"}
        onMouseLeave={(e) => e.target.style.opacity = "1"}
      >
        Increase Count
      </button>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

export default ParentComponent;