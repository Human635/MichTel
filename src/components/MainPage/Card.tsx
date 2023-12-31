//@ts-nocheck
import { useState } from "react";
import React from "react";
import { ThemeCard, ThemeModal } from "./MainPage.style";
import { ThemeModalItem } from "./MainPage.style";
import Modal from "react-modal";

export interface TouristCardProps {
  name?: string;
  cost_for_nomad_in_usd?: number;
  image?: string;

  region?: string;
  population?: number;
  air_quality_now?: number;
  country?: string;
  internet_speed?: string;
  safety_level?: number;
  humidity?: string;
  wheather_emoji?: any;
  wheather_icon?: any;
  temperatureC?: string;

  onClick?: any;
}

export const Card = ({
  name,
  cost_for_nomad_in_usd,
  image,

  region,
  population,
  air_quality_now,
  country,
  internet_speed,
  safety_level,
  humidity,
  wheather_emoji,
  temperatureC,
  wheather_icon,

  onClick,
}: TouristCardProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <ThemeCard className="wrapper" onClick={openModal}>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={() => {}}>
        <ThemeModal class="center">
          <div className="card green">
            <div className="additional">
              <div className="user-card">
                <div className="points center">
                  {cost_for_nomad_in_usd} $/ m
                </div>
                <img src={image} alt="Image" />
              </div>
              <div className="more-info">
                <h1>{name}</h1>
                <div className="coords">
                  <span>Population</span>
                  <span>{population} people</span>
                </div>
                <div className="coords">
                  <span>Region</span>
                  <span>
                    {country}/ {region}
                  </span>
                </div>
                <div className="stats">
                  <div>
                    <div className="title">Whether</div>
                    <div className="value">
                      {wheather_emoji}
                      {temperatureC}°C
                    </div>
                  </div>
                  <div>
                    <div className="title">AQI</div>
                    <div className="value">{air_quality_now}</div>
                  </div>
                  <div>
                    <div className="title">Safety</div>
                    <div className="value">{safety_level}/5</div>
                  </div>
                  <div>
                    <div className="title">Internet</div>
                    <div className="value">{internet_speed}mb/s</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="general">
              <h1>{name}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                volutpat mauris, at molestie lacus. Nam vestibulum sodales odio
                ut pulvinar.
              </p>
            </div>
          </div>
        </ThemeModal>
      </Modal>
      <div className="container">
        {/* <div className="top">{image}</div> */}
        <img className="top" src={image} alt="Image" />
        <div className="bottom">
          <div className="left">
            <div className="details">
              <h1>{name}</h1>
              <p>{cost_for_nomad_in_usd}$/m</p>
            </div>
            <div className="buy">
              <svg
                fill="#000000"
                height="30px"
                width="30px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.18 512.18"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M511.825,170.191c-0.14-1.786-0.298-3.155-0.44-4.095C504.22,84.955,444.691,20.73,367.434,20.73
			c-44.758,0-85.66,21.18-112.442,55.516C228.835,41.679,189.491,20.73,144.97,20.73C67.976,20.73,8.584,84.52,0.937,166.557
			c-0.147,0.956-0.295,2.12-0.43,3.489C-0.8,183.3,0.287,200.862,5.338,222.26c10.732,45.463,35.828,86.871,71.224,118.958
			l164.828,144.92c8.028,7.059,20.042,7.085,28.101,0.062l166.037-144.683c39.134-40.728,62.393-77.366,71.616-119.584
			C511.771,200.731,512.848,183.284,511.825,170.191z M465.46,212.833c-7.254,33.204-26.552,63.603-59.352,97.843L255.545,441.771
			l-150.569-132.38c-28.881-26.184-49.406-60.051-58.113-96.933c-3.953-16.747-4.747-29.585-3.895-38.225
			c0.075-0.764,0.393-3.072,0.393-3.072C48.849,109.384,91.478,63.397,144.97,63.397c39.823,0,73.704,24.287,90.17,63.294
			c7.338,17.382,31.97,17.382,39.308,0c16.136-38.225,52.419-63.294,92.986-63.294c53.494,0,96.121,45.99,101.609,107.786
			c0.147,1.242,0.187,1.586,0.245,2.333C469.993,182.541,469.174,195.811,465.46,212.833z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="right">
            <div className="done">
              <i className="material-icons">done</i>
            </div>
            <div className="details">
              <h1>Chair</h1>
              <p>Added to your cart</p>
            </div>
            <div className="remove">
              <i className="material-icons">clear</i>
            </div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <svg
            fill="#000000"
            height="30px"
            width="30px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 494.04 494.04"
            xmlSpace="preserve"
          >
            <g id="XMLID_350_">
              <path
                id="XMLID_354_"
                d="M247.024,69.989c-97.622,0-177.035,79.414-177.035,177.032c0,97.615,79.413,177.03,177.035,177.03
		c97.614,0,177.026-79.415,177.026-177.03C424.051,149.403,344.638,69.989,247.024,69.989z M279.956,366.259
		c0,5.767-4.678,10.446-10.453,10.446h-44.966c-5.775,0-10.454-4.68-10.454-10.446V231.733c0-5.765,4.678-10.445,10.454-10.445
		h44.966c5.775,0,10.453,4.68,10.453,10.445V366.259z M247.024,181.148c-22.163,0-40.145-17.971-40.145-40.142
		c0-22.168,17.981-40.14,40.145-40.14c22.156,0,40.136,17.972,40.136,40.14C287.16,163.177,269.18,181.148,247.024,181.148z"
              />
              <path
                id="XMLID_351_"
                d="M247.024,0C110.602,0,0.001,110.597,0.001,247.021c0,136.422,110.601,247.019,247.023,247.019
		s247.015-110.597,247.015-247.019C494.039,110.597,383.447,0,247.024,0z M247.024,456.987
		c-115.781,0-209.965-94.192-209.965-209.965c0-115.777,94.184-209.969,209.965-209.969c115.772,0,209.966,94.192,209.966,209.969
		C456.99,362.795,362.796,456.987,247.024,456.987z"
              />
            </g>
          </svg>
        </div>
        <div className="contents">
          <table>
            <tr>
              <th>Region</th>
              <th>Population</th>
            </tr>
            <tr>
              <td>{region}</td>
              <td>{population}p</td>
            </tr>
            <tr>
              <th>AQI</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>{air_quality_now}</td>
              <td>{country}</td>
            </tr>
            <tr>
              <th>Internet</th>
              <th>Safety-5b</th>
            </tr>
            <tr>
              <td>{internet_speed}MB/s</td>
              <td>{safety_level}/5</td>
            </tr>
            <tr>
              <th>Humidity</th>
              <th>Whether</th>
            </tr>
            <tr>
              <td>{humidity}%</td>
              <td>
                {wheather_icon}
                {wheather_emoji}
                {temperatureC}°C
              </td>
            </tr>
          </table>
        </div>
      </div>
    </ThemeCard>
  );
};
