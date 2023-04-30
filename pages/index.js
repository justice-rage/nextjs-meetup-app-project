import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.meetup.com/blog/wp-content/uploads/2020/08/holding-hands.jpg",
    address: "Test address 12345 SE St",
    description: "This is a first meetup.",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://www.meetup.com/blog/wp-content/uploads/2020/08/holding-hands.jpg",
    address: "Test address 12345 SE St",
    description: "This is a first meetup.",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://www.meetup.com/blog/wp-content/uploads/2020/08/holding-hands.jpg",
    address: "Test address 12345 SE St",
    description: "This is a first meetup.",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     // fetch data from an API

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1
  };
}

export default HomePage;
