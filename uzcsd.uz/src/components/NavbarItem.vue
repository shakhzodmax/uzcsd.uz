<script setup>
import {Navbar, NavbarLogo, NavbarCollapse, NavbarLink} from 'flowbite-vue'
</script>

<template>
    <Navbar class="drop-shadow-sm">
      <template #logo>
        <NavbarLogo link="#" alt="UZCSD logo" image-url="./src/assets/img/logoCSD.svg" >
          <h1 class="uppercase font-light text-base">
            Центральный депозитарий
            <br>
            Ценных бумаг
          </h1>
        </NavbarLogo>
      </template>
      <template #default="{isShowMenu}">
        <NavbarCollapse :isShowMenu="isShowMenu">
          <button @click="openMenu('about')">О нас</button>
          <button @click="openMenu('service')">Наши услуги</button>
          <button @click="openMenu('cooperate')">Корпоративное управление</button>
          <button @click="openMenu('press')">Пресс центр</button>
          <button @click="openMenu('interactive')">Интерактивные услуги</button>
        </NavbarCollapse>
      </template>
      <template #menu-icon>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      </template>
    </Navbar>
    <div class="menu-list text-base font-light">
      <div id="about" class="hidden p-4 bg-gray-50">
        <h3 class="text-center font-medium text-blue-500">Центральный депозитарий</h3>
        <hr class="w-1/6 mx-auto">
        <div class="grid py-5 px-4 mx-auto max-w-screen-2xl md:grid-cols-3">
          <ul>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Профиль</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">История</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Руководство</div>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Структурные подразделения</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Обращение генерального директора</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Задачи и функции</div>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Международное сотрудничество</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Вакансии</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="service" class="hidden p-4 bg-gray-50">
        <div class="grid py-5 px-4 mx-auto max-w-screen-2xl md:grid-cols-3">
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Список услуг</h3>
            <hr class="w-1/2 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Депозитарные услуги</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Информационные услуги</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Консультативные услуги</div>
              </a>
            </li>
          </ul>
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Контактные услуги</h3>
            <hr class="w-1/2 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Связаться с нами</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Отзывы о нас</div>
              </a>
            </li>
          </ul>
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Дополнительная информация</h3>
            <hr class="w-1/2 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Тарифы</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Техническое сопровождение</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="cooperate" class="hidden p-4 bg-gray-50">
        <div class="grid py-5 px-4 mx-auto max-w-screen-2xl md:grid-cols-5">
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Раскрытие информации</h3>
            <hr class="w-10/12 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Перечень аффилированных лиц</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Существенные факты</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Бизнес план</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Показатели эффективности</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Стратегия развития</div>
              </a>
            </li>
          </ul>
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Финансовая отчетность</h3>
            <hr class="w-10/12 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Годовые и квартальные отчеты</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Отчетность по МСФО</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Сведение о закупках</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Результаты внешнего аудита</div>
              </a>
            </li>
          </ul>
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Органы управления и контроля</h3>
            <hr class="w-10/12 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Наблюдательный совет</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Исполнительный орган</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Служба внутреннего аудита</div>
              </a>
            </li>
          </ul>
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Список документов</h3>
            <hr class="w-10/12 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Документы</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Положение</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Устав</div>
              </a>
            </li>
          </ul>
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Дополнительная информация</h3>
            <hr class="w-10/12 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Уставной фонд</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="press" class="hidden p-4 bg-gray-50">
        <div class="grid py-5 px-4 mx-auto max-w-screen-2xl md:grid-cols-4">
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Пресс материалы</h3>
            <hr class="w-10/12 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Пресс-релизы</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Новости</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Статьи</div>
              </a>
            </li>
          </ul>
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Раздел DEPO</h3>
            <hr class="w-10/12 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">DEPO инфографика</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">DEPO дайджест</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">DEPO compass</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">DEPO вестник</div>
              </a>
            </li>
          </ul>
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Раздел медиа</h3>
            <hr class="w-10/12 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Фотографии</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Видео</div>
              </a>
            </li>
          </ul>
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Дополнительная информация</h3>
            <hr class="w-10/12 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Нормативные документы</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Статистическая информация</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="interactive" class="hidden p-4 bg-gray-50">
        <div class="grid py-5 px-4 mx-auto max-w-screen-2xl md:grid-cols-4">
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Открытые данные</h3>
            <hr class="w-10/12 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Список присвоенных ISIN и CFI кодов</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Список акционерных обществ</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Поиск международных кодов ЦБ</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Поиск информации по эмитентам</div>
              </a>
            </li>
          </ul>
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Шаблоны</h3>
            <hr class="w-10/12 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Шаблоны бланков</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Словарь терминов</div>
              </a>
            </li>
          </ul>
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Клиентам</h3>
            <hr class="w-10/12 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Анкета опросник</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Онлайн обращение</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Часто задаваемые вопросы</div>
              </a>
            </li>
          </ul>
          <ul>
            <h3 class="pb-2 font-medium text-blue-500">Список систем</h3>
            <hr class="w-10/12 pb-1">
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Переход в систему MYCABINET</div>
              </a>
            </li>
            <li>
              <a @click="openMenu()" class="block p-1 rounded-lg hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
                <div class="">Переход в систему E-vote</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      menuNames: ['about', 'service', 'cooperate', 'press', 'interactive']
    }
  },
  methods: {
    openMenu(name) {
      this.closeOtherMenus(name).then(() => {
        this.menuNames.forEach((item) => {
          if (name == item) {
            let element = document.getElementById(name);
            if (!element.classList.contains('hidden')) {
              element.classList.add('hidden');
            } else {
              element.classList.remove('hidden');
            }
          }
        })
      });
    },
    async closeOtherMenus(menuName) {
      this.menuNames.forEach((item) => {
        if (menuName != item) {
          let element = document.getElementById(item)
          if (!element.classList.contains('hidden')) {
            element.classList.add('hidden');
          }
        }
      })

    },
  },
  mounted() {
  }
}
</script>