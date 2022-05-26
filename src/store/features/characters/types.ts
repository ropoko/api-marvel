export enum CharacterActions {
    LOAD_REQUEST = '@characters/LOAD_REQUEST',
    LOAD_SUCCESS = '@characters/LOAD_SUCCESS',
    LOAD_FAILURE = '@characters/LOAD_FAILURE'
}

export interface Character {
    id: number;
    name: string;
}

export interface CharacterState {
    readonly data: Character[];
    readonly loading: boolean;
    readonly error: boolean;
}