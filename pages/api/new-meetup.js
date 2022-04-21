import { MongoClient } from 'mongodb';
async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // const client = await MongoClient.connect('mongodb+srv://<UserName>:<password>@cluster0.l11u7.mongodb.net/<database_name>?retryWrites=true&w=majority')

    // const db = client.db();

    // const meetupsCollection = db.collection('meetups');

    // const meetups = await meetupsCollection.find().toArray();

    // client.close();

    // const client = await MongoClient.connect('mongodb+srv://Trigun:9841735635aA@cluster0.l11u7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

    // const db = client.db();

    // const meetupsCollection = db.collection('meetups');

    // const result = await meetupsCollection.insertOne(data);
    // console.log(result);

    // client.close();

    res.status(201).json({ message: 'Meetups inserted' })
  }
}

export default handler; 