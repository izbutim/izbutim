import { Circle, Tooltip } from 'react-leaflet';
import React from 'react';
import { TransportStopModel } from '../../../typings/TransportStopModel';

type Props = {
  stop: TransportStopModel;
};

const TransportStop = ({ stop }: Props) => {
  return (
    <Circle center={stop.location} radius={30}>
      <Tooltip direction="bottom">{stop.name}</Tooltip>
    </Circle>
  );
};

export default TransportStop;
