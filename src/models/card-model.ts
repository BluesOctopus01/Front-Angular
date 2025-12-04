export interface CardBase {
    id : number;
    card_type: string; // discriminant parce que remplacer par Union
    question : string;
    created_at : string;
    last_modification_at : string;
    deck_id : number
}

export interface CardQa extends CardBase{
    card_type: 'qa';
    answer : string;
}
export interface CardImage extends CardBase{
    card_type : 'image';
    text_alt : string | null;
    url : string;
    answer : string;
}
export interface CardQcm extends CardBase{
    card_type : 'qcm';
    answers : AnswerQcm[];
}
export interface CardGapfill extends CardBase{
    card_type : 'gapfill';
    text1 : string;
    text2 : string;
    answer : string;
}
export interface AnswerQcm{

}

// export type Card = CardQa | CardImage | CardQcm | CardGapfill;