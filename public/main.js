window.onload = () => {
    let root = document.getElementById('app');

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

    let navigate = (e) => {
        let route = e.target.attributes[0].value;

        let routeInfo = routerInstance.routes.filter((r) => r.path === route)[0];
        if (!routeInfo) {
            window.history.pushState({}, '', 'error');
            root.innerHTML = 'This route is not defined';
        } else {
            window.history.pushState({}, '', routeInfo.path);
            root.innerHTML = `You're on the ${routeInfo.name} path`;
        }
    };

    let definedRoutes = Array.from(document.querySelectorAll('[router-link]'));
    definedRoutes.forEach((route) => {
        route.addEventListener('click', navigate, false);
    });
};
