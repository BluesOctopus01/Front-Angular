export interface Tag {
    id: number;
    name: string;
    description: string;
    deckCount : number;
}

export interface TagCreateModel{
    name : string;
    description : string
}