window.MathJax = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    packages: { "[+]": ["ams", "physics"] },
  },
  options: {
    processHtmlClass: "arithmatex",
    ignoreHtmlClass: ".*",
  },
};
