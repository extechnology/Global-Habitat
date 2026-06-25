import LeftContent from "./LeftContent";
import HorizontalGallery from "./HorizontalGallery";

const ImagesAndContent = () => {
  return (
    <div>
      <section className="bg-[#f8f7f4] py-24">
        <div className="mx-auto flex max-w-7xl gap-16 px-6">
          <LeftContent />

          <div className="flex-1 overflow-hidden">
            <HorizontalGallery />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ImagesAndContent