import Link from "next/link";

export const questions = [
  {
    id: "1",
    name: "Nelly",
    question: "Where will Voyage de la Lune hackathon take place?",
    answer: "xxx HQ, XXX address",
  },
  {
    id: "2",
    name: "John",
    question: "The venue is kind of far away. Can you pay for my gas?",
    answer: (
      <>
        <Link
          href="https://gas.hackclub.com/"
          title="HackClub gas fund link"
          className="underline text-accent font-bold"
        >
          HackClub gas fund
        </Link>{" "}
        can pay for your gas! If you are from out of state, we are also
        providing travel stipends
      </>
    ),
  },
  {
    id: "3",
    name: "Linda",
    question: "Do I need experience to participate?",
    answer:
      "Voyage de la Lune is for hackers of all skill levels. We’ll learn more together at workshops! If you want to start learning from home, YouTube and these workshops are awesome. If nothing else, you can learn surprisingly fast at a hackathon :)",
  },
  {
    id: "4",
    name: "Barbra",
    question: "Am I eligible to apply?",
    answer: (
      <>
        As long as you are in High School you are free to apply! If you have any
        questions about your situation, email us at{" "}
        <Link
          href="mailto://team@voyagehacks.com"
          className="underline text-purple font-bold"
        >
          team@voyagehacks.com
        </Link>
      </>
    ),
  },
];

export function RenderQuestion({ question }) {
  return (
    <>
      <p className="max-w-screen-sm w-full">
        {question.name} asks:{" "}
        <span className="font-bold">{question.question}</span>
      </p>
      <div className="flex justify-end py-6">
        <p className="max-w-screen-sm w-full ml-auto">We say: “{question.answer}”</p>
      </div>
    </>
  );
}
