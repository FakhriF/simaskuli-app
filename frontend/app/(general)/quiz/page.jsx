export default function QuizPage() {
  return (
      <div className="mx-auto">
          <div className="bg-transparent border-b border-gray-300">
              <h1 className="text-xl font-bold mx-4 my-4">Nama mata pelajaran</h1>
          </div>
          <div className="flex flex-col items-left justify-left max-w-7xl mx-auto my-24 p-6 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
              <div className="w-full mx-auto mb-4">
                  <img src="https://cdn0-production-images-kly.akamaized.net/9BT-b8pZky5Vvmr282XgkIG3Rgc=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1426560/original/015842000_1480926209-namaafrikacov.jpg" className="w-40 h-50 object-cover rounded-lg" alt="quiz-image" />
              </div>
              <p className="text-xl font-bold">Ceritanya soal bergambar?</p>
              <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4">
                  <button>Opsi waktu dipilih</button>
              </div>
              <div className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded my-4">
                  <button>Opsi gak dipilih</button>
              </div>
              <div className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded my-4">
                  <button>Opsi gak dipilih</button>
              </div>
              <div className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded my-4">
                  <button>Opsi gak dipilih</button>
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
          {/*<div className="flex flex-col items-left justify-left max-w-7xl mx-auto my-24 p-6 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
              <p className="text-xl font-bold">Ceritanya soal?</p>
              <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4">
                  <button>Opsi waktu dipilih</button>
              </div>
              <div className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded my-4">
                  <button>Opsi gak dipilih</button>
              </div>
              <div className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded my-4">
                  <button>Opsi gak dipilih</button>
              </div>
              <div className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded my-4">
                  <button>Opsi gak dipilih</button>
              </div>
          </div>
          <div className="px-4 py-3">
              <button className="float-left hover:bg-blue-500 hover:text-white bg-gray-300 text-gray-400 font-bold py-2 px-4 rounded">
                  Previous
              </button>
              <button className="float-right hover:bg-blue-500 hover:text-white bg-gray-300 text-gray-400 font-bold py-2 px-4 rounded">
                  Next
              </button>
  </div>*/}
      </div>
  );
}
