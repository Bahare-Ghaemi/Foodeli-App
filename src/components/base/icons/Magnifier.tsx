import { TIcon } from "../../../types/icon";

const MagnifierIcon = ({color = "currentColor", size = 32}: TIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.2432 24.3499L23.08 21.2C24.5427 19.3366 25.3363 17.0355 25.3333 14.6667C25.3333 12.557 24.7077 10.4947 23.5357 8.74059C22.3636 6.98646 20.6977 5.61929 18.7486 4.81196C16.7995 4.00462 14.6548 3.79339 12.5857 4.20496C10.5166 4.61654 8.61596 5.63244 7.1242 7.1242C5.63244 8.61596 4.61654 10.5166 4.20496 12.5857C3.79339 14.6548 4.00462 16.7995 4.81196 18.7486C5.61929 20.6977 6.98646 22.3636 8.74059 23.5357C10.4947 24.7077 12.557 25.3333 14.6667 25.3333C17.0355 25.3363 19.3366 24.5427 21.2 23.08L24.3499 26.2432C24.4738 26.3682 24.6213 26.4674 24.7838 26.535C24.9462 26.6027 25.1205 26.6376 25.2965 26.6376C25.4725 26.6376 25.6468 26.6027 25.8093 26.535C25.9718 26.4674 26.1192 26.3682 26.2432 26.2432C26.3682 26.1192 26.4674 25.9718 26.535 25.8093C26.6027 25.6468 26.6376 25.4725 26.6376 25.2965C26.6376 25.1205 26.6027 24.9462 26.535 24.7838C26.4674 24.6213 26.3682 24.4738 26.2432 24.3499ZM6.66667 14.6667C6.66667 13.0844 7.13586 11.5377 8.01491 10.2221C8.89397 8.90652 10.1434 7.88114 11.6052 7.27563C13.067 6.67013 14.6755 6.51171 16.2274 6.82039C17.7792 7.12907 19.2047 7.891 20.3235 9.00982C21.4423 10.1286 22.2043 11.5541 22.513 13.1059C22.8216 14.6578 22.6632 16.2663 22.0577 17.7281C21.4522 19.1899 20.4268 20.4394 19.1112 21.3184C17.7956 22.1975 16.2489 22.6667 14.6667 22.6667C12.5449 22.6667 10.5101 21.8238 9.00982 20.3235C7.50953 18.8232 6.66667 16.7884 6.66667 14.6667Z"
        fill={color}
      />
    </svg>
  );
};

export default MagnifierIcon;