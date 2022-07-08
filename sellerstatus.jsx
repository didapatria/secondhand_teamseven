import React from 'react'

export default function sellerstatus() {
  return (
    <div>
        <!-- Modal toggle -->
<button class="block text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" type="button" data-modal-toggle="authentication-modal">
  Toggle modal
</button>

<!-- Main modal -->
<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="h-modal fixed top-0 right-0 left-0 z-50 w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
  <div class="relative h-full w-full max-w-md p-4 md:h-auto">
    <!-- Modal content -->
    <div class="dark:bg-white-700 relative rounded-lg bg-white shadow-lg">
      <button type="button" class="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="py-6 px-6 lg:px-8">
        <h3 class="mb-3 text-xl font-semibold text-gray-900 dark:text-black">Perbarui status penjualan produkmu</h3>
        <form class="space-y-6" action="#">
          <div class="flex items-center space-x-4">
            <div class="flex h-5 items-center">
              <input id="status" type="radio" value="#" class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-purple-300 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-purple-600" required />
            </div>
            <div class="space-y-1">
              <div class="font-medium">Berhasil Terjual</div>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-500">Kamu telah sepakat menjual produk ini kepada pembeli</div>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="flex h-5 items-center">
              <input id="status" type="radio" value="#" class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-purple-300 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-purple-600" required />
            </div>
            <div class="space-y-1">
              <div class="font-medium">Batalkan Transaksi</div>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-500">Kamu membatalkan transaksi produk ini dengan pembeli</div>
            </div>
          </div>
        </form>
        <button type="submit" class="mt-2 w-full rounded-2xl bg-purple-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-800 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Kirim</button>
      </div>
    </div>
  </div>
</div>



    </div>
    
  )
}
