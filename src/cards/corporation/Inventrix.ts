
import { CorporationCard } from "./CorporationCard";
import { Tags } from "../Tags";
import { Player } from "../../Player";
import { Game } from "../../Game";
import { SelectOption } from "../../inputs/SelectOption";

export class Inventrix implements CorporationCard {
    public name: string = "Inventrix";
    public tags: Array<Tags> = [Tags.SCIENCE];
    public startingMegaCredits: number = 45;
    public text: string = "As your first action in the game, draw 3 cards. Your temperature, oxygen, and ocean requirements are +2 or -2 steps, your choice in each case.";
    public description: string = "Inventrix uses brains, as well as muscle, when competing with other mega-corps. Its motto being: \"Do it right\", Inventrix is focused on research.";
    public initialAction(player: Player, game: Game) {
        return new SelectOption(this.name, "Draw 3 cards", () => {
            for (let i = 0; i < 3; i++) {
                player.cardsInHand.push(game.dealer.dealCard());
            }
            return undefined;
        });
    }
    public play(player: Player, _game: Game) {
        player.requirementsBonus = 2;
        return undefined;
    }
}
