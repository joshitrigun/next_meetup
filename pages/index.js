import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Agile meetup',
    image: 'https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    address: 'Vancouver, Downtown',
    description: 'Agile meetup'
  },
  {
    id: 'm2',
    title: 'Design first meetup',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    address: 'Vancouver, Downtown',
    description: 'Design first meetup'
  },
  {
    id: 'm3',
    title: 'Product Roadmap meetup',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    address: 'Vancouver, Downtown',
    description: 'Product Roadmap meetup'
  }
]
const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />
}


export default HomePage