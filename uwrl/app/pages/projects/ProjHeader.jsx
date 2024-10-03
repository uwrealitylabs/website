import BackButton from "@/app/components/BackButton";
export default function ProjHeader({ img, title }) {
  return (
    <div>
      <BackButton />
      <header className="bg-bck-white p-6 border-solid border-bck-grey border-2 rounded-xl flex flex-col gap-6">
        <h1 className="font-neraphic text-h2">{title}</h1>
        <img src={img} className="aspect-16/7 object-cover" />
      </header>
    </div>
  );
}
