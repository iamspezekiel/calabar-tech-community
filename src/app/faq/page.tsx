import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the Calabar Tech Community?",
    answer: "The Calabar Tech Community is a group of individuals and organizations in Calabar, Nigeria who are passionate about technology and its potential to transform society. The community provides a platform for tech enthusiasts, entrepreneurs, developers, and investors to connect, share ideas, and collaborate on projects.",
  },
  {
    question: "Who can join the Calabar Tech Community?",
    answer: "Anyone who is interested in technology and innovation can join the Calabar Tech Community. This includes tech enthusiasts, entrepreneurs, developers, investors, and students.",
  },
  {
    question: "How do I join the Calabar Tech Community?",
    answer: "You can join the Calabar Tech Community by visiting their website or social media pages, and following the instructions to become a member. You may be required to fill out a membership form or attend a community event to become a member.",
  },
  {
    question: "What are the benefits of joining the Calabar Tech Community?",
    answer: "By joining the Calabar Tech Community, you will have the opportunity to network with like-minded individuals, attend events and workshops, learn new skills, collaborate on projects, and stay up-to-date with the latest trends and developments in the tech industry.",
  },
  {
    question: "What kind of events does the Calabar Tech Community organize?",
    answer: "The Calabar Tech Community organizes a variety of events, including hackathons, workshops, meetups, and conferences. These events cover topics such as programming, entrepreneurship, data science, artificial intelligence, and blockchain.",
  },
  {
    question: "How can I get involved in organizing events for the Calabar Tech Community?",
    answer: "If you are interested in organizing events for the Calabar Tech Community, you can reach out to the community leaders or attend a community meeting to express your interest. The community is always looking for enthusiastic and dedicated individuals to help organize events and activities.",
  },
  {
    question: "Is the Calabar Tech Community only for tech professionals?",
    answer: "No, the Calabar Tech Community is open to anyone who is interested in technology and innovation. Whether you are a student, a professional in a non-tech field, or simply someone who is passionate about technology, you are welcome to join the community.",
  },
  {
    question: "Does the Calabar Tech Community offer any training or mentorship programs?",
    answer: "Yes, the Calabar Tech Community offers training and mentorship programs for its members. These programs are designed to help members develop their skills, learn new technologies, and advance their careers in the tech industry.",
  },
  {
    question: "How can I stay updated on the activities of the Calabar Tech Community?",
    answer: "You can stay updated on the activities of the Calabar Tech Community by following their social media pages, subscribing to their newsletter, attending community events, or joining their online discussion forums.",
  },
];


export default function FaqPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <section className="text-center mb-12">
        <div className="inline-block bg-primary/10 p-4 rounded-full">
            <HelpCircle className="h-12 w-12 text-primary" />
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold font-headline text-primary">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
        </p>
      </section>

      <section>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}