"use client";

const ScrollDown = () => {
  const scrollUp = () => {
    const scrollAmount = window.innerHeight * 0.95; // Scroll down by 95% of the viewport height
    window.scrollBy(0, scrollAmount);
  };

  return <button onClick={scrollUp}></button>;
};

export default ScrollDown;
