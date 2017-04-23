
import React from 'react'
import airbnb from '../../../static/images/Airbnb.png';
import metrobank from '../../../static/images/Metro.png';
import pariti from '../../../static/images/Pariti.png';
import unshackled from '../../../static/images/Unshackled.png';

const Partners = () => {
  return (
    <div className="partners light-blue">
      <h3>
        Our partners:
      </h3>
      <ul className="partner-list">
        <li>
          <div className="partner-image">
          <img alt="Air Bnb" src={airbnb} />
          </div>
        </li>
        <li>
          <div className="partner-image">
          <img alt="Metrobank" src={metrobank} />
          </div>
        </li>
        <li>
          <div className="partner-image">
          <img alt="Pariti" src={pariti} />
          </div>
        </li>
        <li>
          <div className="partner-image">
          <img alt="unshackled.com" src={unshackled} />
          </div>
        </li>
      </ul>
    </div>
  )
}
export default Partners;
