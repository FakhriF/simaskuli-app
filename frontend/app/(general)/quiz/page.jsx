"use client";
import React, { useState } from 'react';

export default function QuizPage() {
    const [selectedOption, setSelectedOption] = useState(null);

    // Fungsi untuk menangani klik opsi
    const handleOptionClick = (option) => {
        // Jika opsi yang dipilih sama dengan opsi yang diklik, maka atur kembali ke null
        if (selectedOption === option) {
            setSelectedOption(null);
        } else {
            // Jika tidak, atur opsi yang dipilih ke opsi yang diklik
            setSelectedOption(option);
        }
    };

    return (
        <div className="mx-auto">
            <div className="bg-transparent border-b border-gray-300">
                <h1 className="text-xl font-bold mx-4 my-4">Nama mata pelajaran</h1>
            </div>
            <div className="flex flex-col items-left justify-left max-w-7xl mx-auto my-24 p-6 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
                <p className="text-xl font-bold">Ceritanya soal?</p>
                <div
                    className={`${
                        selectedOption === 1 ? 'bg-blue-500' : 'bg-gray-500'
                    } text-white font-bold py-2 px-4 rounded my-4`}
                    onClick={() => handleOptionClick(1)} // Menangani klik opsi
                >
                    <button>Opsi 1</button>
                </div>
                <div
                    className={`${
                        selectedOption === 2 ? 'bg-blue-500' : 'bg-gray-500'
                    } text-white font-bold py-2 px-4 rounded my-4`}
                    onClick={() => handleOptionClick(2)} // Menangani klik opsi
                >
                    <button>Opsi 2</button>
                </div>
                <div
                    className={`${
                        selectedOption === 3 ? 'bg-blue-500' : 'bg-gray-500'
                    } text-white font-bold py-2 px-4 rounded my-4`}
                    onClick={() => handleOptionClick(3)} // Menangani klik opsi
                >
                    <button>Opsi 3</button>
                </div>
                <div
                    className={`${
                        selectedOption === 4 ? 'bg-blue-500' : 'bg-gray-500'
                    } text-white font-bold py-2 px-4 rounded my-4`}
                    onClick={() => handleOptionClick(4)} // Menangani klik opsi
                >
                    <button>Opsi 4</button>
                </div>
                <div className="border-t border-gray-300 py-4">
                    <button className="float-left hover:bg-blue-500 hover:text-white bg-gray-300 text-gray-400 font-bold py-2 px-4 rounded">
                        Kembali
                    </button>
                    <button className="float-right hover:bg-blue-500 hover:text-white bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        Lanjutkan
                    </button>
                </div>
            </div>
        </div>
    );
}
