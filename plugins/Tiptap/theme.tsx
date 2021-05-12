const ProseMirror = (props) => ({
  ".ProseMirror": {
    bg: props.colorMode === "light" ? "gray.100" : "whiteAlpha.50",
    my: "2",
    py: "2",
    px: "4",
    paddingInlineStart: "4",
    WebkitPaddingStart: "4",
    paddingInlineEnd: "4",
    WebkitPaddingEnd: "4",
    minHeight: "32",
    maxHeight: "xs",
    fontSize: "md",
    lineHeight: "short",
    minWidth: "0px",
    width: "100%",
    outline: "0",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    MsAppearance: "none",
    position: "relative",
    border: "2px solid",
    borderColor: "transparent",
    borderRadius: "md",
    overflowX: "hidden",
    overflowY: "auto",
    resize: "vertical",
    color: "inherit",
    transition: "all 0.2s",
    WebkitTransition: "all 0.2s",
    wordWrap: "break-word",
    ul: {
      marginLeft: "4",
    },
    ol: {
      marginLeft: "4",
    },
    ":hover": {
      bg: props.colorMode === "light" ? "gray.200" : "whiteAlpha.100",
    },
    ":focus": {
      bg: "transparent",
      borderColor: props.colorMode === "light" ? "blue.500" : "blue.300",
    },
  },
});

export default ProseMirror;