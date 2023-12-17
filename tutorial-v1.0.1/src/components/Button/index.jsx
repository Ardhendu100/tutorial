import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-[28px]",
};
const variants = {
  outline: {
    green_A700: "border border-green-A700 border-solid text-green-A700",
    white_A700: "border border-solid border-white-A700 text-white-A700",
  },
  fill: {
    gray_100: "bg-gray-100",
    green_A700: "bg-green-A700 text-white-A700",
    green_100: "bg-green-100 text-green-A700",
    white_A700_4c: "bg-white-A700_4c",
  },
};
const sizes = { xs: "p-[5px]", sm: "px-1.5 py-2", md: "p-2.5", lg: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "lg",
  variant = "outline",
  color = "green_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "green_A700",
    "white_A700",
    "gray_100",
    "green_100",
    "white_A700_4c",
  ]),
};

export { Button };
