export default function Button({ label, onClick, className, size }: any) {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{ width: size == "xl" ? "100%" : "50px" }}
    >
      {label}
    </button>
  );
}
