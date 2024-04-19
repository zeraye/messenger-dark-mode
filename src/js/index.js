/* Replace all data in `.__fb-light-mode` by data in `.__fb-dark-mode`.
 */
(() => {
  const fbStyle = document.head.querySelectorAll("style")[0].textContent;

  // remove `.__fb-light-mode`
  const patternLightMode = /\.__fb-light-mode\s*{[^}]*}/g;
  const cssWithoutLightMode = fbStyle.replace(patternLightMode, "");

  // add `.__fb-light-mode`, with same data as in `.__fb-dark-mode`
  const pattern2 = /\.(__fb-dark-mode)\s*{([^}]*)}/g;
  const cssWithModifiedLightMode = cssWithoutLightMode.replace(
    pattern2,
    (match, _, p2) => {
      return match + "\n.__fb-light-mode {" + p2 + "}";
    }
  );

  document.head.querySelectorAll("style")[0].textContent =
    cssWithModifiedLightMode;
})();
