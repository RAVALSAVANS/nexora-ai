function ArrowTopRightIcon({
  width = 18,
  height = 18,
  color = "#4F46E5",
  className = "",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.875 4.125V5.625H11.3175L4.125 12.8175L5.1825 13.875L12.375 6.6825V13.125H13.875V4.125H4.875Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowTopRightIcon;