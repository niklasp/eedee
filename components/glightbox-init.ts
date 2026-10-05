// Loaded on demand by GalleryWrapper, only on pages with `.glightbox` links.
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

export function initGlightbox() {
  return GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
  });
}
