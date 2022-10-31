import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Matt T",
      avatar:
        "https://media.licdn.com/dms/image/C5603AQEHt6GbaiXpKg/profile-displayphoto-shrink_200_200/0/1517498119779?e=1672272000&v=beta&t=dE_Ljfkd66odutOmBIJLx49Z_L_D4XQmhcFJoBCq5_g",
      status: "done",
      priority: 5,
      progress: 40,
      description:
        "Make a video to showcase how to work with NFTs blah blah blah blah",
      timestamp: "2022-10-30T16:34",
    },
    {
      category: "Q1 2022",
      color: "red",
      title: "Build and sell AI Model",
      owner: "Matt T",
      avatar:
        "https://media.licdn.com/dms/image/C5603AQEHt6GbaiXpKg/profile-displayphoto-shrink_200_200/0/1517498119779?e=1672272000&v=beta&t=dE_Ljfkd66odutOmBIJLx49Z_L_D4XQmhcFJoBCq5_g",
      status: "working on it",
      priority: 2,
      progress: 70,
      description: "Make a video to work and make AIs blah blah blah blah",
      timestamp: "2022-10-30T16:34",
    },
    {
      category: "Q2 2022",
      color: "blue",
      title: "Build a bot",
      owner: "Matt T",
      avatar:
        "https://media.licdn.com/dms/image/C5603AQEHt6GbaiXpKg/profile-displayphoto-shrink_200_200/0/1517498119779?e=1672272000&v=beta&t=dE_Ljfkd66odutOmBIJLx49Z_L_D4XQmhcFJoBCq5_g",
      status: "working on it",
      priority: 3,
      progress: 10,
      description: "Make a video around a bot blah blah blah blah",
      timestamp: "2022-10-30T16:34",
    },
  ];

  //colors

  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(255,255,186)",
    "rgb(186,255,201)",
    "rgb(186,225,255)",
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  console.log(uniqueCategories);

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={ colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
