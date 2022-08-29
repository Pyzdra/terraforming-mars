import {IProjectCard} from '../IProjectCard';
import {Player} from '../../Player';
import {Card2} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class MartianDustProcessingPlant extends Card2 implements IProjectCard {
  constructor() {
    super({
      cardType: CardType.AUTOMATED,
      name: CardName.MARTIAN_DUST_PROCESSING_PLANT,
      cost: 15,
      tags: [Tag.MARS, Tag.BUILDING],
      productionBox: {energy: -1, steel: 2},
      tr: {tr: 1},
      victoryPoints: 1,

      metadata: {
        cardNumber: 'Pf44',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.minus().energy(1).nbsp.steel(2)).br;
          b.tr(1);
        }),
        description: 'Decrease your energy production 1 step, and raise your steel production 2 steps. Gain 1 TR.',
      },
    });
  }

  public override bespokePlay(player: Player) {
    player.increaseTerraformRating();
    return undefined;
  }
}
