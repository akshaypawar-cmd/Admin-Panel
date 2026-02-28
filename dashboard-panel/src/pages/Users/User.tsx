import { CreateUser, Sidebar } from "@container"

const User = () => {
  return (
      <div className="flex">
      <Sidebar/>
      <div>
        <CreateUser/>
      </div>
    </div>
  )
}

export default User
