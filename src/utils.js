import moment from "moment";
import icons from "./icons";
import langText from "./lang";

export function getIcon(icon) {
  if (!icon) {
    return "na";
  }
  const icoClass = icons[icon];
  if (icoClass) {
    return icoClass;
  }
  return "na";
}

export function getUnits(unit) {
  if (unit === "metric") {
    return {
      temp: "°C",
      speed: "km/h",
    };
  } else if (unit === "imperial") {
    return {
      temp: "°F",
      speed: "mph",
    };
  }
  return { temp: "", speed: "" };
}

export function formatDateTime(dte, lang) {
  if (dte && moment(dte).isValid()) {
    moment.locale(lang);
    return moment.unix(dte).format("dddd D, HH:mm");
  }
  return "";
}

export function getLangs(lang) {
  return langText[lang] === undefined ? langText.en : langText[lang];
}
