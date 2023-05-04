import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://www.meetup.com/blog/wp-content/uploads/2020/08/holding-hands.jpg",
//     address: "Test address 12345 SE St",
//     description: "This is a first meetup.",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://www.meetup.com/blog/wp-content/uploads/2020/08/holding-hands.jpg",
//     address: "Test address 12345 SE St",
//     description: "This is a first meetup.",
//   },
//   {
//     id: "m3",
//     title: "A Third Meetup",
//     image:
//       "https://www.meetup.com/blog/wp-content/uploads/2020/08/holding-hands.jpg",
//     address: "Test address 12345 SE St",
//     description: "This is a first meetup.",
//   },
// ];

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
  const client = await MongoClient.connect(
    "mongodb+srv://justice:password123abc@cluster0.ag6xbnz.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("cluster0");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1
  };
}

export default HomePage;
