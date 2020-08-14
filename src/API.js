export const getPosts = async page => {
    const posts = await (
        await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
    ).json();
    return posts;
};