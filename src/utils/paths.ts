export const activePaths: { [name: string]: Array<{ path: string, exact: boolean }> } = {
    'home': [{ path: '/', exact: true }, { path: '/ingredients', exact: false }],
    'ordersFeed': [{ path: '/orders-feed', exact: false }],
    'profile': [{ path: '/profile', exact: false }]
}