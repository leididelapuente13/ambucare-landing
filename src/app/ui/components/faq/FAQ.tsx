import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/data/faq"

export const FAQ = () => {
    return (
        <Accordion type="single" collapsible>
            {
                faqs.map(({answer, question}) => (
                    <AccordionItem key={question} value={question}>
                        <AccordionTrigger>{question}</AccordionTrigger>
                        <AccordionContent className="text-justify tracking-tighter">
                            {answer}
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>

    )
}