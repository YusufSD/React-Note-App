import React from "react";

function Footer() {
  const date = new Date();
  return (
    <footer>
      <p className="p">Copyright {date.getFullYear()} | Yusuf Said DURDURAN</p>
    </footer>
  );
}

export default Footer;
