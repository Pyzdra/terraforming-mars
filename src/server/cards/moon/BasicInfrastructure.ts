import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {PreludeCard} from '../prelude/PreludeCard';
import {TileType} from '../../../common/TileType';
import {AltSecondaryTag} from '../../../common/cards/render/AltSecondaryTag';
import {CardRenderer} from '../render/CardRenderer';

export class BasicInfrastructure extends PreludeCard {
  constructor() {
    super({
      name: CardName.BASIC_INFRASTRUCTURE,
      tags: [Tag.MOON],

      behavior: {
        moon: {roadTile: {}},
        colonies: {addTradeFleet: 1},
      },

      metadata: {
        description: 'Place a road tile on The Moon and raise the Logistics Rate 1 step. Gain 1 trade fleet.',
        cardNumber: '',
        renderData: CardRenderer.builder((b) => {
          b.moonRoad({secondaryTag: AltSecondaryTag.MOON_LOGISTICS_RATE}).tradeFleet();
        }),
      },
      tilesBuilt: [TileType.MOON_ROAD],
    });
  }
}
