const prefix = "yd-";

const screens = {
  //sm: "640px",
  // => @media (min-width: 640px) { ... }

  md: "768px",
  // => @media (min-width: 768px) { ... } Tablet

  // lg: "1024px",
  // => @media (min-width: 1024px) { ... }

  xl: "1440px",
  // => @media (min-width: 1280px) { ... }

  // "2xl": "1600px",
  // => @media (min-width: 1600px) { ... }
};

const container = {
  padding: {
    DEFAULT: "1rem",
    sm: "1rem",
    md: "0.875rem",
    lg: "0.875rem",
    xl: "3.375rem",
  },
};

const boxShadow = {
  [`${prefix}depth-4`]:
    "0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)",
  [`${prefix}depth-8`]:
    "0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",
  [`${prefix}depth-16`]:
    "0px 1.2px 3.6px rgba(0, 0, 0, 0.1), 0px 4px 14.4px rgba(0, 0, 0, 0.13)",
  [`${prefix}depth-64`]:
    "0px 4.8px 14.4px rgba(0, 0, 0, 0.08), 0px 25.6px 57.6px rgba(0, 0, 0, 0.08)",
};

const colorGeneral = {
  transparent: "transparent",
  current: "currentColor",
  white: "rgba(255, 255, 255, 1)", // #ffffff
  black: "rgba(0, 0, 0, 1)", // #000000
};

const colorTheme = {
  // -- Primary --
  [`${prefix}primary`]: "rgba(252, 175, 23, 1)", // #FCAF17
  [`${prefix}primary-sub`]: "rgba(252, 183, 46, 1)", // #FCB72E
  [`${prefix}primary-hover`]: "rgba(253, 199, 93, 1)", // #FDC75D
  [`${prefix}primary-pressed`]: "rgba(202, 140, 18, 1)", // #CA8C12
  [`${prefix}primary-background`]: "rgba(255, 247, 232, 1)", // #FFF7E8
  [`${prefix}primary-border`]: "rgba(254, 223, 162, 1)", // #FEDFA2
  // -- Secondary --
  [`${prefix}secondary`]: "rgba(42, 42, 134, 1)", // #2A2A86
  [`${prefix}secondary-sub`]: "rgba(63, 63, 146, 1)", // #3F3F92
  [`${prefix}secondary-hover`]: "rgba(106, 106, 170, 1)", // #6A6AAA
  [`${prefix}secondary-pressed`]: "rgba(34, 34, 107, 1)", // #22226B
  [`${prefix}secondary-background`]: "rgba(234, 234, 243, 1)", // #EAEAF3
  [`${prefix}secondary-border`]: "rgba(170, 170, 207, 1)", // #AAAACF
  // -- Background --
  [`${prefix}grey-light-1`]: "rgba(249, 250, 251, 1)", // #F9FAFB
  [`${prefix}grey-light-2`]: "rgba(242, 245, 248, 1)", // #F2F5F8
  [`${prefix}grey-light-3`]: "rgba(230, 234, 240, 1)", // #E6EAF0
  [`${prefix}hover`]: "rgba(249, 250, 251, 1)", // #F9FAFB
  [`${prefix}pressed`]: "rgba(236, 239, 244, 1)", // #ECEFF4
  [`${prefix}selected`]: "rgba(242, 245, 248, 1)", // #F2F5F8
  [`${prefix}disabled`]: "rgba(236, 239, 244, 1)", // #ECEFF4
  [`${prefix}black`]: "rgba(57, 73, 96, 1)", // #394960
  // -- Typography --
  [`${prefix}typo-disabled`]: "rgba(191, 202, 217, 1)", // #BFCAD9
  [`${prefix}typo-placeholder`]: "rgba(159, 176, 199, 1)", // #9FB0C7
  [`${prefix}typo-subtitle`]: "rgba(110, 135, 170, 1)", // #6E87AA
  [`${prefix}typo-body`]: "rgba(75, 98, 129, 1)", // #4B6281
  [`${prefix}typo-label`]: "rgba(57, 73, 96, 1)", // #394960
  [`${prefix}typo-title`]: "rgba(28, 36, 48, 1)", // #1C2430
  // -- Border and Line --
  [`${prefix}line-divider`]: "rgba(236, 239, 244, 1)", // #ECEFF4
  [`${prefix}line-normal`]: "rgba(207, 215, 227, 1)", // #CFD7E3
  [`${prefix}line-hover`]: "rgba(252, 175, 23, 1)", // #FCAF17
  [`${prefix}line-active`]: "rgba(252, 175, 23, 1)", // #FCAF17
  // -- Alert Info --
  [`${prefix}alert-info`]: "rgba(54, 106, 226, 1)", // #366AE2
  [`${prefix}alert-info-sub`]: "rgba(74, 121, 229, 1)", // #4A79E5
  [`${prefix}alert-info-hover`]: "rgba(114, 151, 235, 1)", // #7297EB
  [`${prefix}alert-info-pressed`]: "rgba(43, 85, 181, 1)", // #2B55B5
  [`${prefix}alert-info-background`]: "rgba(235, 240, 252, 1)", // #EBF0FC
  [`${prefix}alert-info-border`]: "rgba(175, 195, 243, 1)", // #AFC3F3
  // -- Alert Success --
  [`${prefix}alert-success`]: "rgba(57, 172, 109, 1)", // #39AC6D
  [`${prefix}alert-success-sub`]: "rgba(77, 180, 124, 1)", // #4DB47C
  [`${prefix}alert-success-hover`]: "rgba(116, 197, 153, 1)", // #74C599
  [`${prefix}alert-success-pressed`]: "rgba(46, 138, 87, 1)", // #2E8A57
  [`${prefix}alert-success-background`]: "rgba(235, 247, 240, 1)", // #EBF7F0
  [`${prefix}alert-success-border`]: "rgba(176, 222, 197, 1)", // #B0DEC5
  // -- Alert Warning --
  [`${prefix}alert-warning`]: "rgba(252, 107, 3, 1)", // #FC6B03
  [`${prefix}alert-warning-sub`]: "rgba(252, 122, 28, 1)", // #FC7A1C
  [`${prefix}alert-warning-hover`]: "rgba(253, 151, 79, 1)", // #FD974F
  [`${prefix}alert-warning-pressed`]: "rgba(202, 86, 2, 1)", // #CA5602
  [`${prefix}alert-warning-background`]: "rgba(255, 240, 230, 1)", // #FFF0E6
  [`${prefix}alert-warning-border`]: "rgba(254, 196, 154, 1)", // #FEC49A
  // -- Alert Error --
  [`${prefix}alert-error`]: "rgba(225, 67, 55, 1)", // #E14337
  [`${prefix}alert-error-sub`]: "rgba(228, 86, 75, 1)", // #E4564B
  [`${prefix}alert-error-hover`]: "rgba(234, 123, 115, 1)", // #EA7B73
  [`${prefix}alert-error-pressed`]: "rgba(180, 54, 44, 1)", // #B4362C
  [`${prefix}alert-error-background`]: "rgba(252, 236, 235, 1)", // #FCECEB
  [`${prefix}alert-error-border`]: "rgba(243, 180, 175, 1)", // #F3B4AF
};

