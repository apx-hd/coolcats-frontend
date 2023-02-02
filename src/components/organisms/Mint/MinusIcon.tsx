export default function PlusIcon(props: { fill: string | undefined }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 13H5V11H19V13Z" fill={props.fill} />
    </svg>
  );
}
