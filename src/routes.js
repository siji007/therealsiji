import About from './components/about'
import Contact from './components/contact'
import Project from './components/projects'

export const routes = [
    { path: '/', component: About },
    { path: '/contact', component: Contact },
    { path: '/projects', component: Project },
    { path: '*', redirect: '/' }
];