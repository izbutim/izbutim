import React from 'react';
import { Polyline, Tooltip } from 'react-leaflet';
import {
  BikeLaneModel,
  laneColorFromState,
  laneStateInRomanian,
} from '../../../typings/BikeLaneModel';

type Props = {
  bikeLane: BikeLaneModel;
};

const BikeLane = ({ bikeLane }: Props) => {
  const pathOptions = {
    color: laneColorFromState(bikeLane.state),
  };

  return (
    <Polyline pathOptions={pathOptions} positions={bikeLane.path}>
      <Tooltip direction="bottom">
        <b>{bikeLane.location}</b>
        <br />
        <b>Stare: </b>
        {laneStateInRomanian(bikeLane.state)}
        {bikeLane.observations && (
          <>
            <br />
            <b>Observații: </b>
            {bikeLane.observations}
          </>
        )}
      </Tooltip>
    </Polyline>
  );
};

export default BikeLane;
