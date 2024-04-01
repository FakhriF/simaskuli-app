import { useEffect, useState } from "react";
import { getAllSessions, getToken } from "../actions";

import { SiMacos } from "react-icons/si";
import { SiWindows11 } from "react-icons/si";

export function ProfileConnectedDevicesPage() {
    const [sessionData, setSessionData] = useState([]);
    const [token, setToken] = useState("");

    useEffect(() => {
        const get = async () => {
            const token = await getToken();

            setToken(token);

            const response = await fetch(
                "http://localhost:8000/api/user/session",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const data = await response.json();

            setSessionData(data.data);
        };
        get();
    }, []);

    return (
        <div className="w-full p-4">
            <h1 className="text-2xl font-bold mb-4">Connected Devices</h1>
            {sessionData
                .sort(
                    (a, b) =>
                        new Date(b.last_activity) - new Date(a.last_activity)
                )
                .map((session, index) => (
                    <div
                        key={index}
                        className="flex flex-row items-center border border-black p-4 rounded-lg w-full shadow mb-4 hover:bg-gray-100"
                    >
                        <div className="mr-4">
                            {session.user_agent.includes("Windows") && (
                                <SiWindows11 size={50} />
                            )}
                            {session.user_agent.includes("Mac") && (
                                <SiMacos size={50} />
                            )}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">
                                {session.user_agent}{" "}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                IP Address: {session.ip_address}
                            </p>
                            <p
                                className={`text-gray-500 text-sm  ${
                                    session.payload === token &&
                                    "text-green-500"
                                }`}
                            >
                                {session.payload === token && "This Device"}
                                {session.payload !== token &&
                                    `Last Activity: ${session.last_activity_parse}`}
                            </p>
                        </div>
                    </div>
                ))}
            {sessionData.length === 0 && (
                // loading blue circle
                <div className="flex justify-center items-center w-full mt-4">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-b-1 border-blue-500"></div>
                </div>
            )}
        </div>
    );
}

// export asyncfunction ProfileConnectedDevicesList() {
//     const sessionData = await getAllSessions();

//     console.log(sessionData);

//     return (
//         <>
//
//         </>
//     );
// }
