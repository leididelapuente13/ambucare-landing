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
                            <p className="text-gray-700 text-sm text-left leading-relaxed tracking-normal">{answer}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>

    )
}