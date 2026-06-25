import LeftContent from "./LeftContent";
import HorizontalGallery from "./HorizontalGallery";

const ImagesAndContent = () => {
  return (
    <div>
      <section className="bg-[#f8f7f4] py-3 md:py-8 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* On mobile/tablet: stack vertically. On desktop: side-by-side. */}
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-16">
            <LeftContent />

            <div className="w-full min-w-0  overflow-hidden">
              <HorizontalGallery />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImagesAndContent;