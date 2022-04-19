import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';


const HomePage = (props) => {

  return (
    <Fragment>

      <Head>
        <title>Next Meetups</title>
        <meta
          name='description'
          content='Browse highly active web development meetups'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  //fetch data from an API.

  // const client = await MongoClient.connect('mongodb+srv://<UserName>:<password>@cluster0.l11u7.mongodb.net/<database_name>?retryWrites=true&w=majority')

  // const db = client.db();

  // const meetupsCollection = db.collection('meetups');

  // const meetups = await meetupsCollection.find().toArray();

  // client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10
  }
}


export default HomePage