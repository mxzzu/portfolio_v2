export default function Separator({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`w-full border-b border-t-2 border-black ${children ? "p-(--padding)" : "h-(--padding)"}`}
    >
      {children}
    </div>
  );
}
