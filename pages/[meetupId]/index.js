import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://www.meetup.com/blog/wp-content/uploads/2020/08/holding-hands.jpg"
      title="First Meetup"
      address="Test street 12345"
      description="test description"
    />
  );
}

export function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://www.meetup.com/blog/wp-content/uploads/2020/08/holding-hands.jpg",
        id: meetupId,
        title: "My First Meetup",
        address: "Test street 12345",
        description: "test description",
      },
    },
  };
}

export default MeetupDetails;
