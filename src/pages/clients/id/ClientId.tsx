import { Link, useParams } from 'react-router-dom'

export const ClientId = () => {
  const params = useParams()
  return (
    <div>ClientId: {params.id}
      <Link to={`/clients/${params.id}/edit`}>Edit</Link>
      <button>Delete</button>
    </div>
  )
}
