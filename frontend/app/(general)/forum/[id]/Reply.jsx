import { formatDistanceToNow, parseISO } from 'date-fns';
import { MdPerson } from 'react-icons/md';

export default function Reply({ reply }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                    <div className="bg-blue-500 rounded-full p-2 mr-3">
                        <MdPerson size={20} color="#FFF" />
                    </div>
                    <div>
                        <h3 className="text-base font-medium text-gray-900">{reply.user.name}</h3>
                        <p className="text-sm text-gray-600">{reply.user.role}</p>
                    </div>
                </div>
                <p className="text-sm text-gray-600">{formatDistanceToNow(parseISO(reply.created_at))} ago</p>
            </div>
            <p className="text-sm text-gray-700">{reply.content}</p>
        </div>
    );
}
