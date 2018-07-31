interface ILatestPost {
    title: string;
    postNumber: number;
    date: string;       // TODO change to DATE type later
}

export const LatestPosts: ILatestPost[] = [
    {
        title: "Vestibulum Commodo Magna Est Tempus Eros Auctor.",
        postNumber: 30,
        date: "March, 15"
    },
    {
        title: "Second latest Vestibulum Commodo Magna Est Tempus Eros Auctor.",
        postNumber: 20,
        date: "Aug, 15"
    },
    {
        title: "Third Vestibulum Commodo Magna Est Tempus Eros Auctor.",
        postNumber: 30,
        date: "September, 15"
    },
    {
        title: "4th Vestibulum Commodo Magna Est Tempus Eros Auctor.",
        postNumber: 30,
        date: "September, 15"
    },
];