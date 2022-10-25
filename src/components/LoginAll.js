import React from "react";

const LoginAll = () => {
    return <div>
        <section class="bg-gray-300">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div class="lg:col-span-2 lg:py-12">
                        <p class="max-w-xl text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est id quis adipisci tempora a veritatis esse ratione, quasi voluptates consectetur quod, aperiam blanditiis sit labore consequatur fuga vero, aspernatur atque.
                        </p>

                        <div class="mt-8">
                            <a href="/" class="text-2xl font-bold text-pink-600">
                                0555 555 55 55
                            </a>

                            <address class="mt-2 not-italic">
                                138 Lorem Koleji, Yalova, TR 77100
                            </address>
                        </div>
                    </div>

                    <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="" class="space-y-4">
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                <div>
                                    <label class="sr-only" for="name">Isim</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Ad"
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div>
                                    <label class="sr-only" for="name">Isim</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Soyad"
                                        type="text"
                                        id="name"
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="email">Email</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email Adresi"
                                        type="email"
                                        id="email"
                                    />
                                </div>

                                <div>
                                    <label class="sr-only" for="phone">Phone</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Okul Numarasi"
                                        type="tel"
                                        id="phone"
                                    />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">



                                <div>
                                    <input
                                        type="radio"
                                        name="DeliveryOption"
                                        value="Ogrenci"
                                        id="Ogrenci"
                                        class="peer hidden"
                                        checked
                                    />

                                    <label
                                        for="Ogrenci"
                                        class="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                    >
                                        <p class="text-gray-700">Ogrenciyim</p>


                                    </label>
                                </div>

                                <div>
                                    <input
                                        type="radio"
                                        name="DeliveryOption"
                                        value="Ogretmen"
                                        id="Ogretmen"
                                        class="peer hidden"
                                    />

                                    <label
                                        for="Ogretmen"
                                        class="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                    >
                                        <p class="text-gray-700">Ogretmenim</p>


                                    </label>
                                </div>


                            </div>



                            <div class="">
                                <button
                                    type="submit"
                                    class="inline-flex w-full items-center justify-center rounded-lg bg-pink-600 px-5 py-3 text-white sm:w-auto"
                                >
                                    <span class="font-medium">Giris Yap</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ml-3 h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </div>;
};

export default LoginAll;
