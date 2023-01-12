import { UserIcon } from "@heroicons/react/24/outline";

export default function User({ user }) {
  return (
    <div className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-stone-300 focus:outline-none">
      <div className="flex items-center justify-center w-12 h-10 bg-stone-500 text-white rounded-full">
        <UserIcon className="h-6 w-6" />
      </div>
      <div className="w-full">
        <span className="block ml-2 font-semibold text-stone-600">
          {user.name}
        </span>
      </div>
    </div>
  );
}
