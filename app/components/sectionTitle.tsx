import Separator from "./separator";

interface SectionTitleProp {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProp) {
  return (
    <div className="flex flex-col gap-(--spacing-gap-8)">
      <h3>{title}</h3>

      <Separator>
        {subtitle && <h3 className="quotes">{subtitle}</h3>}
      </Separator>
    </div>
  );
}
