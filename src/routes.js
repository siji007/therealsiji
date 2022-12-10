import About from './components/about'
import Contact from './components/contact'
import Project from './components/projects'
import Resume from './components/resume'

export const routes = [
    { path: '/', component: About },
    { path: '/contact', component: Contact },
    { path: '/projects', component: Project },
    { path: '/resume', component: Resume },
    { path: '*', redirect: '/' }
];