"use strict";

const dialog = document.querySelector("#figure-dialog");
const expandedFigure = document.querySelector("#expanded-figure");
const zoomButton = document.querySelector("#zoom-figure");
const dialogTitle = document.querySelector("#figure-dialog-title");
const figureScroller = document.querySelector(".figure-dialog-scroll");

function resetZoom() {
  dialog.classList.remove("is-zoomed");
  zoomButton.textContent = "Zoom in";
  zoomButton.setAttribute("aria-pressed", "false");
  figureScroller.scrollTo(0, 0);
}

if (typeof dialog.showModal === "function") {
  document.querySelectorAll("[data-figure]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      expandedFigure.src = link.href;
      expandedFigure.alt = link.querySelector("img").alt;
      dialogTitle.textContent = link.dataset.title;
      resetZoom();
      dialog.showModal();
      document.body.classList.add("diagram-open");
    });
  });
}
document.querySelector("#close-figure").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("diagram-open");
  resetZoom();
});
zoomButton.addEventListener("click", () => {
  const zoomed = dialog.classList.toggle("is-zoomed");
  zoomButton.textContent = zoomed ? "Fit to screen" : "Zoom in";
  zoomButton.setAttribute("aria-pressed", String(zoomed));
  figureScroller.scrollTo(0, 0);
});
