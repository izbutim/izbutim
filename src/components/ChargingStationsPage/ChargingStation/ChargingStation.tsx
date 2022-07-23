import { Marker, Tooltip } from 'react-leaflet';
import { ChargingStationModel } from '../../../typings/ChargingStationModel';
import React from 'react';
import 'leaflet/dist/leaflet.css';

type Props = {
  station: ChargingStationModel;
};

const ChargingStation = ({ station }: Props) => {
  return (
    <Marker position={station.position}>
      <Tooltip direction="bottom">
        <b>{station.location}</b>
        <br />
        <b>Capacitate:</b> {station.capacity === -1 ? '?' : station.capacity}{' '}
        locuri
        {station.observations && (
          <>
            <br />
            <b>Observații: </b>
            {station.observations}
          </>
        )}
      </Tooltip>
    </Marker>
  );
};

export default ChargingStation;
