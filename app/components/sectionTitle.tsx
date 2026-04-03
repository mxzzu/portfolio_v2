import Separator from "./separator";

interface SectionTitleProp {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProp) {
  return (
    <div className="flex flex-col gap-(--spacing-gap-8)">
      <h3>{title}</h3>
      <Separator />
    </div>
  );
}
