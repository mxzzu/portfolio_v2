import Link from "next/link";

interface SocialButtonProp {
  label: string;
  href: string;
}

export default function SocialButton({ label, href }: SocialButtonProp) {
  return (
    <Link href={href} className="flex items-start py-(--padding) px-(--padding-double) bg-white text-black cursor-pointer select-none">
        <span className="uppercase text-(length:--h5-size)">{label}</span>
    </Link>
  );
}