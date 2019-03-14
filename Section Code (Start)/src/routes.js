
import Home from './components/Home.vue'
import Header from './components/Header.vue'

// importa somente quando chamado
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'))
    }, 'user')
}
// importa toda o grupo user, "junta os pacotes"
const UserSart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'))
    }, 'user')
}

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'))
    })
}

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'))
    })
}

export const routes = [
    {path: '/', name: 'home', components: {
        default: Home,
        'header-top': Header
    }},
    {
        path: '/user', component: User, 
        components: {
            default: User,
            'header-bottom': Header
        },
        children: [
            {path: '', component: UserSart},
            {path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                next()
            }},
            {path: ':id/edit', component: UserEdit, name: 'userEdit'}
        ]
    },
    { path: '/redirect-me', redirect:{name: 'home'}},
    { path: '/*', redirect:{name: 'home'}}
]