<template>
  <div class="slider relative h-full">
    <div class="indicators container">
      <button @click="nextSlide()" class="absolute left-0 h-slider px-10 hover:bg-gray-400/[.30]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
          <path fill-rule="evenodd"
                d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                clip-rule="evenodd"/>
        </svg>
      </button>
      <button @click="nextSlide()" class="absolute right-0 h-slider px-10 hover:bg-gray-400/[.30]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
          <path fill-rule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clip-rule="evenodd"/>
        </svg>
      </button>
    </div>

    <div id="slider-1" class="w-full active h-slider bg-gray-600">
      <div class="elements container mx-auto flex justify-between items-center px-24">
        <div class="flex flex-col">
          <h1 class="text-5xl font-bold text-gray-900"><span
              class="text-transparent bg-clip-text bg-gradient-to-r to-cyan-500 from-green-400">Персональный Кабинет</span>
          </h1>
          <p class="text-md font-normal text-white mb-4">Центральный депозитарий предлагает вам систему персонального
            кабинета</p>
          <button onclick="location.href='https://pc.deponet.uz';" type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
            Перейти в систему
          </button>
        </div>
        <img src="../assets/img/mycabsvg.png" alt="" width="512" height="512">
      </div>
    </div>
    <div id="slider-2" class="w-full hidden h-slider bg-slate-700">
      <div class="elements container mx-auto flex justify-between items-center px-24">
        <div class="flex flex-col">
          <h1 class="text-5xl font-bold text-gray-900"><span
              class="text-transparent bg-clip-text bg-gradient-to-r to-cyan-500 from-green-400">Электронное голосование</span>
          </h1>
          <p class="text-md font-normal text-white mb-4">Центральный депозитарий предлагает вам систему электронного
            голосования</p>
          <button onclick="location.href='https://evote.uz';" type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
            Перейти в систему
          </button>
        </div>
        <img src="../assets/img/myevotesvg.png" alt="" width="512" height="512">
      </div>
    </div>
  </div>
  <div class="divider h-24">
    <div class="container mx-auto flex flex-col justify-center items-center h-24">
      <h2 class="text-2xl"><span class="font-bold text-blue-500">Наши</span> услуги</h2>
      <h3 class="text-slate-500">Благодарим вас за посещение нашего веб-сайта</h3>
    </div>
  </div>
  <section id="services">
    <div class="drop-shadow-lg container mx-auto flex">
      <div class="w-full h-36 bg-slate-100 hover:text-blue-500 hover:bg-blue-300 flex flex-col justify-center items-center rounded-l-xl">
        <button class="flex flex-col justify-center items-center">
          <img src="../assets/img/depo-services.svg" alt="" width="64" height="64" class="flex justify-center">
          <h1>
            <span class="text-xl font-bold">Депозитарные</span>
            <br>
            услуги
          </h1>
        </button>
      </div>
      <div class="w-full h-36 bg-slate-200 hover:text-blue-500 hover:bg-blue-300 flex flex-col justify-center items-center">
        <button class="flex flex-col justify-center items-center">
          <img src="../assets/img/it-services.svg" alt="" width="64" height="64">
          <h1>
            <span class="text-xl font-bold">Информационные</span>
            <br>
            услуги
          </h1>
        </button>
      </div>
      <div class="w-full h-36 bg-slate-300 hover:text-blue-500 hover:bg-blue-300 flex flex-col justify-center items-center">
        <button class="flex flex-col justify-center items-center">
          <img src="../assets/img/consult-service.svg" alt="" width="64" height="64">
          <h1>
            <span class="text-xl font-bold">Консультативные</span>
            <br>
            услуги
          </h1>
        </button>
      </div>
      <div class="w-full h-36 bg-slate-400 text-slate-100 hover:text-blue-500 hover:bg-blue-300 flex flex-col justify-center items-center">
        <button class="flex flex-col justify-center items-center">
          <img src="../assets/img/technical-support.svg" alt="" width="64" height="64">
          <h1>
            <span class="text-xl font-bold">Техническое</span>
            <br>
            сопровождение
          </h1>
        </button>
      </div>
      <div class="w-full h-36 bg-slate-500 text-slate-100 hover:text-blue-500 hover:bg-blue-300 flex flex-col justify-center items-center">
        <button class="flex flex-col justify-center items-center">
          <img src="../assets/img/tarifs.svg" alt="" width="64" height="64">
          <h1>
            <span class="text-xl font-bold">Тарифы</span>
            <br>
            услуг
          </h1>
        </button>
      </div>
      <div class="w-full h-36 bg-slate-600 text-slate-100 hover:text-blue-500 hover:bg-blue-300 flex flex-col justify-center items-center rounded-r-xl">
        <button class="flex flex-col justify-center items-center">
          <img src="../assets/img/contacts.svg" alt="" width="64" height="64">
          <h1>
            <span class="text-xl font-bold">Свяжитесь</span>
            <br>
            с нами
          </h1>
        </button>
      </div>
    </div>
  </section>
  <section id="uzcsd-info" class="bg-slate-100 mt-10">
    <div class="container mx-auto py-4">
      <p class="indent-16 text-justify font-light">Государственное предприятие <span class="text-blue-500 font-medium">«Центральный депозитарий ценных бумаг»</span> - организация, обеспечивающая единую систему хранения, учета прав и движения ценных бумаг в депозитарной системе Республики Узбекистан.</p>

      <p class="indent-16 py-4 text-justify font-light">Центральный депозитарий ценных бумаг - крупнейший институт на фондовом рынке республики. Кроме выполнения возложенных исключительных функций, Центральный депозитарий является инициаторам внедрения единых стандартов осуществления депозитарных операций, единых форматов электронного взаимодействия, международных стандартов электронных сообщений и идентификации ценных бумаг, а также расширения перечня корпоративных действий, обслуживаемых депозитариями. Также, обеспечивает ведение единой базы корпоративных ценных бумаг, единой базы депонентов (в том числе и эмитентов).</p>

      <p class="indent-16 text-justify font-light">Центральный депозитарий был создан Постановлением Кабинета Министров Республики Узбекистан № 263 от 21 мая 1999 г. «О вопросах организации и деятельности Центрального депозитария ценных бумаг».</p>
    </div>
  </section>
  <div class="divider h-24">
    <div class="container mx-auto flex flex-col justify-center items-center h-24">
      <h2 class="text-2xl"><span class="font-bold text-blue-500">Статистика</span> Центрального депозитария</h2>
      <h3 class="text-slate-500">Только самые актуальные данные статистики</h3>
    </div>
  </div>
  <section id="statistics">
    <div class="drop-shadow-lg container mx-auto flex">
      <div class="w-full h-36 bg-slate-100 hover:bg-blue-300 hover:text-blue-500 flex flex-col justify-center items-center rounded-l-xl">
        <button class="flex flex-col justify-center items-center">
          <img src="../assets/img/isin-cfi.svg" alt="" width="64" height="64" class="flex justify-center">
          <h1>
            <span class="text-xl font-bold">Ценные бумаги</span>
            <br>
            получившие ISIN и CFI коды
          </h1>
        </button>
      </div>
      <div class="w-full h-36 bg-slate-200 hover:bg-blue-300 hover:text-blue-500 flex flex-col justify-center items-center">
        <button class="flex flex-col justify-center items-center">
          <img src="../assets/img/list.svg" alt="" width="64" height="64">
          <h1>
            <span class="text-xl font-bold">Список</span>
            <br>
            акционерных обществ
          </h1>
        </button>
      </div>
      <div class="w-full h-36 bg-slate-300 text-slate-100 hover:bg-blue-300 hover:text-blue-500 flex flex-col justify-center items-center">
        <button class="flex flex-col justify-center items-center">
          <img src="../assets/img/intership.svg" alt="" width="64" height="64">
          <h1>
            <span class="text-xl font-bold">Поиск информации</span>
            <br>
            о международных кодах ценных бумаг
          </h1>
        </button>
      </div>
      <div class="w-full h-36 bg-slate-400 text-slate-100 hover:bg-blue-300 hover:text-blue-500 flex flex-col justify-center items-center rounded-r-xl">
        <button class="flex flex-col justify-center items-center">
          <img src="../assets/img/search.svg" alt="" width="64" height="64">
          <h1>
            <span class="text-xl font-bold">Поиск информации</span>
            <br>
            по эмитентам и их ценным бумагам
          </h1>
        </button>
      </div>
    </div>
  </section>
  <div class="divider h-24">
    <div class="container mx-auto flex flex-col justify-end items-center h-24">
      <h2 class="text-2xl"><span class="font-bold text-blue-500">Новости</span> Центрального депозитария</h2>
      <h3 class="text-slate-500">Только самые последние новости</h3>
    </div>
  </div>
  .<section id="news" class="bg-slate-100">
    <div class="container mx-auto">
      <div class="flex justify-between items-center py-10">
        <div class="template w-48 h-64 bg-slate-600 flex justify-center items-center text-white">
          <p class="animate-pulse">В разработке...</p>
        </div>
        <div class="template w-48 h-64 bg-slate-600 flex justify-center items-center text-white">
          <p class="animate-pulse">В разработке...</p>
        </div>
        <div class="template w-48 h-64 bg-slate-600 flex justify-center items-center text-white">
          <p class="animate-pulse">В разработке...</p>
        </div>
        <div class="template w-48 h-64 bg-slate-600 flex justify-center items-center text-white">
          <p class="animate-pulse">В разработке...</p>
        </div>
        <div class="template w-48 h-64 bg-slate-600 flex justify-center items-center text-white">
          <p class="animate-pulse">В разработке...</p>
        </div>
        <div class="template w-48 h-64 bg-slate-600 flex justify-center items-center text-white">
          <p class="animate-pulse">В разработке...</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sliders: ['slider-1', 'slider-2']
    }
  },
  methods: {
    nextSlide() {
      this.sliders.forEach((item) => {
        let element = document.getElementById(item);
        if (element.classList.contains('active')) {
          element.classList.remove('active');
          element.classList.add('hidden');
        } else {
          element.classList.remove('hidden');
          element.classList.add('active');
        }
      })
    }
  }
}
</script>