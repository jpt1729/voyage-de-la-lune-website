import { motion } from "framer-motion";

const variants = {
  opened: {
    rotateY: -180,
  },
  closed: {
    rotateY: 0,
  },
};

export default function MenuButton({ isOpen, ...props }) {
  return (
    <motion.button {...props} style={{ perspective: 1000 }}>
      <motion.div
        className="relative origin-center w-6 aspect-square"
        whileHover={
          !isOpen && {
            rotateY: -12,
          }
        }
        animate={isOpen ? "opened" : "closed"}
        variants={variants}
        transition={{
          duration: 0.650,
          ease: "easeOut",
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          className="absolute origin-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <g clipPath="url(#clip0_136_2)">
            <path
              d="M8.9999 17.5497C13.7218 17.5497 17.5496 13.7219 17.5496 9.00002C17.5496 4.27815 13.7218 0.450317 8.9999 0.450317C4.27803 0.450317 0.450195 4.27815 0.450195 9.00002C0.450195 13.7219 4.27803 17.5497 8.9999 17.5497Z"
              stroke="black"
              strokeLinejoin="round"
            />
            <path
              d="M12.215 13.7222C11.5455 15.9527 10.4138 17.4417 9.14093 17.5467H9.00584C7.38776 17.5467 6.00384 15.3313 5.43045 12.1942C5.24052 11.1421 5.14508 10.0751 5.14526 9.00605C5.14526 8.47469 5.16628 7.94934 5.21131 7.44501"
              stroke="black"
              strokeLinejoin="round"
            />
            <path
              d="M12.7974 10.507C12.8364 10.0237 12.8574 9.52537 12.8574 9.00602C12.8587 7.93516 12.7653 6.86628 12.5782 5.81189C12.0078 2.66579 10.6209 0.450317 9.00582 0.450317H8.87374C7.59789 0.549383 6.47214 2.00836 5.8147 4.19982"
              stroke="black"
              strokeLinejoin="round"
            />
            <path
              d="M11.0262 12.4163C10.3551 12.4858 9.68067 12.5199 9.0059 12.5184C7.80677 12.5214 6.60991 12.4139 5.43052 12.1972C2.48855 11.6388 0.450195 10.417 0.450195 9.00603C0.450195 8.97001 0.450195 8.93398 0.450195 8.90096C0.531249 7.79922 1.83412 6.82658 3.82144 6.19916"
              stroke="black"
              strokeLinejoin="round"
            />
            <path
              d="M14.2563 11.7739C16.1986 11.1525 17.4685 10.1918 17.5585 9.10812C17.5585 9.06909 17.5585 9.03607 17.5585 9.00005C17.5585 7.5831 15.5232 6.36129 12.5872 5.80592C11.406 5.58759 10.207 5.48006 9.00584 5.4847C8.35626 5.48317 7.70701 5.51423 7.06055 5.57776"
              stroke="black"
              strokeLinejoin="round"
            />
            <path
              d="M9 0.450317V17.5497"
              stroke="black"
              strokeLinejoin="round"
            />
            <path
              d="M5.42154 7.45397C6.33176 7.45397 7.06963 6.71609 7.06963 5.80587C7.06963 4.89565 6.33176 4.15778 5.42154 4.15778C4.51132 4.15778 3.77344 4.89565 3.77344 5.80587C3.77344 6.71609 4.51132 7.45397 5.42154 7.45397Z"
              stroke="black"
              strokeLinejoin="round"
            />
            <path
              d="M12.6474 13.7792C13.5576 13.7792 14.2955 13.0414 14.2955 12.1311C14.2955 11.2209 13.5576 10.483 12.6474 10.483C11.7371 10.483 10.9993 11.2209 10.9993 12.1311C10.9993 13.0414 11.7371 13.7792 12.6474 13.7792Z"
              stroke="black"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_136_2">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          className="absolute origin-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <g clipPath="url(#clip0_136_2)">
            <path
              d="M8.9999 17.5497C13.7218 17.5497 17.5496 13.7219 17.5496 9.00002C17.5496 4.27815 13.7218 0.450317 8.9999 0.450317C4.27803 0.450317 0.450195 4.27815 0.450195 9.00002C0.450195 13.7219 4.27803 17.5497 8.9999 17.5497Z"
              className="stroke-accent"
              strokeLinejoin="round"
            />
            <path
              d="M12.215 13.7222C11.5455 15.9527 10.4138 17.4417 9.14093 17.5467H9.00584C7.38776 17.5467 6.00384 15.3313 5.43045 12.1942C5.24052 11.1421 5.14508 10.0751 5.14526 9.00605C5.14526 8.47469 5.16628 7.94934 5.21131 7.44501"
              className="stroke-accent"
              strokeLinejoin="round"
            />
            <path
              d="M12.7974 10.507C12.8364 10.0237 12.8574 9.52537 12.8574 9.00602C12.8587 7.93516 12.7653 6.86628 12.5782 5.81189C12.0078 2.66579 10.6209 0.450317 9.00582 0.450317H8.87374C7.59789 0.549383 6.47214 2.00836 5.8147 4.19982"
              className="stroke-accent"
              strokeLinejoin="round"
            />
            <path
              d="M11.0262 12.4163C10.3551 12.4858 9.68067 12.5199 9.0059 12.5184C7.80677 12.5214 6.60991 12.4139 5.43052 12.1972C2.48855 11.6388 0.450195 10.417 0.450195 9.00603C0.450195 8.97001 0.450195 8.93398 0.450195 8.90096C0.531249 7.79922 1.83412 6.82658 3.82144 6.19916"
              className="stroke-accent"
              strokeLinejoin="round"
            />
            <path
              d="M14.2563 11.7739C16.1986 11.1525 17.4685 10.1918 17.5585 9.10812C17.5585 9.06909 17.5585 9.03607 17.5585 9.00005C17.5585 7.5831 15.5232 6.36129 12.5872 5.80592C11.406 5.58759 10.207 5.48006 9.00584 5.4847C8.35626 5.48317 7.70701 5.51423 7.06055 5.57776"
              className="stroke-accent"
              strokeLinejoin="round"
            />
            <path
              d="M9 0.450317V17.5497"
              className="stroke-accent"
              strokeLinejoin="round"
            />
            <path
              d="M5.42154 7.45397C6.33176 7.45397 7.06963 6.71609 7.06963 5.80587C7.06963 4.89565 6.33176 4.15778 5.42154 4.15778C4.51132 4.15778 3.77344 4.89565 3.77344 5.80587C3.77344 6.71609 4.51132 7.45397 5.42154 7.45397Z"
              className="stroke-accent"
              strokeLinejoin="round"
            />
            <path
              d="M12.6474 13.7792C13.5576 13.7792 14.2955 13.0414 14.2955 12.1311C14.2955 11.2209 13.5576 10.483 12.6474 10.483C11.7371 10.483 10.9993 11.2209 10.9993 12.1311C10.9993 13.0414 11.7371 13.7792 12.6474 13.7792Z"
              className="stroke-accent"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_136_2">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </motion.div>
    </motion.button>
  );
}
