export default [
    {
        title: 'Hasta İşlemleri',
        icon: 'UserIcon',
        children: [
            {
                title: 'Yeni Hasta',
                route: 'admin-patient-list',
            },
            {
                title: 'Hasta Detayları',
                route: 'admin-patient-detail',
            },

            {
                title: 'Hasta Arama',
                route: 'admin-patient-search',
            },
            {
                title: 'Protokol Arama',
                route: 'admin-protocol-list',
            },
            {
                title: 'Protokol Detay',
                route: 'admin-protocol-detail',
            },
            {
                title: 'Randevu Yönetimi',
                route: 'admin-appointment-list',
            },


        ],
    },

    {
        title: 'Makale/Blog',
        icon: 'ActivityIcon',
        children: [

            {
                title: 'Makaleler',
                route: 'admin-article-list',
            },
            {
                title: 'Sık Sorulan Sorular',
                route: 'admin-faq-list',
            },


        ],
    },


    {
        title: 'Doktor',
        icon: 'ActivityIcon',
        children: [

            {
                title: 'Doktor Detayları',
                route: 'admin-doctor-detail',
            },


        ],
    },


    {
        title: 'Sistem Tanımları',
        icon: 'SettingsIcon',
        children: [
            {
                title: 'Kullanıcılar',
                route: 'admin-user-list',
            },
            {
                title: 'Kullanı Grupları',
                route: 'admin-user-group',
            },
            {
                title: 'Branşlar',
                route: 'admin-branch-list',
            },
            {
                title: 'Protokol Tipleri',
                route: 'admin-appointment-type-list',
            },
            {
                title: 'Profil',
                route: 'admin-profile',
            },
            {
                title: 'Çalışma Takvimleri',
                route: 'admin-work-schedules',
            },
            {
                title: 'SMS Yönetimi',
                route: 'admin-sms-management',
            },
            {
                title: 'Kasa Kategorileri',
                route: 'admin-case-category',
            },

            {
                title: 'Hizmet Fiyat listesi',
                route: 'admin-service-price-list',
            },


        ],
    },


    {
        title: 'Muhasebe',
        icon: 'CreditCardIcon',
        children: [
            {
                title: 'Kasa',
                route: 'admin-case-movement',
            },
            {
                title: 'Ödemeler',
                route: 'admin-payments',
            },


        ],
    },


]
