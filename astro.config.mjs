// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Among Us in Minecraft Docs',
            social: [{icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight'}],
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        {label: 'Getting started', slug: 'guides/getting-started'},
                        {label: 'Create an Area', slug: 'guides/create-an-area'},
                        {label: 'Commands', slug: 'guides/commands'}
                    ],
                },
                {
                    label: 'Configuration',
                    items: [
                        {label: 'config.yml', slug: 'configuration/config-yml'},
                        {label: 'secret.properties', slug: 'configuration/secrets-properties'}
                    ]
                },
                {
                    label: 'Roles',
                    items: [
                        {label: 'Role List', slug: 'roles/roles'},
                        {
                            label: 'Crewmates',
                            items: [
                                {label: 'Caller', slug: 'roles/crewmates/caller'},
                                {label: 'Camera Man', slug: 'roles/crewmates/camera-man'},
                                {label: 'Crewmate', slug: 'roles/crewmates/crewmate'},
                                {label: 'Detective', slug: 'roles/crewmates/detective'},
                                {label: 'Engineer', slug: 'roles/crewmates/engineer'},
                                {label: 'Mayor', slug: 'roles/crewmates/mayor'},
                                {label: 'Seer', slug: 'roles/crewmates/seer'},
                            ]
                        }
                    ]
                }
            ],
        }),
    ],
});
