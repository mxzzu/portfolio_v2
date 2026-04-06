import Image from "next/image";
import SectionTitle from "@/app/components/sectionTitle";

export default function Photo() {
  return (
    <section>
      <SectionTitle title="have you seen him?" subtitle="“A definitive portrait of the man behind the headlines.”" />

      <Image src="/profile_pic.png" alt="mazzu logo" width={226} height={225} />
    </section>
  );
}
