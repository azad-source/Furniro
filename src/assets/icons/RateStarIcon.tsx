interface IProps {
  ratio: number;
  className?: string;
}

export const RateStarIcon: React.FC<IProps> = ({ ratio, className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient
          id={`starGradient${ratio}`}
          gradientTransform="rotate(0)"
        >
          <stop offset={`${ratio}%`} stop-color="#ffc700" />
          <stop stop-color="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z"
        fill={`url('#starGradient${ratio}')`}
        // stroke="#ddd"
      />
    </svg>
  );
};
