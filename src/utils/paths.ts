export const activePaths: { [name: string]: Array<{ path: string, exact: boolean }> } = {
    'home': [{ path: '/', exact: true }, { path: '/ingredients', exact: false }],
    'feed': [{ path: '/feed', exact: false }],
    'profile': [{ path: '/profile', exact: false }]
}