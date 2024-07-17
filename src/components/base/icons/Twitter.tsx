import { TIcon } from "../../../types/icon";

const TwitterIcon = ({ color = "currentColor", width = 20, height = 16 }: TIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.633 3.96252C17.646 4.13684 17.646 4.31017 17.646 4.48349C17.646 9.78777 13.593 15.8999 6.186 15.8999C3.904 15.8999 1.784 15.2415 0 14.0979C0.324 14.1348 0.636 14.1477 0.973 14.1477C2.78599 14.1521 4.54765 13.5482 5.974 12.4334C5.13342 12.4183 4.31858 12.142 3.64324 11.6433C2.9679 11.1445 2.46579 10.4481 2.207 9.65131C2.456 9.68816 2.706 9.71307 2.968 9.71307C3.329 9.71307 3.692 9.66326 4.029 9.5766C3.11676 9.39313 2.29647 8.90059 1.70762 8.18273C1.11876 7.46487 0.797693 6.566 0.799 5.63898V5.58917C1.336 5.88701 1.959 6.07328 2.619 6.09818C2.06609 5.7322 1.61272 5.23558 1.29934 4.65262C0.98596 4.06966 0.822313 3.4185 0.823 2.75723C0.823 2.01214 1.022 1.32881 1.371 0.733137C2.38314 1.97331 3.6455 2.98789 5.07634 3.71116C6.50717 4.43444 8.07456 4.85027 9.677 4.93174C9.615 4.63291 9.577 4.32312 9.577 4.01233C9.57674 3.48535 9.68075 2.96348 9.88308 2.47657C10.0854 1.98965 10.3821 1.54723 10.7562 1.1746C11.1303 0.801969 11.5744 0.506433 12.0632 0.304888C12.5521 0.103342 13.076 -0.000261358 13.605 4.95129e-07C14.765 4.95129e-07 15.812 0.48411 16.548 1.26705C17.4498 1.09335 18.3145 0.765433 19.104 0.297837C18.8034 1.22503 18.1738 2.01125 17.333 2.5092C18.1328 2.41833 18.9144 2.20883 19.652 1.88763C19.1011 2.6876 18.4185 3.38911 17.633 3.96252Z"
        fill={color}
      />
    </svg>
  );
};

export default TwitterIcon;