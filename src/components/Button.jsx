import PropTypes from "prop-types";

function Button({
  children,
  disabled,
  size = "md",
  variant = "default",
  ...rest
}) {
  const baseStyle =
    "w-full px-6 py-2 text-base font-bold leading-normal rounded-full";

  const sizeStyles = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };

  const variantStyles = {
    secondary:
      "bg-blue-400 text-white px-12 py-4 rounded-full font-medium transition duration-300 ease-in-out hover:bg-blue-500",
    primary:
      "bg-blue-400 text-white rounded-full py-2 px-8 shadow-md font-medium",
    default:
      "shadow-button rounded-full bg-neutral-50 text-neutral-1000 backdrop-blur-xl hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-25",
    outline:
      "rounded-5xl border border-solid border-button-stroke shadow-3xl backdrop-blur-23.66 not-italic text-twitter-default",
  };

  const disabledStyles = disabled ? "cursor-not-allowed opacity-50" : "";

  const classes = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles}`;

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "default", "outline"]),
};

export default Button;
