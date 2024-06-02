"use client";

import { Dot, File, Youtube } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ModulePage({ params }) {
    const [modules, setModules] = useState([]);

    useEffect(() => {
        // Fetch course grades data from the API
        fetch(`${process.env.BACKEND_URL}/course/${params.id}/module`)
            .then((response) => response.json())
            .then((data) => {
                setModules(data);

                // Assuming learning materials are a part of the fetched module data
                // Extract the learning materials string from the fetched data
                const learningMaterialsString = data.learning_materials;

                // Remove unnecessary escape characters
                const cleanedString = learningMaterialsString
                    .replace(/\\"/g, '"')
                    .replace(/\\\\/g, "\\");

                // Parse the string into a JavaScript object
                const parsedMaterials = JSON.parse(cleanedString);

                // Update the state with the parsed learning materials
                setLearningMaterials(parsedMaterials);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [params.id]); // useEffect runs when params.id changes
    console.log(modules);

    return (
        <div className="mx-auto px-4 py-8">
            <ul>
                {/* <div>
                    {modules.map((module) => (
                        <div key={module.id}>{module.title}</div>
                    ))}
                </div> */}
                {modules.map((module) => (
                    <li
                        className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4"
                        key={module.id}
                    >
                        <div className="space-y-8 rounded-lg shadow-lg p-8">
                            <h1 className="font-bold text-xl">
                                {module.title}
                            </h1>
                            <ul>
                                <h3 className="font-semibold">
                                    Capaian Pembelajaran
                                </h3>

                                <p>{module.learning_achievements}</p>
                            </ul>
                            <ul>
                                <h3 className="font-semibold">
                                    Materi Pembelajaran
                                </h3>
                                <p>{module.learning_materials}</p>
                            </ul>
                        </div>
                        <div className="space-y-8 rounded-lg shadow-lg p-8">
                            <h1 className="font-bold text-xl">
                                Video & Materi Lainnya
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Link href={module.video_link} target="_blank">
                                    <div className="bg-neutral-100 flex items-center rounded-lg shadow-lg p-8 gap-4">
                                        <Youtube
                                            height={50}
                                            width={50}
                                            strokeWidth={0.5}
                                        />
                                        <div>
                                            <h1 className="font-bold">
                                                {module.title_youtube}
                                            </h1>
                                            <p>{module.description_youtube}</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link href={module.note_link} target="_blank">
                                    <div className="bg-neutral-100 flex items-center rounded-lg shadow-lg p-8 gap-4">
                                        <Youtube
                                            height={50}
                                            width={50}
                                            strokeWidth={0.5}
                                        />
                                        <div>
                                            <h1 className="font-bold">
                                                {
                                                    module.additional_material_title
                                                }
                                            </h1>
                                            <p>
                                                {
                                                    module.additional_material_description
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="space-y-2">
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
                                    className="text-lg font-bold"
                                    target="_blank"
                                >
                                    Lecture Note Week {module.id}
                                </a>
                                <p>{module.description}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ModulePage;
