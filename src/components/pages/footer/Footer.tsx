import * as React from "react";
import "./Footer.css";
export interface FooterProps {}
export function Footer(props: FooterProps) {
  return (
    <footer>
      <p>
        Author: Matteo Bellia
        <br />
        <a href="">bellia138@gmail.com</a>
      </p>
    </footer>
  );
}
