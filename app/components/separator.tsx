interface SeparatorProp {
  children?: React.ReactNode;
  className?: string;
}

export default function Separator({ children, className }: SeparatorProp) {
  return (
    <div
      className={`${className} w-full border-b border-t-2 border-black ${children ? "p-(--padding)" : "h-(--padding)"}`}
    >
      {children}
    </div>
  );
}
