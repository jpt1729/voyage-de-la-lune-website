import Link from "next/link";

export const questions = [
  {
    id: "1",
    name: "Nelly",
    question: "Where will Voyage de la Lune hackathon take place?",
    answer: "We will release the location soon 👀",
  },
  {
    id: "2",
    name: "John",
    question:
      "Houston is pretty big and gas is expensive. Can you pay for my gas?",
    answer: (
      <>
        <Link
          href="https://gas.hackclub.com/"
          title="HackClub gas fund link"
          className="underline text-accent font-bold"
        >
          HackClub gas fund
        </Link>{" "}
        can reimburse your gas costs!
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
  {
    id: "5",
    name: "Alex",
    question: "Do I need a team?",
    answer: (
      <>
        You can always form a team at the event itself, or you can come up with
        teams beforehand. You can get a head start by joining our{" "}
        <Link
          href="https://hackclub.slack.com/archives/C074XH3KAMN"
          title="Join Hack Club's Slack"
          className="underline text-purple font-bold"
        >Hack Club Slack channel</Link> 👀
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
        <p className="max-w-screen-sm w-full ml-auto">
          We say: “{question.answer}”
        </p>
      </div>
    </>
  );
}
