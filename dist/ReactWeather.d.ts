import React from "react";
import "./ReactWeather.sass";
interface ReactWeatherProps {
    lat: string | number;
    lon: string | number;
    city?: string;
    apiKey: string;
    lang?: "en" | "es" | "pt" | "ru";
    unit?: "metric" | "imperial";
    loadingComponent?: JSX.Element;
}
declare const ReactWeather: React.FC<ReactWeatherProps>;
export default ReactWeather;
