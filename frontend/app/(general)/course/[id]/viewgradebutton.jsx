'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getToken } from "@/app/(general)/actions";

export const metadata = {
    title: "ViewGradeButton",
};

export default function ViewGradeButton({id}) {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const token = await getToken();
            const response = await fetch("${process.env.BACKEND_URL}/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const userData = await response.json();
            setUserData(userData);
        };

        fetchData();
    }, []);
    
    const [course, setCourse] = useState({});

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await fetch(`${process.env.BACKEND_URL}/course/${id}`);
                const course = await res.json();
                setCourse(course);
            } catch (error) {
                console.error('Error fetching grades:', error);
            }
        };

        fetchCourse();
    }, []);
    
    

    console.log(userData)
    console.log(course)
    return (
        <div className="my-4">
            {course !== null ? (
                <Link href={`/course/${course.id}/grades/${userData.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View Grades
                    </button>
                </Link>
            ) : (
                <p>No grades available</p>
            )}
        </div>
    );
}
