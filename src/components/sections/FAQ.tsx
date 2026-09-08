import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion/FadeIn";
import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <section className="section-space bg-white">
      <div className="container-narrow">
        <FadeIn>
          <h2 className="heading-section mb-8 text-pine">
            השאלות שעולות כמעט בכל שיחה
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <Accordion
            type="single"
            collapsible
            className="rounded-[20px] border border-wood/15 bg-white px-5 shadow-soft md:px-7"
          >
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
