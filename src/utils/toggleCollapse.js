export default function toggleCollapse(isOpen) {
  if (isOpen) {
    return {
      maxHeight: "180px",
    };
  }
  return {
    maxHeight: "0",
  };
}
