import { InteractiveBentoGallery } from "./interactive-bento-gallery";

export function GallerySection() {
  return (
    <section className="py-24" id="work">
      <div className="max-w-6xl mx-auto px-6">
        <InteractiveBentoGallery />
      </div>
    </section>
  );
}
