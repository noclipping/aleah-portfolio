import headshot from "../assets/headshot.jpg";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto pt-24 px-6 md:px-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">About</h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Headshot */}
        <div className="order-2 md:order-1">
          <div className="rounded-lg aspect-square overflow-hidden border border-neutral-700">
            <img
              src={headshot}
              alt="Aleah Slish - Artist Headshot"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bio text */}
        <div className="order-1 md:order-2 space-y-6">
          <p className="text-lg text-neutral-300 leading-relaxed">
            Aleah Slish is a multidisciplinary printmaker based in Pennsylvania,
            working primarily with cyanotypes and relief processes. Raised in
            Honesdale, Aleah's early passion for art was nurtured in school
            studios and through the support of her teachers and family,
            participating in everything art related that she could.
          </p>

          <p className="text-lg text-neutral-300 leading-relaxed">
            Though she began her post-graduate studies at Bloomsburg University
            in psychology and sociology, a sculpture class taken for a general
            education requirement reignited her creative drive. Encouraged by
            her mother and boss at the time, Aleah took the leap and changed her
            major to Art Studio with a minor in Art History. There, she found a
            lifelong mentor in printmaker Chad Andrews, whose insight and
            guidance continue to shape her work today.
          </p>

          <p className="text-lg text-neutral-300 leading-relaxed">
            Identifying more closely with being a process artist, her themes
            develop without planning and instead through process, as Aleah
            allows herself to enjoy experimentation first then find inspiration
            from her results. Aleah's practice spans from cyanotype, mezzotint,
            silkscreen, copper etching, linocut, to gelli plate printing.
          </p>

          <p className="text-lg text-neutral-300 leading-relaxed">
            She has exhibited in Bloomsburg University's senior exhibition and
            two collaborative shows at ArtWorks Gallery. She also participated
            in a performative exhibition, where she actively printed Donald De
            Lue's restored copper plates at Bloomsburg University's art gallery
            for a project honoring the sculptor.
          </p>
        </div>
      </div>
    </div>
  );
}
