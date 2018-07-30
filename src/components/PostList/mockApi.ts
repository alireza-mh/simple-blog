interface IPost {
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
}
interface IAPI {
    list: IPost[];
    total: number;
    page: number;
    paginationCount: number;
    query?: string;
}

/**@desc this is API respond stature which i have in mind - query page and receive them like below
 * also backend can set number of post per page as well (single point for changing config)
 * number of list are 8 for testing purposes (real number of post = paginationCount)
 * @type {{list: {id: number; title: string; author: string; date: string; content: string}[]; total: number; paginationCount: number; page: number}}
 */
export const PostListMock: IAPI = {
    list: [
        {
            id: 1,
            title: "some long title for mocking api and see overflow as well, enough already.",
            author: "Alireza",
            date: "5 Aug 2018",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?"
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?`
        },
        {
            id: 2,
            title: "second title for this blog",
            author: "Alireza",
            date: "5 Aug 2018",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?"
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?`
        },
        {
            id: 3,
            title: "third title for this blog",
            author: "Alireza",
            date: "5 Aug 2018",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?"
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?`
        },
        {
            id: 4,
            title: "fourth title for this blog",
            author: "Alireza",
            date: "5 Aug 2018",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?"
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?`
        },
        {
            id: 5,
            title: "fifth title for this blog",
            author: "Alireza",
            date: "5 Aug 2018",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?"
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?`
        },
        {
            id: 6,
            title: "sixth title for this blog",
            author: "Alireza",
            date: "5 Aug 2018",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?"
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?`
        },
        {
            id: 7,
            title: "7 title for this blog",
            author: "Alireza",
            date: "5 Aug 2018",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?"
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?`
        },
        {
            id: 8,
            title: "8 title for this blog",
            author: "Alireza",
            date: "5 Aug 2018",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?"
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt dolorem dolorum laboriosam molestiae, nam veniam! Blanditiis enim id odio? Ab alias animi asperiores at aut consectetur corporis cumque delectus deleniti dolores doloribus et exercitationem id ipsa, itaque magni nulla placeat quaerat reprehenderit sapiente similique tenetur, veritatis voluptas voluptates voluptatibus?`
        }
    ],
    total: 8,
    paginationCount: 6,
    page: 1
}
