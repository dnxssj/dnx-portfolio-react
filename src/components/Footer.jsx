import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-6 text-crema text-opacity-50 text-sm">
      &copy; {new Date().getFullYear()} Daniel Rodríguez — All rights reserved. Made by DNX
    </footer>
  );
}
