import { ProductI } from "./interfaces";

const Features: Array<keyof ProductI> = [
  "Toepassing",
  "Hardheid",
  "Artikelnummer",
  "stepQuantity",
  "Kleur",
  "Temperatuurgebied",
  "Materiaal",
  "Snoerdikte",
  "Inwendige diameter",
  "Maat volgens AS568",
];

export default Features.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }

  return 0;
});
