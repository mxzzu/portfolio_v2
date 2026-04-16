interface SeparatorProp {
  children?: React.ReactNode;
  className?: string;
  small?: boolean;
  footer?: boolean;
}

export default function Separator({ children, className, small, footer }: SeparatorProp) {
  return (
    <div
      className={`${className} ${small ? "w-250" : "w-full"} border-b border-t-2 ${footer ? "border-white" : "border-black"} ${children ? "p-(--padding)" : "h-(--padding)"}`}
    >
      {children}
    </div>
  );
}
