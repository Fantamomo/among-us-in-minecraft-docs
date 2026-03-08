// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://among-us-in-minecraft.docs.fantamomo.com',
    integrations: [
        starlight({
            title: 'Among Us in Minecraft Docs',
            social: [{icon: 'github', label: 'GitHub', href: 'https://github.com/fantamomo/among-us-in-minecraft'}],
            editLink: {
                baseUrl: 'https://github.com/fantamomo/among-us-in-minecraft-docs/edit/main/',
            },
            lastUpdated: true,
            components: {
                Footer: "./src/components/overrides/Footer.astro",
                LastUpdated: "./src/components/overrides/LastUpdated.astro"
            },
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
                    label: 'Gameplay',
                    items: [
                        {label: 'Meeting', slug: 'gameplay/meeting'},
                        {label: 'Sabotage', slug: 'gameplay/sabotage'},
                        {label: 'Vents', slug: 'gameplay/vents'},
                        {label: 'Tasks', slug: 'gameplay/tasks'},
                    ]
                },
                {
                    label: 'Roles',
                    items: [
                        {label: 'Role List', slug: 'roles/roles'},
                        {
                            label: 'Crewmates',
                            collapsed: true,
                            items: [
                                {label: 'Crewmate', slug: 'roles/crewmates/crewmate'},
                                {label: 'Caller', slug: 'roles/crewmates/caller'},
                                {label: 'Camera Man', slug: 'roles/crewmates/camera-man'},
                                {label: 'Detective', slug: 'roles/crewmates/detective'},
                                {label: 'Engineer', slug: 'roles/crewmates/engineer'},
                                {label: 'Mayor', slug: 'roles/crewmates/mayor'},
                                {label: 'Seer', slug: 'roles/crewmates/seer'},
                                {label: 'Sheriff', slug: 'roles/crewmates/sheriff'},
                                {label: 'Snitch', slug: 'roles/crewmates/snitch'},
                                {label: 'The Damned', slug: 'roles/crewmates/the-damned'}
                            ]
                        },
                        {
                            label: 'Imposters',
                            collapsed: true,
                            items: [
                                {label: 'Imposter', slug: 'roles/imposters/imposter'},
                                {label: 'Camouflager', slug: 'roles/imposters/camouflager'},
                                {label: 'Miner', slug: 'roles/imposters/miner'},
                                {label: 'Morphling', slug: 'roles/imposters/morphling'},
                                {label: 'Phantom', slug: 'roles/imposters/phantom'},
                            ]
                        },
                        {
                            label: 'Neutral',
                            collapsed: true,
                            items: [
                                {label: 'Arsonist', slug: 'roles/neutral/arsonist'},
                                {label: 'Cannibal', slug: 'roles/neutral/cannibal'},
                                {label: 'Jester', slug: 'roles/neutral/jester'},
                                {label: 'Executioner', slug: 'roles/neutral/executioner'},
                            ]
                        }
                    ]
                },
                {
                    label: 'Tasks',
                    collapsed: true,
                    items: [
                        {label: 'Chart Course', slug: 'tasks/chart-course'},
                        {label: 'Clear Asteroids', slug: 'tasks/clear-asteroids'},
                        {label: 'Fill Canister', slug: 'tasks/fill-canister'},
                        {label: 'Fix Weather Node', slug: 'tasks/fix-weather-node'},
                        {label: 'Fix Wire', slug: 'tasks/fix-wire'},
                        {label: 'Fuel Engines', slug: 'tasks/fuel-engines'},
                        {label: 'Garbage', slug: 'tasks/garbage'},
                        {label: 'Insert Key', slug: 'tasks/insert-key'},
                        {label: 'Inspect Sample', slug: 'tasks/inspect-sample'},
                        {label: 'Numbers', slug: 'tasks/numbers'},
                        {label: 'Open Waterways', slug: 'tasks/open-waterways'},
                        {label: 'Record Temperature', slug: 'tasks/record-temperature'},
                        {label: 'Repair Drill', slug: 'tasks/repair-drill'},
                        {label: 'Scan Boarding Pass', slug: 'tasks/scan-boarding-pass'},
                        {label: 'Start Reaktor', slug: 'tasks/start-reaktor'},
                        {label: 'Store Artifacts', slug: 'tasks/store-artifacts'},
                        {label: 'Transfer Data', slug: 'tasks/transfer-data'},
                        {label: 'Verify ID', slug: 'tasks/verify-id'}
                    ]
                },
                {
                    label: 'Demo',
                    items: [
                        {label: 'Server', slug: 'demo/demo'},
                        {label: 'Map', slug: 'demo/map'},
                    ]
                }
            ],
        }),
    ],
});
