import React from 'react';
import { Polygon, Tooltip } from 'react-leaflet';
import {
  HistoricBuildingModel,
  buildingColorFromState,
  buildingStateInRomanian,
} from '../../../typings/HistoricBuildingModel';

type Props = {
  building: HistoricBuildingModel;
};

const HistoricBuilding = ({ building }: Props) => {
  const pathOptions = {
    color: buildingColorFromState(building.state),
  };

  return (
    <Polygon
      pathOptions={pathOptions}
      positions={building.perimeter}
      fillColor={buildingColorFromState(building.state)}
    >
      <Tooltip direction="bottom">
        <b>{building.name}</b>
        <br />
        <b>Stare: </b>
        {buildingStateInRomanian(building.state)}
        <br />
        <b>Renovată în: </b>
        {building.lastRenovationYear === -1 ? '?' : building.lastRenovationYear}
        {building.observations && (
          <>
            <br />
            <b>Observații: </b>
            {building.observations}
          </>
        )}
      </Tooltip>
    </Polygon>
  );
};

export default HistoricBuilding;
