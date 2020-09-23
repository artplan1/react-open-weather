import React, { useEffect, useState } from "react";
import { getIcon, getLangs, getUnits, formatDateTime } from "./utils";

import fetch from "isomorphic-unfetch";

import "./ReactWeather.sass";

const endPointToday = "https://api.openweathermap.org/data/2.5/onecall";

interface ReactWeatherProps {
  lat: string;
  lon: string;
  apiKey: string;
  lang?: "en" | "es" | "pt" | "ru";
  unit?: "metric" | "imperial";
  loadingComponent?: JSX.Element;
}

const ReactWeather: React.FC<ReactWeatherProps> = ({
  lat,
  lon,
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

    const url = new URL(endPointToday);
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    fetch(String(url))
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        const todayData = resp.current;

        if (todayData) {
          setData({
            description: todayData.weather[0].description,
            icon: todayData.weather[0].icon,
            temperature: {
              current: todayData.temp.toFixed(0),
            },
            wind: todayData.wind_speed.toFixed(0),
            humidity: todayData.humidity,
            date: formatDateTime(todayData.dt, lang),
            uvi: todayData.uvi,
            precipitation: resp.minutely[0].precipitation * 100,
          });
        }
      });
  }, [lang]);

  if (!data) return loadingComponent || <div>Loading...</div>;

  const todayIcon = getIcon(data.icon);
  const units = getUnits(unit);
  const langs = getLangs(lang);

  return (
    <div className="rw-main">
      <p>{langs.todayWeather}</p>

      <div className="rw-box">
        <div className="rw-box__top">
          <div className="current-temp">
            <i className={`wicon wi ${todayIcon}`}></i>

            <span className="current-temp__temp">
              {data.temperature.current} {units.temp}
            </span>

            <span>{data.description}</span>
          </div>

          <div className="current-dt">{data.date}</div>
        </div>

        <div className="rw-box__bottom">
          <div>
            {langs.wind}
            <br />
            {data.wind} {units.speed}
          </div>

          <div>
            {langs.uvi}
            <br />
            {data.uvi}
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
