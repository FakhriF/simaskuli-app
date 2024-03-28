export const LoadingModal = ({ showModal }) => {
    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex items-center justify-center space-x-2 gap-2">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500 border-b-2 border-blue-900"></div>
                            <p className="text-blue-500">Loading...</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
