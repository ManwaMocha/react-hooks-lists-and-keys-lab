import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // Map over the links array to create an <a> tag for each link
  const navBarLinks = links.map((link) => {
    return (
      <a key={link} href={`#${link}`}>
        {link}
      </a>
    );
  });

  // Render the navigation bar with the list of links
  return (
    <nav>
      {navBarLinks}
    </nav>
  );
}

export default NavBar;
