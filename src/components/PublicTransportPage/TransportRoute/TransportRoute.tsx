import { TransportRouteModel } from '../../../typings/TransportRouteModel';
import { Polyline } from 'react-leaflet';
import React from 'react';

type Props = {
  route: TransportRouteModel;
};

const TransportRoute = ({ route }: Props) => {
  const pathOptions = {
    color: route.color,
    weight: 5,
  };
  return <Polyline pathOptions={pathOptions} positions={route.path} />;
};

export default TransportRoute;
