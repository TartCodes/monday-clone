import { Link } from 'react-router-dom' //allows you to link to other pages
import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './AvatarDisplay'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import DeleteBlock from './DeleteBlock'

const TicketCard = () => {
  return (
    <div className="ticket-card">
      <div className='ticket-color'></div>
      <Link>
        <h3>title</h3>
        <AvatarDisplay />
        <StatusDisplay />
        <PriorityDisplay />
        <ProgressDisplay />
      </Link>
      <DeleteBlock />
    </div>
  )
}

export default TicketCard