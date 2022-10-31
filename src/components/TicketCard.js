import { Link } from 'react-router-dom' //allows you to link to other pages
import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './AvatarDisplay'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import DeleteBlock from './DeleteBlock'


const TicketCard = ({ color, ticket }) => {
  return (
    <div className="ticket-card">   
    <div className='ticket-color'></div>   
      <Link to={`/ticket/${ticket.documentId}`} id='link'>      
        <h3>{ ticket.title }</h3>
        <AvatarDisplay ticket={ticket}/>
        <StatusDisplay />
        <PriorityDisplay />
        <ProgressDisplay />
      </Link>
      <DeleteBlock />
    </div>
  )
}

export default TicketCard