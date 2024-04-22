"use client";
import { useState } from 'react';

export default function QuizCRUDPage() {
    // State untuk menyimpan data soal
    const [questions, setQuestions] = useState([]);

    // State untuk menyimpan data inputan
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);

    // Fungsi untuk menambahkan soal baru
    const addQuestion = () => {
        const newQuestion = {
            question: questionText,
            options: options,
        };
        setQuestions([...questions, newQuestion]);
        // Reset inputan setelah menambahkan soal
        setQuestionText('');
        setOptions(['', '', '', '']);
    };

    // Fungsi untuk menghapus soal
    const deleteQuestion = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1);
        setQuestions(updatedQuestions);
    };

    // Fungsi untuk memperbarui soal
    const updateQuestion = (index) => {
        // Implementasi pembaruan soal di sini
    };

    // Fungsi untuk menambahkan opsi baru
    const addOption = () => {
        if (options.length < 4) {
            setOptions([...options, '']);
        }
    };

    return (
        <div className="mx-auto">
            <div className="bg-transparent border-b border-gray-300">
                <h1 className="text-xl font-bold mx-4 my-4">Nama mata pelajaran</h1>
            </div>
            <div>
                <div className="flex flex-col items-left justify-left max-w-7xl mx-auto my-24 p-6 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
                    <h1 className="text-m font-bold">Tambah soal disini</h1>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 mt-4"
                        rows="3"
                        placeholder="Tulis soal disini..."
                        value={questionText}
                        onChange={(e) => setQuestionText(e.target.value)}
                    ></textarea>
                    <form className="flex flex-col items-left justify-left">
                        {options.map((option, index) => (
                            <div key={index}>
                                <label className="block">
                                    <span className="text-gray-700">Opsi {index + 1}</span>
                                    <input
                                        className="mt-1 block w-full"
                                        type="text"
                                        placeholder="Isi opsi disini"
                                        value={option}
                                        onChange={(e) => {
                                            const newOptions = [...options];
                                            newOptions[index] = e.target.value;
                                            setOptions(newOptions);
                                        }}
                                    />
                                </label>
                            </div>
                        ))}
                    </form>
                    <div className="flex flex-row items-center justify-end my-4">
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={addQuestion}
                        >
                            Tambah Soal
                        </button>
                    </div>
                    <div>
                        {questions.map((question, index) => (
                            <div key={index} className="my-4 border border-gray-300 p-4 rounded-lg">
                                <h2 className="font-bold">Soal {index + 1}</h2>
                                <p>{question.question}</p>
                                <ul>
                                    {question.options.map((option, optionIndex) => (
                                        <li key={optionIndex}>{option}</li>
                                    ))}
                                </ul>
                                <button
                                    className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => deleteQuestion(index)}
                                >
                                    Hapus Soal
                                </button>
                                <button
                                    className="mt-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-2"
                                    onClick={() => updateQuestion(index)}
                                >
                                    Perbarui Soal
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
