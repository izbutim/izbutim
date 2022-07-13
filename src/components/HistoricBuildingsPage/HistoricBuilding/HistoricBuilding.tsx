import React from 'react';
import { Polygon, Tooltip } from 'react-leaflet';
import {
  HistoricBuildingModel,
  buildingColorFromState,
  buildingStateInRomanian,
} from '../../../typings/HistoricBuildingModel';

type Props = {
  historicBuilding: HistoricBuildingModel;
};

const HistoricBuilding = ({ historicBuilding }: Props) => {
  const pathOptions = {
    color: buildingColorFromState(historicBuilding.state),
  };

  return (
    <Polygon
      pathOptions={pathOptions}
      positions={historicBuilding.perimeter}
      fillColor={buildingColorFromState(historicBuilding.state)}
    >
      <Tooltip direction="bottom">
        <b>{historicBuilding.name}</b>
        <br />
        <b>Stare: </b>
        {buildingStateInRomanian(historicBuilding.state)}
        {historicBuilding.observations && (
          <>
            <br />
            <b>Observații: </b>
            {historicBuilding.observations}
          </>
        )}
      </Tooltip>
    </Polygon>
  );
};

export default HistoricBuilding;
