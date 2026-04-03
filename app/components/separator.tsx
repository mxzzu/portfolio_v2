interface SeparatorProp {
  children?: React.ReactNode;
}

export default function Separator({ children }: SeparatorProp) {
  return (
    <div
      className={`w-full border-b border-t-2 border-black ${children ? "p-(--padding)" : "h-(--padding)"}`}
    >
      {children}
    </div>
  );
}
