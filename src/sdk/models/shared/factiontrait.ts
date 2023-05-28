/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The unique identifier of the trait.
 */
export enum FactionTraitSymbol {
    Bureaucratic = "BUREAUCRATIC",
    Secretive = "SECRETIVE",
    Capitalistic = "CAPITALISTIC",
    Industrious = "INDUSTRIOUS",
    Peaceful = "PEACEFUL",
    Distrustful = "DISTRUSTFUL",
    Welcoming = "WELCOMING",
    Smugglers = "SMUGGLERS",
    Scavengers = "SCAVENGERS",
    Rebellious = "REBELLIOUS",
    Exiles = "EXILES",
    Pirates = "PIRATES",
    Raiders = "RAIDERS",
    Clan = "CLAN",
    Guild = "GUILD",
    Dominion = "DOMINION",
    Fringe = "FRINGE",
    Forsaken = "FORSAKEN",
    Isolated = "ISOLATED",
    Localized = "LOCALIZED",
    Established = "ESTABLISHED",
    Notable = "NOTABLE",
    Dominant = "DOMINANT",
    Inescapable = "INESCAPABLE",
    Innovative = "INNOVATIVE",
    Bold = "BOLD",
    Visionary = "VISIONARY",
    Curious = "CURIOUS",
    Daring = "DARING",
    Exploratory = "EXPLORATORY",
    Resourceful = "RESOURCEFUL",
    Flexible = "FLEXIBLE",
    Cooperative = "COOPERATIVE",
    United = "UNITED",
    Strategic = "STRATEGIC",
    Intelligent = "INTELLIGENT",
    ResearchFocused = "RESEARCH_FOCUSED",
    Collaborative = "COLLABORATIVE",
    Progressive = "PROGRESSIVE",
    Militaristic = "MILITARISTIC",
    TechnologicallyAdvanced = "TECHNOLOGICALLY_ADVANCED",
    Aggressive = "AGGRESSIVE",
    Imperialistic = "IMPERIALISTIC",
    TreasureHunters = "TREASURE_HUNTERS",
    Dexterous = "DEXTEROUS",
    Unpredictable = "UNPREDICTABLE",
    Brutal = "BRUTAL",
    Fleeting = "FLEETING",
    Adaptable = "ADAPTABLE",
    SelfSufficient = "SELF_SUFFICIENT",
    Defensive = "DEFENSIVE",
    Proud = "PROUD",
    Diverse = "DIVERSE",
    Independent = "INDEPENDENT",
    SelfInterested = "SELF_INTERESTED",
    Fragmented = "FRAGMENTED",
    Commercial = "COMMERCIAL",
    FreeMarkets = "FREE_MARKETS",
    Entrepreneurial = "ENTREPRENEURIAL",
}

export class FactionTrait extends SpeakeasyBase {
    /**
     * A description of the trait.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * The name of the trait.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The unique identifier of the trait.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "symbol" })
    symbol: FactionTraitSymbol;
}
