import Link from "next/link";

import { Button } from "../button/Button";
import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";

const Banner = () => (
  <div className="top-[30rem] md:top-[64rem] relative">
    <Section>
      <CTABanner
        title="Saatnya bergabung dengan Ratusan koperasi lain"
        subtitle="Start your Free Trial."
        button={
          <Link href="">
            <a>
              <Button>Get Started</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </div>
);

export { Banner };
