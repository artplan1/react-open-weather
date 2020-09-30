import React, { useEffect, useState } from "react";
import { getIcon, getLangs, getUnits, formatDateTime } from "./utils";

import fetch from "isomorphic-unfetch";

import "./ReactWeather.sass";

const endpointToday =
  "https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,daily";

interface ReactWeatherProps {
  lat: string;
  lon: string;
  city?: string;
  apiKey: string;
  lang?: "en" | "es" | "pt" | "ru";
  unit?: "metric" | "imperial";
  loadingComponent?: JSX.Element;
}

const ReactWeather: React.FC<ReactWeatherProps> = ({
  lat,
  lon,
  city,
  apiKey,
  lang = "en",
  unit = "metric",
  loadingComponent,
}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const params = {
      appid: apiKey,
      units: unit,
      lang,
      lat,
      lon,
    } as { [key: string]: string };

    const url = new URL(endpointToday);

    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key]);
    });

    fetch(String(url))
      .then((response) => response.json())
      .then(({ current, hourly }) => {
        if (!current) return;

        setData({
          description: current.weather[0].description,
          icon: current.weather[0].icon,
          temperature: {
            current: current.temp.toFixed(0),
          },
          wind: current.wind_speed.toFixed(0),
          humidity: current.humidity,
          date: formatDateTime(current.dt, lang),
          precipitation: hourly ? Math.round(hourly[1].pop * 100) : "-",
        });
      });
  }, [lang, lat, lon]);

  if (!data) return loadingComponent || <div>Loading...</div>;

  const todayIcon = getIcon(data.icon);
  const units = getUnits(unit);
  const langs = getLangs(lang);

  return (
    <div className="rw-main">
      <div className="rw-box">
        <div className="rw-box__top">
          <div>
            <p>{langs.todayWeather}</p>

            <div className="current-temp">
              <i className={`wicon wi ${todayIcon}`}></i>

              <span className="current-temp__temp">
                {data.temperature.current} {units.temp}
              </span>

              <span>{data.description}</span>
            </div>
          </div>

          <div className="current-dt">
            {city}
            <br />
            {data.date}
          </div>
        </div>

        <div className="rw-box__bottom">
          <div>
            {langs.wind}
            <br />
            {data.wind} {units.speed}
          </div>

          <div>
            {langs.humidity}
            <br />
            {data.humidity}%
          </div>

          <div>
            {langs.precipitation}
            <br />
            {data.precipitation}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactWeather;
