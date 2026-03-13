import "./input.css";

export interface InputProps {
  size?: "small" | "medium" | "large";
  label?: string;
  placeholder?: string;
  type?: string;
  onChange?: () => void;
}

export const Input = ({
  size = "medium",
  label,
  type = "text",
  placeholder = "text ...",
  onChange,
}: InputProps) => {
  function widthSelect() {
    return size == "small" ? "40px" : size == "medium" ? "60px" : "100px";
  }
  return (
    <div>
      {label && (
        <label className="custom-label" htmlFor={label}>
          {label}
        </label>
      )}
      <input
        className="custom-input"
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        style={{ width: widthSelect() }}
      />
    </div>
  );
};
