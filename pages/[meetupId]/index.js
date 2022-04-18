
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = () => {

  return (
    <MeetupDetail
      image="https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      title="A first meetup"
      address="Vancouver, Downtown"
      description="Agile Scrum description"
    />

  )
}
export function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  // console.log(meetupId)
  return {
    props: {
      meetupData: {
        image: "https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        id: meetupId,
        title: "A first meetup",
        address: "Vancouver, Downtown",
        description: "Agile Scrum description"

      }
    }
  }
}

export default MeetupDetails;