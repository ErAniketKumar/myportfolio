let _scrollY = 0;

function disableScroll() {
  // Save the current scroll position
  _scrollY = window.scrollY || window.pageYOffset || 0;

  // Use a fixed position on the body to prevent background scroll while
  // preserving the current scroll position. This approach avoids using
  // 100vh which causes issues on mobile browsers (address bar changes).
  document.body.style.position = "fixed";
  document.body.style.top = `-${_scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  // Prevent horizontal scroll / visual gaps on mobile
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  // Remove the fixed styles and restore scroll position
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.overflow = "";

  // Restore the scroll position we saved earlier
  window.scrollTo(0, _scrollY || 0);
  _scrollY = 0;
}

export { disableScroll, enableScroll };
