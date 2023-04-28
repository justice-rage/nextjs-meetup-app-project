import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://www.meetup.com/blog/wp-content/uploads/2020/08/holding-hands.jpg',
        address: 'Test address 12345 SE St',
        description: 'This is a first meetup.'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://www.meetup.com/blog/wp-content/uploads/2020/08/holding-hands.jpg',
        address: 'Test address 12345 SE St',
        description: 'This is a first meetup.'
    },
    {
        id: 'm3',
        title: 'A Third Meetup',
        image: 'https://www.meetup.com/blog/wp-content/uploads/2020/08/holding-hands.jpg',
        address: 'Test address 12345 SE St',
        description: 'This is a first meetup.'
    },
];

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;