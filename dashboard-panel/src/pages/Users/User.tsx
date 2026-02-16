import { Sidebar } from "@container"

const User = () => {
  return (
      <div className="flex">
      <Sidebar/>
      <div className="flex-1">
        <div className="p-2 text-xl font-bold">This is User page </div>
      </div>
    </div>
  )
}

export default User
