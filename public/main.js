window.onload = () => {
    let root = document.getElementById('app');

    let Router = function (name, routes) {
        return { name, routes };
    };

    let routerInstance = new Router('routerInstance', [
        {
            path: '/',
            name: 'Root',
        },
        {
            path: '/about',
            name: 'About',
        },
        {
            path: '/contact',
            name: 'Contact',
        },
    ]);

    let currentPath = window.location.pathname;

    if (currentPath === '/') {
        root.innerHTML = 'You are on Home page';
    } else {
        let route = routerInstance.routes.filter((r) => r.path === currentPath)[0];

        if (route) {
            root.innerHTML = `You're on the ${route.name} path`;
        } else {
            root.innerHTML = 'This route is not defined';
        }
    }
};
