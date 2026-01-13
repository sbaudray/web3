const baseUrl = 'https://jsonplaceholder.typicode.com'

export async function indexPosts({ limit = 10} = {}) {
    return fetch(`${baseUrl}/posts?_limit=${limit}`).then(res => res.json());
}

export async function showPost({ postId } = {}) {
    return fetch(`${baseUrl}/posts/${postId}`).then(res => res.json());
}