const colors = {
  ...colorGeneral,
  ...colorTheme,
};

const fontWeight = {
  regular: 400,
};

const fontSize = {
  // Heading
  [`${prefix}heading-1`]: ["3.5rem", "4.25rem"],
  [`${prefix}heading-2`]: ["2.875rem", "3.5rem"],
  [`${prefix}heading-3`]: ["2.375rem", "2.875rem"],
  [`${prefix}heading-4`]: ["1.875rem", "2.375rem"],
  [`${prefix}heading-5`]: ["1.5rem", "2rem"],
  [`${prefix}heading-6`]: ["1.25rem", "1.75rem"],
  [`${prefix}heading-7`]: ["1rem", "1.5rem"],
  [`${prefix}heading-8`]: ["0.875rem", "1.375rem"],
  [`${prefix}heading-9`]: ["0.75rem", "1.25rem"],
  // Subtitle
  [`${prefix}subtitle-1`]: ["1.125rem", "1.625rem"],
  [`${prefix}subtitle-2`]: ["1rem", "1.5rem"],
  [`${prefix}subtitle-3`]: ["0.875rem", "1.375rem"],
  [`${prefix}subtitle-4`]: ["0.75rem", "1rem"],
  [`${prefix}subtitle-5`]: ["0.625rem", "0.875rem"],
  // Body
  [`${prefix}body-1`]: ["1.125rem", "1.75rem"],
  [`${prefix}body-2`]: ["1rem", "1.5rem"],
  [`${prefix}body-3`]: ["0.875rem", "1.375rem"],
  // Button Text
  [`${prefix}button-text-1`]: ["1rem", "1.5rem"],
  [`${prefix}button-text-2`]: ["1rem", "1.5rem"],
  [`${prefix}button-text-3`]: ["0.875rem", "1.375rem"],
  [`${prefix}button-text-4`]: ["0.875rem", "1.375rem"],
  [`${prefix}button-text-5`]: ["0.75rem", "1rem"],
  [`${prefix}button-text-6`]: ["0.75rem", "1rem"],
  // Label
  [`${prefix}label-1`]: ["1rem", "1.5rem"],
  [`${prefix}label-2`]: ["1rem", "1.375rem"],
  [`${prefix}label-3`]: ["0.875rem", "1.375rem"],
  [`${prefix}label-4`]: ["0.875rem", "1.375rem"],
  [`${prefix}label-5`]: ["0.75rem", "1rem"],
  // Placeholder
  [`${prefix}placeholder-1`]: ["1rem", "1.75rem"],
  [`${prefix}placeholder-2`]: ["0.875rem", "1.375rem"],
  // Highlight
  [`${prefix}highlight-1`]: ["3.5rem", "4.25rem"],
  [`${prefix}highlight-2`]: ["2.875rem", "3.5rem"],
  [`${prefix}highlight-3`]: ["2.375rem", "2.875rem"],
  [`${prefix}highlight-4`]: ["1.875rem", "2.375rem"],
  [`${prefix}highlight-5`]: ["1.5rem", "2rem"],
  [`${prefix}highlight-6`]: ["1.25rem", "1.75rem"],
};

const gridTemplateColumns = {
  13: "repeat(13, minmax(0, 1fr))",
  14: "repeat(14, minmax(0, 1fr))",
  15: "repeat(15, minmax(0, 1fr))",
  16: "repeat(16, minmax(0, 1fr))",
  17: "repeat(17, minmax(0, 1fr))",
  18: "repeat(18, minmax(0, 1fr))",
  19: "repeat(19, minmax(0, 1fr))",
  20: "repeat(20, minmax(0, 1fr))",
  21: "repeat(21, minmax(0, 1fr))",
  22: "repeat(22, minmax(0, 1fr))",
  23: "repeat(23, minmax(0, 1fr))",
  24: "repeat(24, minmax(0, 1fr))",
};

const themeResult = {
  extend: {
    fontWeight: fontWeight,
    gridTemplateColumns: gridTemplateColumns,
  },
  screens: screens,
  boxShadow: boxShadow,
  container: container,
  colors: colors,
  fontSize: fontSize,
};

module.exports = {
  themeResult,
};
