import { useUserProfile, type CreateUserForm,  } from "@api";
import { getStoredUsername } from "@utils";

const UserProfile = () => {
  const { data, isLoading, error } = useUserProfile();

  if (isLoading) return <p className="p-4 text-sm">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error loading user</p>;

const loginUsername = getStoredUsername()
const user = data?.find((user: CreateUserForm) =>user?.name?.firstname === loginUsername) ?? data?.[0];
 
if (!user) return null;

  const avatar = `https://i.pravatar.cc/150?img=${user.id}`;

  return (
    <div className="flex items-center gap-3 p-4 border-b mb-5 border-gray-200">
      <img
        src={avatar}
        alt="user"
        className="w-12 h-12 rounded-full object-cover"
      />
      
      <div className="flex flex-col">
        <span className="font-semibold text-sm">
          {user.name.firstname} 
        </span>

        <span className="text-xs text-gray-500">{user.email}</span>
      </div>
    </div>
  );
};

export default UserProfile;
