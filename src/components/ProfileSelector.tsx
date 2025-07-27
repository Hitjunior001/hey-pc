import { useState } from "react";


interface Profile {
  key: string;
  color: string;
  label: string;
}

const profiles: Profile[] = [
  { key: "casual", color: "green", label: "Casual" },
  { key: "professional", color: "blue", label: "Profissional" },
  { key: "enthusiastic", color: "pink", label: "Entusiasta" },
];

const ProfileSelector = () => {
  const [selected, setSelected] = useState<Profile | null>(null);

  return (
    <>
      <section className="relative bg-zinc-900 py-32 px-4 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 opacity-90"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            Escolha seu <span className="text-green-500">Perfil</span> para uma melhor experiência
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
              Ao selecionar o seu perfil, oferecemos sugestões específicas para suas necessidades:
              seja para uso cotidiano, demandas profissionais ou máquinas entusiastas de alta performance.
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 px-4 w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col w-full max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Qual perfil define você?</h2>
            <div className="flex flex-col gap-4">
              {profiles.map((profile) => (
                <div
                  key={profile.key}
                  onClick={() => setSelected(profile)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-lg border transition cursor-pointer ${selected === profile
                      ? `bg-${profile.color}-600 text-white border-${profile.color}-600`
                      : "bg-zinc-900 text-white border-gray-700"
                    }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${selected === profile ? `bg-${profile.color}-300` : "bg-gray-500"
                      }`}
                  ></div>
                  <span className="text-lg font-medium">{profile.label}</span>
                </div>
              ))}
            </div>
          </div>
        {selected && (
        <section className="">
          <div className="max-w-6xl mx-auto text-white text-center">
            <h2 className="text-3xl font-bold mb-8">
              Escolha o tipo de <span className="capitalize">{selected.label}</span> que mais combina com você
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selected.key === "casual" && (
                <>
                  <Card title="Uso Doméstico" desc="Ideal para navegação, estudos e tarefas simples." />
                  <Card title="Multimídia" desc="Para assistir vídeos, ouvir músicas e redes sociais." />
                  <Card title="Básico Gamer" desc="Jogos leves com bom desempenho em resoluções médias." />
                </>
              )}

              {selected.key === "professional" && (
                <>
                  <Card title="Design & Edição" desc="Ideal para Photoshop, Illustrator, Premiere e afins." />
                  <Card title="Engenharia & Modelagem" desc="Alta performance para AutoCAD, SolidWorks, Revit." />
                  <Card title="Desenvolvedor" desc="Perfeito para programação, bancos de dados e IA." />
                </>
              )}

              {selected.key === "enthusiastic" && (
                <>
                  <Card title="Gamer Hardcore" desc="Desempenho máximo para jogos em alta resolução." />
                  <Card title="Visual" desc="Foco em estética, RGB, e personalização extrema." />
                </>
              )}
            </div>
          </div>
        </section>
      )}
        </div>
        
      </section>
    </>
  );
};

const Card = ({ title, desc }: { title: string; desc: string }) => (
  <div className="bg-zinc-900 border border-gray-700 rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

export default ProfileSelector;
