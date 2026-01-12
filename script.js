document.addEventListener('DOMContentLoaded', () => {
    // === Theme Switcher Logic (iOS Toggle) ===
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        html.setAttribute('data-theme', 'light');
        themeToggle.checked = false; // Light theme = unchecked (sun side)
    } else {
        themeToggle.checked = true; // Dark theme = checked (moon side)
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            // Dark theme
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            // Light theme
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });



    // === Translation System ===
    const translations = {
        ru: {
            brand: "SINTEZ AGENCY",
            heroTitle: "Маркетинг для стоматологий,<br>который приносит <span class=\"highlight\">кратный рост</span>",
            heroSubtitle: "Мы строим цифровые экосистемы, которые превращают хорошие клиники в лидеров города. Без контроля с вашей стороны. Без отчётов ради отчётов. Мы работаем как партнёры — ваш рост это наш рост.",
            heroCTA: "Обсудить ваш проект",
            headerCTA: "Записаться на сессию",
            problemsTitle: "Почему стоматологии с отличными врачами<br>зарабатывают меньше посредственных конкурентов?",
            problem1Title: "Администраторы сливают половину заявок",
            problem1Text: "Люди звонят, пишут — но не записываются. Проблема не в трафике, а в том, что происходит после звонка.",
            problem2Title: "Летний провал убивает годовую прибыль",
            problem2Text: "Июнь-август — врачи простаивают, кресла пустуют. Клиники без стратегии теряют 20-30% годового потенциала.",
            problem3Title: "Нет репутации = нет доверия",
            problem3Text: "Люди выбирают клинику в интернете ДО первого звонка. Если у вас мало отзывов на 2ГИС — они идут к конкурентам.",
            problem4Title: "Неявки съедают 5-10% прибыли",
            problem4Text: "Каждое пустое кресло — это потерянные десятки тысяч рублей. Каждый месяц.",
            problem5Title: "Вы работаете вслепую",
            problem5Text: "Нет понимания: какие услуги приносят деньги, откуда приходят платёжеспособные пациенты, куда утекает бюджет.",
            problem6Title: "Пациенты \"одноразки\"",
            problem6Text: "Приходят лечить один зуб и исчезают. Вы тратите бюджет на привлечение, но упускаете прибыль от комплексных планов.",
            problemsCTA: "Как мы это решаем",
            servicesTitle: "Что мы делаем",
            servicesDesc: "Мы не \"ведём соцсети\" и не \"настраиваем рекламу\". Мы строим <strong style=\"color: var(--orange)\">цифровые бесшовные экосистемы</strong>, которые работают годами и дают предсказуемый рост.",

            // Services 1: Reputation
            service1CardTitle: "Репутация",
            service1CardSubtitle: "Вас выбирают до звонка",
            service1InnerTitle: "Управление репутацией (SERM): вы как первый выбор",
            service1Desc: "Пациент выбирает не клинику, а доверие. Мы делаем так, чтобы при поиске стоматолога в вашем городе вы были №1 по отзывам и рейтингу.",
            service1ListHeader: "Что входит:",
            service1List1: "<strong>Работа с картами:</strong> Яндекс, 2ГИС, Google Maps, Zoon — удаляем негатив, мотивируем на позитив",
            service1List2: "<strong>Медицинские агрегаторы:</strong> ПроДокторов, НаПоправку, СберЗдоровье — выводим в ТОП списка",
            service1List3: "<strong>SERM в поиске:</strong> вытесняем негативные сайты из выдачи Яндекса и Google",
            service1List4: "<strong>Видео-отзывы:</strong> организуем сбор и посев живых отзывов от пациентов",
            service1List5: "<strong>HR-бренд:</strong> формируем имидж отличного работодателя для найма лучших врачей",
            service1Result: "<strong>Результат:</strong> 9 из 10 пациентов, которые ищут стоматолога, выбирают вас, потому что вам доверяют.",

            // Services 2: Automation
            service2CardTitle: "Автоматизация",
            service2CardSubtitle: "Система работает без вас",
            service2InnerTitle: "CRM + МИС: ни один рубль не теряется",
            service2Desc: "Внедряем прозрачную систему учета. Администраторы работают по скриптам, боты напоминают о визитах, вы видите прибыль в реальном времени.",
            service2Grid1Title: "Интеграция CRM",
            service2Grid1Desc: "Настройка воронок продаж, телефонии и записи всех разговоров с пациентами.",
            service2Grid2Title: "Сквозная аналитика",
            service2Grid2Desc: "Видите, сколько денег принес каждый канал рекламы (до копейки).",
            service2Grid3Title: "Чат-боты",
            service2Grid3Desc: "Автоматические напоминания о приеме и сбор обратной связи после визита.",
            service2Grid4Title: "Контроль качества",
            service2Grid4Desc: "Прослушка звонков и обучение администраторов скриптам продаж.",
            service2Result: "<strong>Результат:</strong> Администраторы продают, а не консультируют. Доходимость до приема вырастает на 30%.",

            // Services 3: Website
            service3CardTitle: "Сайт",
            service3CardSubtitle: "Конверсия в заявку до 15%",
            service3InnerTitle: "Сайты, которые продают медицину",
            service3Desc: "Не просто красивая картинка, а инструмент продаж. Наши сайты вызывают доверие и желание записаться немедленно.",
            service3List1: "<strong>Продающая структура:</strong> сценарии поведения пациентов, закрытие страхов и возражений",
            service3List2: "<strong>SEO-оптимизация:</strong> выводим сайт в ТОП Яндекса и Google по ключевым запросам",
            service3List3: "<strong>Мобильная версия:</strong> удобная запись с телефона (80% трафика в медицине — мобильный)",
            service3List4: "<strong>Квизы и лид-формы:</strong> захват контактов тех, кто пока просто интересуется",
            service3Result: "<strong>Результат:</strong> Стоимость лида снижается в 2-3 раза. Сайт работает как ваш лучший администратор 24/7.",

            // Services 4: Social
            service4CardTitle: "Соцсети",
            service4CardSubtitle: "Личный бренд врачей и трафик",
            service4InnerTitle: "Соцсети + Таргет: поток пациентов из VK и Telegram",
            service4Desc: "Создаём экспертный образ клиники и докторов. Запускаем рекламу, которая окупается с первого визита.",
            service4Grid1Title: "Экспертный контент",
            service4Grid1Desc: "Пишем посты и сценарии для Reels, которые продают услуги (имплантацию, виниры) через экспертность.",
            service4Grid2Title: "Таргетированная реклама",
            service4Grid2Desc: "Находим пациентов с острой болью или потребностью в эстетике по геолокации и интересам.",
            service4Result: "<strong>Результат:</strong> Стабильный поток заявок на дорогие услуги. Формирование очереди на приём к ведущим специалистам.",

            // Services 5: Partnerships
            service5CardTitle: "Партнёрства",
            service5CardSubtitle: "Бесплатный канал привлечения",
            service5InnerTitle: "Стратегические партнёрства: пациенты приходят сами",
            service5Desc: "Выстраиваем сеть реферальных партнеров, которые рекомендуют вашу клинику своим клиентам.",
            service5List1: "<strong>Врачи смежных специальностей:</strong> ЛОРы, остеопаты, педиатры направляют к вам на лечение",
            service5List2: "<strong>Корпоративные клиенты:</strong> договоримся с крупными компаниями города о лечении сотрудников",
            service5List3: "<strong>Блогеры и лидеры мнений:</strong> организуем нативную рекламу у местных инфлюенсеров",
            service5List4: "<strong>Реферальная программа:</strong> \"Приведи друга\" — система бонусов для ваших пациентов за рекомендации",

            // Services 6: Team
            service6CardTitle: "Команда",
            service6CardSubtitle: "Ваш удаленный отдел маркетинга",
            service6InnerTitle: "Штат профессионалов за стоимость одного сотрудника",
            service6Desc: "Вам не нужно нанимать, обучать и контролировать маркетологов. Мы закрываем все задачи под ключ.",
            service6Grid1Title: "Стратег",
            service6Grid1Desc: "Разрабатывает план развития и следит за KPI",
            service6Grid2Title: "Контент-мейкер",
            service6Grid2Desc: "Снимает и монтирует видео, пишет тексты",
            service6Grid3Title: "Тех. специалист",
            service6Grid3Desc: "Настраивает CRM, телефонию и ботов",
            service6Grid4Title: "Личный менеджер",
            service6Grid4Desc: "Всегда на связи в рабочее время",

            // Case Study
            caseTitle: "Кейс: стоматология \"Престиж\"",
            caseHeaderTitle: "От сарафанного радио до лидера города за 2 года",
            caseHeaderSubtitle: "Новый владелец купил клинику в Магнитогорске и обнаружил полное отсутствие системы",
            caseTimelineLabel1: "Точка А",
            caseTimelineContent1: "Записи в тетрадку<br>Нулевая аналитика<br>Мёртвые соцсети",
            caseTimelineLabel2: "Через 2 года",
            caseTimelineContent2: "Вышли в лидеры рынка<br>Построили систему<br>Окупили вложения",
            caseTimelineLabel3: "Сегодня (6-й год)",
            caseTimelineContent3: "Продолжаем работать<br>Удерживаем ТОП-3<br>Загрузка 99%",
            caseActionsTitle: "Что сделали:",
            caseAction1Title: "Ребрендинг и позиционирование",
            caseAction1Desc: "Выстроили позиционирование и провели полный ребрендинг клиники",
            caseAction2Title: "Внедрение CRM и МИС",
            caseAction2Desc: "Обнаружили: 77% лидов сливали администраторы. Построили систему контроля и обучения",
            caseAction3Title: "Захват рейтингов",
            caseAction3Desc: "ТОП-3 города на всех агрегаторах, награды от 2ГИС, ПроДокторов и других платформ",
            caseAction4Title: "Стратегические партнёрства",
            caseAction4Desc: "Конкурс \"Мама года\" — охват 15 000 человек, десятки публикаций в СМИ",
            caseAction5Title: "Автоматизация процессов",
            caseAction5Desc: "Напоминания, отчёты, сегментация базы — всё работает без участия руководства",
            caseAction6Title: "Контент-стратегия",
            caseAction6Desc: "Системный контент, кейсы, экспертные статьи — постоянная видимость в городе",
            caseResultsTitle: "Результаты сотрудничества:",
            caseResult1Label: "рост оборота",
            caseResult2Label: "рост записей",
            caseResult3Label: "снижение неявок",
            caseResult4Label: "лояльных пациентов",
            caseResult5Label: "конверсия в записи",
            caseResult6Label: "рейтинг в городе",
            caseResult7Label: "положительных отзывов",
            caseResult8Label: "загрузка кресел",
            caseFooterText: "<strong>Мы работаем с этой клиникой уже 6 лет.</strong><br>Лидерские позиции были заняты за первые 2 года, сейчас — стадия удержания и устойчивого роста.",
            resultTop3: "ТОП-3",
            caseTestimonialText: "\"Раньше мы работали вслепую — не понимали, откуда приходят пациенты и куда уходят деньги. SINTEZ выстроил систему, которая работает сама. Теперь я вижу каждую цифру и могу планировать на годы вперёд.\"",
            caseTestimonialAuthor: "— Владелец клиники \"Престиж\", Магнитогорск",
            caseCTA: "Хочу такой же результат",

            // Investment
            investmentTitle: "Почему подписка выгоднее<br>разовых услуг?",
            modelExpenseTitle: "❌ Разовые подрядчики / Фриланс",
            modelExpenseSubtitle: "Иллюзия экономии",
            modelExpenseItem1Title: "\"Лоскутное одеяло\"",
            modelExpenseItem1Desc: "Таргетолог, SEO-шник и технарь не общаются. Хаос вместо системы.",
            modelExpenseItem2Title: "Оплата за процесс",
            modelExpenseItem2Desc: "Вы платите за \"настройку\", \"ведение\" и \"посты\", а не за результат.",
            modelExpenseItem3Title: "Нет стратегии",
            modelExpenseItem3Desc: "Работа от задачи к задаче. Без игры в долгую и накопительного эффекта.",
            modelAssetTitle: "✅ Digital-подписка SINTEZ",
            modelAssetSubtitle: "Ваш удаленный отдел маркетинга",
            modelAssetItem1Title: "Полноценный отдел",
            modelAssetItem1Desc: "Все компетенции (Ads, CRM, Контент, Аналитика) в одном окне.",
            modelAssetItem2Title: "Фокус на выручку",
            modelAssetItem2Desc: "Нам не интересно просто \"слить бюджет\". Мы растем вместе с вами.",
            modelAssetItem3Title: "Игра в долгую",
            modelAssetItem3Desc: "Непрерывное тестирование гипотез, системный рост и удержание лидерства.",
            investStat1Value: "до 8%",
            investStat1Label: "от оборота<br>стоимость подписки",
            investStat2Value: "6-12",
            investStat2Label: "месяцев<br>на системный результат",
            investStat3Value: "Лидер",
            investStat3Label: "результат:<br>доминирование в городе",
            investmentPartnerText: "Вы нанимаете не подрядчика. Вы нанимаете <span style=\"color: var(--orange); font-weight: 700;\">партнера по росту</span>.",
            investmentCTA: "Обсудить формат подписки",

            // Criteria
            criteriaTitle: "Мы работаем не со всеми",
            criteriaNotTitle: "Мы НЕ для вас, если:",
            criteriaNotItem1: "Нужен результат \"ещё вчера\"",
            criteriaNotItem2: "Ищете самый дешёвый вариант",
            criteriaNotItem3: "Не готовы менять процессы внутри клиники",
            criteriaNotItem4: "Хотите \"просто вести соцсети\"",
            criteriaYesTitle: "Мы для вас, если:",
            trustContact: "💬 Связаться:",
            trustConfidential: "🔒 Конфиденциально | ⚡ Ответ в течение 1 рабочего дня",
            ctaTelegramLink: "Написать в Telegram",
            navServices: "Подход и услуги",
            navCase: "Результаты (Кейс)",
            navInvestment: "Стоимость подписки",
            criteriaYesItem1: "Хотите стать №1 в своём городе",
            criteriaYesItem2: "Готовы инвестировать в долгосрочную стратегию",
            criteriaYesItem3: "Понимаете, что маркетинг — это система, а не разовые акции",
            criteriaYesItem4: "Ищете партнёра, а не подрядчика",
            criteriaCTA: "Проверить, подходим ли мы друг другу",

            // CTA Section
            ctaTitle: "Стратегическая диагностика<br>системы маркетинга",
            ctaSubtitle: "Закрытый формат. Только для собственников.",
            ctaDesc: "Разберем вашу ситуацию и покажем, где вы теряете деньги прямо сейчас.",
            ctaFeature1: "<strong>Рентген бюджета:</strong> найдем утечки в текущей рекламе",
            ctaFeature2: "<strong>Точки роста:</strong> 3 рычага для удвоения выручки",
            ctaFeature3: "<strong>Математика подписки:</strong> расчет выгоды для вашей клиники",
            ctaButton: "Записаться на диагностику",
            ctaCondition: "<strong>Условие:</strong> Мы берем в работу не более 3 клиник в месяц.<br>Работаем без посредников.",

            footerQuote: "Наш клиент начал с тетрадки и хаоса.<br>Сегодня это одна из самых узнаваемых стоматологий города.<br><br><strong>Следующими можете быть вы.</strong>",
            footerBrandDesc1: "Системный маркетинг и digital-подписка для амбициозных стоматологий.",
            footerBrandDesc2: "Строим цифровые экосистемы с 2018 года.",
            footerNav: "Навигация",
            footerContact: "Связаться",
            footerContactDesc: "Отвечаем в течение дня.",
            footerCopyright: "© 2026 SINTEZ Agency. All rights reserved."
        },
        en: {
            brand: "SINTEZ AGENCY",
            heroTitle: "Systematic Marketing for Dental Clinics",
            heroSubtitle: "We build digital ecosystems that turn good clinics into city leaders. Without your control. Without reports for the sake of reports. We work as partners — your growth is our growth.",
            heroCTA: "Discuss Your Project",
            headerCTA: "Book a Session",
            problemsTitle: "Why clinics with great doctors<br>earn less than average competitors?",
            problem1Title: "Receptionists lose half of all leads",
            problem1Text: "People call and write — but don't book appointments. The problem isn't traffic, it's what happens after the call.",
            problem2Title: "Summer slump kills annual profits",
            problem2Text: "June-August — doctors are idle, chairs are empty. Clinics without strategy lose 20-30% of annual potential.",
            problem3Title: "No reputation = no trust",
            problem3Text: "People choose a clinic online BEFORE the first call. If you have few reviews on Google Maps — they go to competitors.",
            problem4Title: "No-shows eat 5-10% of profits",
            problem4Text: "Every empty chair means thousands in lost revenue. Every month.",
            problem5Title: "You're working blind",
            problem5Text: "No understanding: which services bring money, where high-value patients come from, where budget is wasted.",
            problem6Title: "One-time patients",
            problem6Text: "They come to treat one tooth and disappear. You spend budget on acquisition but miss profits from comprehensive treatment plans.",
            problemsCTA: "How we solve this",
            servicesTitle: "What We Do",
            servicesDesc: "We don't \"manage social media\" or \"run ads\". We build <strong style=\"color: var(--orange)\">seamless digital ecosystems</strong> that work for years and deliver predictable growth.",

            // Services 1: Reputation
            service1CardTitle: "Reputation",
            service1CardSubtitle: "Chosen before the call",
            service1InnerTitle: "Reputation Management (SERM): You as the First Choice",
            service1Desc: "Patients don't choose a clinic, they choose trust. We ensure that when searching for a dentist in your area, you are #1 in reviews and ratings.",
            service1ListHeader: "Includes:",
            service1List1: "<strong>Map Services:</strong> Google Maps, Apple Maps, Yelp — removing negative, motivating positive reviews",
            service1List2: "<strong>Medical Directories:</strong> Healthcare platforms and local directories — ranking you at the top",
            service1List3: "<strong>SERM in Search:</strong> pushing negative sites out of Google search results",
            service1List4: "<strong>Video Reviews:</strong> organizing collection and distribution of real patient testimonials",
            service1List5: "<strong>HR Brand:</strong> building an image of a great employer to hire the best doctors",
            service1Result: "<strong>Result:</strong> 9 out of 10 patients looking for a dentist choose you because they trust you.",

            // Services 2: Automation
            service2CardTitle: "Automation",
            service2CardSubtitle: "System works without you",
            service2InnerTitle: "CRM + PMS: every dollar counted",
            service2Desc: "We implement a transparent tracking system. Receptionists work with scripts, bots remind of visits, you see profits in real-time.",
            service2Grid1Title: "CRM Integration",
            service2Grid1Desc: "Setting up sales funnels, telephony, and recording all conversations with patients.",
            service2Grid2Title: "End-to-End Analytics",
            service2Grid2Desc: "See exactly how much revenue each advertising channel brings (down to the cent).",
            service2Grid3Title: "Chatbots",
            service2Grid3Desc: "Automatic appointment reminders and feedback collection after visits.",
            service2Grid4Title: "Quality Control",
            service2Grid4Desc: "Call listening and training receptionists in sales scripts.",
            service2Result: "<strong>Result:</strong> Receptionists sell instead of just consulting. Attendance rates increase by 30%.",

            // Services 3: Website
            service3CardTitle: "Website",
            service3CardSubtitle: "Conversion to lead up to 15%",
            service3InnerTitle: "Websites that sell medicine",
            service3Desc: "Not just a pretty picture, but a sales tool. Our websites inspire trust and an immediate desire to book.",
            service3List1: "<strong>Sales Structure:</strong> patient behavior scenarios, addressing fears and objections",
            service3List2: "<strong>SEO Optimization:</strong> ranking the site at the top of Google for key queries",
            service3List3: "<strong>Mobile Version:</strong> convenient booking from phones (80% of medical traffic is mobile)",
            service3List4: "<strong>Quizzes & Lead Forms:</strong> capturing contacts of those who are just interested",
            service3Result: "<strong>Result:</strong> Lead cost decreases by 2-3 times. The website works as your best receptionist 24/7.",

            // Services 4: Social
            service4CardTitle: "Social Media",
            service4CardSubtitle: "Doctors' personal brand & traffic",
            service4InnerTitle: "Social Media + Ads: Patient Flow from Instagram & Facebook",
            service4Desc: "We create an expert image for the clinic and doctors. We launch ads that pay off from the first visit.",
            service4Grid1Title: "Expert Content",
            service4Grid1Desc: "We write posts and scripts for Reels that sell services (implants, veneers) through expertise.",
            service4Grid2Title: "Targeted Ads",
            service4Grid2Desc: "Finding patients with acute pain or aesthetic needs based on location and interests.",
            service4Result: "<strong>Result:</strong> Stable flow of requests for high-value services. Forming a waiting list for top specialists.",

            // Services 5: Partnerships
            service5CardTitle: "Partnerships",
            service5CardSubtitle: "Free acquisition channel",
            service5InnerTitle: "Strategic Partnerships: Patients Come Themselves",
            service5Desc: "We build a network of referral partners who recommend your clinic to their clients.",
            service5List1: "<strong>Related Specialists:</strong> ENTs, osteopaths, pediatricians refer patients to you",
            service5List2: "<strong>Corporate Clients:</strong> agreements with large local companies for employee treatment",
            service5List3: "<strong>Influencers:</strong> native advertising with local opinion leaders",
            service5List4: "<strong>Referral Program:</strong> \"Bring a Friend\" — bonus system for your patients' recommendations",

            // Services 6: Team
            service6CardTitle: "Team",
            service6CardSubtitle: "Your remote marketing department",
            service6InnerTitle: "Team of professionals for the cost of one employee",
            service6Desc: "You don't need to hire, train, or control marketers. We handle all tasks turnkey.",
            service6Grid1Title: "Strategist",
            service6Grid1Desc: "Develops development plan and monitors KPIs",
            service6Grid2Title: "Content Creator",
            service6Grid2Desc: "Shoots and edits videos, writes texts",
            service6Grid3Title: "Tech Specialist",
            service6Grid3Desc: "Sets up CRM, telephony, and bots",
            service6Grid4Title: "Personal Manager",
            service6Grid4Desc: "Always available during business hours",

            // Case Study
            caseTitle: "Case Study: \"Prestige\" Dental Clinic",
            caseHeaderTitle: "From Word-of-Mouth to City Leader in 2 Years",
            caseHeaderSubtitle: "New owner bought a clinic in Magnitogorsk and found zero systems",
            caseTimelineLabel1: "Point A",
            caseTimelineContent1: "Notebook records<br>Zero analytics<br>Dead social media",
            caseTimelineLabel2: "After 2 Years",
            caseTimelineContent2: "Market leaders<br>System built<br>Investment recouped",
            caseTimelineLabel3: "Today (Year 6)",
            caseTimelineContent3: "Continuing work<br>Holding Top-3<br>99% capacity",
            caseActionsTitle: "What We Did:",
            caseAction1Title: "Rebranding & Positioning",
            caseAction1Desc: "Built positioning and conducted full clinic rebranding",
            caseAction2Title: "CRM & PMS Implementation",
            caseAction2Desc: "Found: 77% of leads lost by receptionists. Built control and training system",
            caseAction3Title: "Capturing Ratings",
            caseAction3Desc: "Top-3 in city on all directories, awards from Google Maps and healthcare platforms",
            caseAction4Title: "Strategic Partnerships",
            caseAction4Desc: "\"Mom of the Year\" contest — 15,000 reach, dozens of media publications",
            caseAction5Title: "Process Automation",
            caseAction5Desc: "Reminders, reports, database segmentation — everything works without management involvement",
            caseAction6Title: "Content Strategy",
            caseAction6Desc: "Systematic content, case studies, expert articles — constant visibility in the city",
            caseResultsTitle: "Collaboration Results:",
            caseResult1Label: "revenue growth",
            caseResult2Label: "appointments growth",
            caseResult3Label: "reduction in no-shows",
            caseResult4Label: "loyal patients",
            caseResult5Label: "conversion to appointment",
            caseResult6Label: "city rating",
            caseResult7Label: "positive reviews",
            caseResult8Label: "chair capacity",
            caseFooterText: "<strong>We've been working with this clinic for 6 years.</strong><br>Leadership positions were taken in the first 2 years, now — retention and sustainable growth stage.",
            resultTop3: "TOP-3",
            caseTestimonialText: "\"We used to work blindly — didn't understand where patients came from or where money went. SINTEZ built a system that works itself. Now I see every number and can plan for years ahead.\"",
            caseTestimonialAuthor: "— Owner of \"Prestige\" Clinic, Magnitogorsk",
            caseCTA: "I Want the Same Result",

            // Investment
            investmentTitle: "Why subscription is better<br>than one-time services?",
            modelExpenseTitle: "❌ One-time Contractors / Freelance",
            modelExpenseSubtitle: "Illusion of saving",
            modelExpenseItem1Title: "\"Patchwork Quilt\"",
            modelExpenseItem1Desc: "Targetologist, SEO specialist, and tech support don't talk. Chaos instead of system.",
            modelExpenseItem2Title: "Payment for Process",
            modelExpenseItem2Desc: "You pay for \"setup\", \"management\", and \"posts\", not results.",
            modelExpenseItem3Title: "No Strategy",
            modelExpenseItem3Desc: "Task-to-task work. No long game or cumulative effect.",
            modelAssetTitle: "✅ Digital-Subscription SINTEZ",
            modelAssetSubtitle: "Your remote marketing department",
            modelAssetItem1Title: "Full Department",
            modelAssetItem1Desc: "All competencies (Ads, CRM, Content, Analytics) in one window.",
            modelAssetItem2Title: "Focus on Revenue",
            modelAssetItem2Desc: "We aren't interested in just \"spending budget\". We grow with you.",
            modelAssetItem3Title: "The Long Game",
            modelAssetItem3Desc: "Continuous hypothesis testing, systemic growth, and leadership retention.",
            investStat1Value: "up to 8%",
            investStat1Label: "of revenue<br>subscription cost",
            investStat2Value: "6-12",
            investStat2Label: "months<br>for systemic result",
            investStat3Value: "Leader",
            investStat3Label: "result:<br>city dominance",
            investmentPartnerText: "You are not hiring a contractor. You are hiring a <span style=\"color: var(--orange); font-weight: 700;\">growth partner</span>.",
            investmentCTA: "Discuss Subscription Format",

            // Criteria
            criteriaTitle: "We Don't Work With Everyone",
            criteriaNotTitle: "We are NOT for you if:",
            criteriaNotItem1: "Need results \"yesterday\"",
            criteriaNotItem2: "Looking for the cheapest option",
            criteriaNotItem3: "Not ready to change internal processes",
            criteriaNotItem4: "Want to \"just post on social media\"",
            criteriaYesTitle: "We are for you if:",
            trustContact: "💬 Contact:",
            trustConfidential: "🔒 Confidential | ⚡ Reply within 1 business day",
            ctaTelegramLink: "Message on Telegram",
            navServices: "Approach & Services",
            navCase: "Results (Case Study)",
            navInvestment: "Subscription Cost",
            criteriaYesItem1: "Want to become #1 in your city",
            criteriaYesItem2: "Ready to invest in long-term strategy",
            criteriaYesItem3: "Understand marketing is a system, not one-time actions",
            criteriaYesItem4: "Looking for a partner, not a contractor",
            criteriaCTA: "Check Compatibility",

            // CTA Section
            ctaTitle: "Strategic Marketing<br>System Diagnostics",
            ctaSubtitle: "Closed format. Owners only.",
            ctaDesc: "We will analyze your situation and show where you are losing money right now.",
            ctaFeature1: "<strong>Budget X-Ray:</strong> find leaks in current advertising",
            ctaFeature2: "<strong>Growth Points:</strong> 3 levers to double revenue",
            ctaFeature3: "<strong>Subscription Math:</strong> calculating benefits for your clinic",
            ctaButton: "Book Diagnostics",
            ctaCondition: "<strong>Condition:</strong> We take no more than 3 clinics per month.<br>We work without intermediaries.",

            footerQuote: "Our client started with a notebook and chaos.<br>Today it's one of the most recognized dental clinics in the city.<br><br><strong>You could be next.</strong>",
            footerBrandDesc1: "Systematic marketing and digital subscription for ambitious dental clinics.",
            footerBrandDesc2: "Building digital ecosystems since 2018.",
            footerNav: "Navigation",
            footerContact: "Contact",
            footerContactDesc: "We reply within the day.",
            footerCopyright: "© 2026 SINTEZ Agency. All rights reserved."
        }
    };

    function translatePage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }

    // === Language Switcher Logic (Moved) ===
    const langToggle = document.getElementById('lang-toggle');
    const savedLang = localStorage.getItem('language') || 'ru';

    // Set initial state
    if (savedLang === 'en') {
        langToggle.checked = true;
        translatePage('en');
    } else {
        langToggle.checked = false;
    }

    langToggle.addEventListener('change', () => {
        const newLang = langToggle.checked ? 'en' : 'ru';
        localStorage.setItem('language', newLang);
        translatePage(newLang);
    });


    // === Sticky Header on Scroll ===
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // === Parallax Effect for Hero ===
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled < 1000) { // Performance optimization
                hero.style.transform = `translateY(${scrolled * 0.2}px)`;
                // Manually adjusting opacity if needed, currently handled by CSS fades
            }
        });
    }

    // === Number Counter Animation ===
    function animateCounter(element, target, suffix = '') {
        const duration = 2000;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);
        const increment = target / totalFrames;

        let current = 0;
        let frame = 0;

        const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease out quart function
            const ease = 1 - Math.pow(1 - progress, 4);

            current = target * ease;

            if (frame === totalFrames) {
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, frameDuration);
    }

    // === Trigger counters when in viewport ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const text = entry.target.dataset.target || entry.target.textContent;

                // Logic to extract numbers and formats
                // Simplified for robustness: relying on data attributes often better, 
                // but keeping original logic structure for compatibility

                if (text.includes('+') && text.includes('%')) {
                    const num = parseInt(text.replace(/[^0-9]/g, ''));
                    animateCounter(entry.target, num, '%');
                } else if (text.includes('×')) {
                    entry.target.textContent = '×2'; // Simple text replacement for small numbers

                } else if (text.includes('ТОП') || text.includes('TOP')) {
                    // Keep as is, handled by i18n
                    entry.target.innerHTML = text;
                } else if (text.includes('+')) {
                    const num = parseInt(text.replace(/[^0-9]/g, ''));
                    animateCounter(entry.target, num, '+');
                } else if (text.includes('%')) {
                    const num = parseInt(text.replace(/[^0-9]/g, ''));
                    animateCounter(entry.target, num, '%');
                } else {
                    // Default number fallback
                    const num = parseInt(text.replace(/[^0-9]/g, ''));
                    if (!isNaN(num)) animateCounter(entry.target, num);
                }
            }
        });
    }, observerOptions);

    const counterElements = document.querySelectorAll('.result-number');
    counterElements.forEach(el => counterObserver.observe(el));


    // === Intersection Observer for Scroll Fade In ===
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay based on visual order if possible, 
                // or just simple timeout
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    // Stop observing once visible to save performance
                    fadeObserver.unobserve(entry.target);
                }, 100);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.problem-card, .service-item, .investment-card, .action-item');
    animatedElements.forEach(el => fadeObserver.observe(el));


    // === Services Interaction (Hybrid Tabs/Accordion) ===
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        const header = card.querySelector('.service-header');

        header.addEventListener('click', (e) => {
            // Prevent default if it was a link (safety)
            e.preventDefault();

            // If it's desktop grid layout
            if (window.innerWidth > 968) {
                // Remove active class from all cards
                serviceCards.forEach(c => c.classList.remove('active'));
                // Add to current
                card.classList.add('active');
            }
            // If it's mobile accordion
            else {
                // If clicking an already active card, close it
                if (card.classList.contains('active')) {
                    card.classList.remove('active');
                } else {
                    // Close others
                    serviceCards.forEach(c => c.classList.remove('active'));
                    card.classList.add('active');

                    // Smooth scroll to the top of this card
                    setTimeout(() => {
                        header.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300); // Slight delay to allow CSS expansion
                }
            }
        });
    });

    // Optional: Auto-select first tab on resize to desktop if none active
    window.addEventListener('resize', () => {
        if (window.innerWidth > 968) {
            const hasActive = document.querySelector('.service-card.active');
            if (!hasActive && serviceCards.length > 0) {
                serviceCards[0].classList.add('active');
            }
        }
    });  // === Smooth Scroll to Anchors ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only process internal links that are valid selectors
            if (href.length > 1 && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
