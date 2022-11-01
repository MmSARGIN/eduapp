import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginAll = () => {

    const [person, setperson] = useState();
    const navigate = useNavigate();
    const notify = () => toast("Formu Tamamlayınız.");

    return <div className="bg-gray-300">
        <section>
            <ToastContainer autoClose={5000} />
            <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 place-self-center lg:py-12">
                        <p className="max-w-xl text-lg">
                            Sisteme giris yapabilmek icin okulumuz veritabaninda bilgileriniz kayitli olmalidir aksi takdirde sisteme giris yapamayacaksiniz.
                        </p>

                        <div className="mt-4">
                            <a href="/" className="text-2xl font-bold text-red-500">
                                0555 555 55 55
                            </a>

                            <address className="mt-2 not-italic">
                                138 Lorem Koleji, Yalova, TR 77100
                            </address>
                        </div>
                    </div>

                    <div className="rounded-lg space-y-4 bg-gray-200 p-8 shadow-lg lg:col-span-3 lg:p-12">
                        {/* <form onSubmit={null} className="space-y-4"> */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                            <div>
                                <label className="sr-only" htmlFor="name">Isim</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Ad"
                                    type="text"
                                    id="name"
                                />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="name">Isim</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Soyad"
                                    type="text"
                                    id="name"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="sr-only" htmlFor="email">Email</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Email Adresi"
                                    type="email"
                                    id="email"
                                />
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="phone">Phone</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Okul Numarasi"
                                    type="tel"
                                    id="phone"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                            <div>
                                <input
                                    type="radio"
                                    name="DeliveryOption"
                                    value="parent"
                                    id="parent"
                                    className="peer hidden"
                                    onChange={(e) => {
                                        setperson(e.target.value);
                                    }}

                                />
                                <label
                                    htmlFor="parent"
                                    className="flex bg-white cursor-pointer items-center justify-center rounded-lg border border-gray-100 p-3 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-red-500 peer-checked:ring-1 peer-checked:ring-red-500"
                                >
                                    <p className="text-gray-700">Ebeveynim</p>


                                </label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    name="DeliveryOption"
                                    value="Ogretmen"
                                    id="Ogretmen"
                                    className="peer hidden"
                                    onChange={(e) => {
                                        setperson(e.target.value);
                                    }}
                                />

                                <label
                                    htmlFor="Ogretmen"
                                    className="flex bg-white cursor-pointer items-center justify-center rounded-lg border border-gray-100 p-3 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-red-500 peer-checked:ring-1 peer-checked:ring-red-500"
                                >
                                    <p className="text-gray-700">Öğretmenim</p>
                                </label>
                            </div>
                        </div>
                        <div className="">
                            <button

                                onClick={() => {

                                    person === "Ogretmen" ? navigate("/teacher") : person === "parent" ? navigate("/parent") : notify();
                                }}
                                className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-red-200 px-5 py-3 text-white sm:w-auto"
                            >
                                <span className="font-medium">Giris Yap</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-3 h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </section>

    </div>;
};

export default LoginAll;
