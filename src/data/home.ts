import { type CarouselItem } from '../types/carouselHeader';

const homeCarouselItems: Array<CarouselItem> = [
    {
        title: 'Software Engineering Lab',
        description: 'at Baylor University, Waco, TX',
        readMoreLink: 'https://www.ecs.baylor.edu/index.php?id=962509',
        image: '/images/header/baylor-sign.jpg',
    },
    {
        title: 'IRES 2019',
        description: 'International Research Experience for Students National Science Foundation Grant',
        readMoreLink: 'https://ires.ecs.baylor.edu/',
        image: '/images/header/ires-2019.jpg',
    },
    {
        title: 'RedHat Brno',
        description: 'Cooperation with Industry',
        readMoreLink: 'https://www.redhat.com/en/global/czech-republic',
        image: '/images/header/redhat.jpg',
    },
];

export { homeCarouselItems };
