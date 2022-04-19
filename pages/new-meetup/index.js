import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from 'react';
import Head from 'next/head';


const NewMeetupPage = () => {

  const router = useRouter()
  async function addMeetupHandler(enteredMeetupData) {
    //console.log(enteredMeetupData);
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();
    console.log(data);

    router.push('/')
  }

  return (
    <Fragment>
      <Head>
        <title>Adda new Meetups and create networking opportunities</title>
        <meta
          name='description'
          content='Browse highly active web development meetups'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  )
}


export default NewMeetupPage;