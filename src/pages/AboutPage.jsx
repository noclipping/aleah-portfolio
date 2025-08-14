import headshot from "../assets/headshot.jpg";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto pt-24 px-6 md:px-10">
      <div className="relative">
        {/* Headshot - positioned to float left on desktop */}
        <div className="float-left mr-8 mb-6 w-80 md:w-96">
          <div className="rounded-lg aspect-square overflow-hidden border border-neutral-700">
            <img
              src={headshot}
              alt="Aleah Slish - Artist Headshot"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bio text - will wrap around the image */}
        <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
          <p>
            Aleah Slish is a multidisciplinary printmaker based in Pennsylvania,
            working primarily with cyanotypes and relief processes. Raised in
            Honesdale, Aleah's early passion for art was nurtured in school
            studios and through the support of her teachers and family,
            participating in everything art related that she could.
          </p>

          <p>
            Though she began her post-graduate studies at Bloomsburg University
            in psychology and sociology, a sculpture class taken for a general
            education requirement reignited her creative drive. Encouraged by
            her mother and boss at the time, Aleah took the leap and changed her
            major to Art Studio with a minor in Art History. There, she found a
            lifelong mentor in printmaker Chad Andrews, whose insight and
            guidance continue to shape her work today.
          </p>

          <p>
            Identifying more closely with being a process artist, her themes
            develop without planning and instead through process, as Aleah
            allows herself to enjoy experimentation first then find inspiration
            from her results. Aleah's practice spans from cyanotype, mezzotint,
            silkscreen, copper etching, linocut, to gelli plate printing. She
            has exhibited in Bloomsburg University's senior exhibition and two
            collaborative shows at ArtWorks Gallery. She also participated in a
            performative exhibition, where she actively printed Donald De Lue's
            restored copper plates at Bloomsburg University's art gallery for a
            project honoring the sculptor.
          </p>

          {/* Contact information */}
          <div className="pt-6 border-t border-neutral-700 mt-8">
            <h2
              className="text-2xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Italiana', serif" }}
            >
              Contact
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 text-lg">
              <a
                href="mailto:aleah.slish@gmail.com"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                aleahslish@gmail.com
              </a>
              <a
                href="https://www.instagram.com/artbyaleahslish"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @artbyaleahslish
              </a>
            </div>
          </div>
        </div>

        {/* Clear float */}
        <div className="clear-both"></div>
      </div>
    </div>
  );
}
