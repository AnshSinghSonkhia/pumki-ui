import { Collapse } from "nextra/components";

export default {
    "#": {
        type: 'separator',
        title: "Getting Started",
    },
    'getting-started': 'Introduction',
    installation: 'Installation',
    contributing: 'Contributing',
    troubleshooting: 'Troubleshooting',
    "###": {
        type: 'separator',
    },
    // "###": {
    //     type: 'separator',
    //     title: "Components",
    // },
    components: 'Components',
    sections: {
        title: "Sections",
        theme: {
            collapsed: true
        }
    },
    animations: {
        title: "Animations",
        theme: {
            collapsed: true
        }
    },
    backgrounds: {
        title: "Backgrounds",
        theme: {
            collapsed: true
        }
    },
    'custom-assets': {
        title: "Custom Assets",
        theme: {
            collapsed: true
        }
    },
    gradients: {
        title: "Gradients",
        theme: {
            collapsed: true
        }
    },
    about: {
        title: 'About',
        type: 'page',
        href: '/about',
    },
    careers: {
        title: 'Careers',
        type: 'page',
        href: '/careers',
    }
}
