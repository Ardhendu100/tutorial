import React from "react";

const sizeClasses = {
  txtPangeaAfrikanTrialRegular18: "font-normal font-pangeaafrikantrial",
  txtPangeaAfrikanTrialMedium36: "font-medium font-pangeaafrikantrial",
  txtPangeaAfrikanTrialMedium48: "font-medium font-pangeaafrikantrial",
  txtPangeaAfrikanTrialRegular16: "font-normal font-pangeaafrikantrial",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtPangeaAfrikanTrialBold30: "font-bold font-pangeaafrikantrial",
  txtInterMedium12: "font-inter font-medium",
  txtPangeaAfrikanTrialMedium34: "font-medium font-pangeaafrikantrial",
  txtInterMedium16: "font-inter font-medium",
  txtPangeaAfrikanTrialMedium24: "font-medium font-pangeaafrikantrial",
  txtPangeaAfrikanTrialSemiBold24: "font-pangeaafrikantrial font-semibold",
  txtPangeaAfrikanTrialMedium24Gray90001: "font-medium font-pangeaafrikantrial",
  txtPangeaAfrikanTrialMedium36GreenA700: "font-medium font-pangeaafrikantrial",
  txtPangeaAfrikanTrialSemiBold64: "font-pangeaafrikantrial font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtPangeaAfrikanTrialMedium48WhiteA700: "font-medium font-pangeaafrikantrial",
  txtPangeaAfrikanTrialSemiBold24Gray90001:
    "font-pangeaafrikantrial font-semibold",
  txtPangeaAfrikanTrialSemiBold24Gray900:
    "font-pangeaafrikantrial font-semibold",
  txtPangeaAfrikanTrialSemiBold24WhiteA700:
    "font-pangeaafrikantrial font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
