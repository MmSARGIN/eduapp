import React from "react";

const Meet = () => {
    return <div class="overflow-hidden w-full h-full overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full divide-y divide-gray-200 text-sm">
            <thead class="bg-gray-100">
                <tr>


                    <th
                        class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                        <div class="flex items-center gap-2">
                            Öğretmen


                        </div>
                    </th>
                    <th
                        class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                        Branş
                    </th>
                    <th
                        class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                        Durum
                    </th>
                    <th
                        class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                        Bugün için
                    </th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
                <tr>


                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        John Frusciante
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">Türkçe</td>

                    <td class="whitespace-nowrap px-4 py-2">
                        <strong
                            class="rounded bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700"
                        >
                            Uygun
                        </strong>
                    </td>
                    <td class="whitespace-nowrap px-4 py-2">
                        <button
                            data-tip="Randevu bilgileri telefonunuza gönderilecektir."
                            class=" tooltip inline-block rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-teal-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                            href="/download"
                        >
                            <span
                                class="block rounded-full bg-white px-6 py-2 text-sm font-medium hover:bg-transparent"
                            >
                                Randevu Al
                            </span>
                        </button>
                    </td>
                </tr>

                <tr>


                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        John Frusciante
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">Fen Bilgisi</td>

                    <td class="whitespace-nowrap px-4 py-2">
                        <strong
                            class="rounded bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700"
                        >
                            Uygun
                        </strong>
                    </td>
                    <td class="whitespace-nowrap px-4 py-2">
                        <button
                            data-tip="Randevu bilgileri telefonunuza gönderilecektir."
                            class=" tooltip inline-block rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-teal-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                            href="/download"
                        >
                            <span
                                class="block rounded-full bg-white px-6 py-2 text-sm font-medium hover:bg-transparent"
                            >
                                Randevu Al
                            </span>
                        </button>
                    </td>
                </tr>

                <tr>


                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        John Frusciante
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">Matematik</td>

                    <td class="whitespace-nowrap px-4 py-2">
                        <strong
                            class="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700"
                        >
                            Uygun Değil
                        </strong>
                    </td>
                    <td class="whitespace-nowrap px-4 py-2">

                        <button
                            data-tip="Randevu bilgileri telefonunuza gönderilecektir."
                            class=" tooltip inline-block rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-teal-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                            href="/download"
                        >
                            <span
                                class="block rounded-full bg-white px-6 py-2 text-sm font-medium hover:bg-transparent"
                            >
                                Randevu Al
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
        ;
};

export default Meet;
