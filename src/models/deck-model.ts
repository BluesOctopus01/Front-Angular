import {CardBase } from "./card-model";
import { Tag } from "./tag-model";

export interface Deck{
    id : number;
    name : string;
    bio : string | null;

    access : "PUBLIC" | "PRIVATE" | "PROTECTED";
    creation_at : string;
    image : string | null;
    access_key : string | null;
    creator_id : number;
    last_modification_at : string;
    cards : CardBase[] |null;
    tags : Tag[] | null;

}

export interface SummuryDeck{
    id : number;
    name : string;
    access : "PUBLIC" | "PRIVATE" | "PROTECTED";
    creator_id : number;
}
