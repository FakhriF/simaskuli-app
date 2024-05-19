import React from "react";

export const Module = async ({ params }) => {
    const res = await fetch(
        `${process.env.BACKEND_URL}/course/${params.id}/module`
    );
    const modules = await res.json();

    return (
        <div>
            {modules.map((module) => (
                <div key={module.id}>{module.title}</div>
            ))}
        </div>
    );
};
