import TicketCard from '../components/TicketCard'

const Dashboard = () => {

  const tickets = [
    {
      category: 'Q1 2022',
      color : 'red',
      title: 'NFT Safety 101 Video',
      owner: 'Matt T',
      avatar: 'https://media-exp1.licdn.com/dms/image/C5603AQEHt6GbaiXpKg/profile-displayphoto-shrink_400_400/0/1517498119779?e=1672876800&v=beta&t=VXHxMhhDzb4XFVBvIAzhyKKR3qxYUYJKlbz95u5WuLE',
      status: 'done',
      priority: 5,
      progress: 40,
      descriptions: 'Make a video to showcase how to work with NFTs blah blah blah blah',
      timestamp: '2022-10-30T16:34'
    },
    {
      category: 'Q1 2022',
      color : 'red',
      title: 'Build and sell AI Model',
      owner: 'Matt T',
      avatar: 'https://media-exp1.licdn.com/dms/image/C5603AQEHt6GbaiXpKg/profile-displayphoto-shrink_400_400/0/1517498119779?e=1672876800&v=beta&t=VXHxMhhDzb4XFVBvIAzhyKKR3qxYUYJKlbz95u5WuLE',
      status: 'working on it',
      priority: 2,
      progress: 70,
      descriptions: 'Make a video to work and make AIs blah blah blah blah',
      timestamp: '2022-10-30T16:34'
    }
  ]

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        <TicketCard/>
      </div>
    </div>
  )
}

export default Dashboard