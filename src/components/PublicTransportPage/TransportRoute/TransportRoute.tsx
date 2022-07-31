import { TransportRouteModel } from '../../../typings/TransportRouteModel';
import { Polyline, Tooltip, Circle } from 'react-leaflet';
import React from 'react';

type Props = {
  route: TransportRouteModel;
};

const TransportRoute = ({ route }: Props) => {
  const pathOptions = {
    color: route.color,
    weight: 10,
  };
  return (
    <Polyline pathOptions={pathOptions} positions={route.path}>
      {route.stops.map((s) => (
        <Circle center={s.location} color={route.color}>
          <Tooltip direction="bottom">
            {route.id} - {s.name}
          </Tooltip>
        </Circle>
      ))}
    </Polyline>
  );
};

export default TransportRoute;
