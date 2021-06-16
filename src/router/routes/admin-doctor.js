export default [
    {
        path: '/admin/patient',
        name: 'admin-patient-list',
        component: () => import('@/views/admin/patient/AdminAllPatientList'),
    },

    {
        path: '/admin/patient-detail',
        name: 'admin-patient-detail',
        component: () => import('@/views/admin/patient/AdminAllPatientDetail'),
    },

     {
        path: '/admin/patient-search',
        name: 'admin-patient-search',
        component: () => import('@/views/admin/patient/AdminAllPatientSearch'),
    },

    {
        path: '/admin/article',
        name: 'admin-article-list',
        component: () => import('@/views/admin/article/AdminAllArticleList'),
    },

    {
        path: '/admin/doctor',
        name: 'admin-doctor-detail',
        component: () => import('@/views/admin/doctor/AdminAllDoctorDetail'),
    },

    {
        path: '/admin/faq',
        name: 'admin-faq-list',
        component: () => import('@/views/admin/article/AdminAllFaqList'),
    },

    {
        path: '/admin/protocol',
        name: 'admin-protocol-list',
        component: () => import('@/views/admin/patient/AdminAllProtocolList'),
    },

    {
        path: '/admin/protocol-detail',
        name: 'admin-protocol-detail',
        component: () => import('@/views/admin/patient/AdminAllProtocolDetail'),
    },

    {
        path: '/admin/appointment',
        name: 'admin-appointment-list',
        component: () => import('@/views/admin/patient/AdminAllAppointmentList'),
    },

    {
        path: '/admin/user',
        name: 'admin-user-list',
        component: () => import('@/views/admin/system/AdminAllUserList'),
    },

    {
        path: '/admin/branch',
        name: 'admin-branch-list',
        component: () => import('@/views/admin/system/AdminAllBranchList'),
    },

    {
        path: '/admin/admin-service-price-list',
        name: 'admin-service-price-list',
        component: () => import('@/views/admin/system/AdminServicePriceList'),
    },

    {
        path: '/admin/appointment-type',
        name: 'admin-appointment-type-list',
        component: () => import('@/views/admin/system/AdminAllProtocolTypeList'),
    },
      {
        path: '/admin/profile',
        name: 'admin-profile',
        component: () => import('@/views/admin/system/AdminProfile'),
    },

      {
        path: '/admin/work-schedules',
        name: 'admin-work-schedules',
        component: () => import('@/views/admin/system/AdminWorkSchedules'),
    },

     {
        path: '/admin/sms-management',
        name: 'admin-sms-management',
        component: () => import('@/views/admin/system/AdminSmsManagement'),
    },

    {
        path: '/admin/case-category',
        name: 'admin-case-category',
        component: () => import('@/views/admin/system/AdminCaseCategory'),
    },

     {
        path: '/admin/case-movement',
        name: 'admin-case-movement',
        component: () => import('@/views/admin/accounting/AdminCaseMovement'),
    },

     {
        path: '/admin/payments',
        name: 'admin-payments',
        component: () => import('@/views/admin/accounting/AdminPayments'),
    },

      {
        path: '/admin/admin-user-group',
        name: 'admin-user-group',
        component: () => import('@/views/admin/system/AdminAllUserGroupList'),
    },


]
