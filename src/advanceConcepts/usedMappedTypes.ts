type Artist = {
    id: number;
    name: string;
    bio: string;
};

type MappedArtistEditing = {
    [Property in keyof Artist]?: Artist[Property];
} & { id: number };

const artist: Artist = {
    id: 1,
    name: "Akki",
    bio: "I am akki",
};

const editArtist: MappedArtistEditing = {
    id: 1,
    bio: "Hello, I am Justin"
}