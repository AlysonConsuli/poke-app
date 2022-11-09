export default function getTypeColor(type) {
  let color = "#dac6b5";
  if (type === "grass") {
    color = "#85C125";
  }
  if (type === "fire") {
    color = "#EC8484";
  }
  if (type === "water") {
    color = "#6698FC";
  }
  if (type === "bug") {
    color = "#ADFF2F";
  }
  if (type === "normal") {
    color = " #CC9966";
  }
  if (type === "electric") {
    color = "#FCF199";
  }
  if (type === "ground") {
    color = "#964b00";
  }
  if (type === "poison") {
    color = "#A85198";
  }
  if (type === "fairy") {
    color = " #EC70CB";
  }
  if (type === "fighting") {
    color = "#C6AD22";
  }
  if (type === "psychic") {
    color = "#C596BD";
  }
  if (type === "rock") {
    color = "#808080";
  }
  if (type === "ice") {
    color = "#fff";
  }
  if (type === "ghost") {
    color = "#595877";
  }
  if (type === "flying") {
    color = "#93B2C6";
  }
  if (type === "dragon") {
    color = "#458A8F";
  }
  if (type === "steel") {
    color = "#5C766D";
  }
  if (type === "dark") {
    return {
      background: "#212025",
      color: "#fff",
    };
  }
  return { background: color };
}
