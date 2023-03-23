import { v4 } from "uuid"

export const CARDS = [{
    title: 'Supervisor',
    text: 'Monitors activity to identify project roadblocks',
    src: './public/images/icon-supervisor.svg',
    color: 'green',
    id: v4(),
    grid: 'first'
},
{
    title: 'Team Builder',
    text: 'Scans our talent network to create the optimal team for your project',
    src: './public/images/icon-team-builder.svg',
    color: 'red',
    id: v4(),
    grid: 'second'
},
{
    title: 'Karma',
    text: 'Regularly evaluates our talent to ensure quality',
    src: './public/images/icon-karma.svg',
    color: 'yellow',
    id: v4(),
    grid: 'third'
},
{
    title: 'Calculator',
    text: 'Uses data from past projects to provide better delivery estimates',
    src: './public/images/icon-calculator.svg',
    color: 'blue',
    id: v4(),
    grid: 'fourth'
},
]