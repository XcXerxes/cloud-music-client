const Find = () => import('@/pages/Home/Find')
const User = () => import('@/pages/Home/User')
const Account = () => import('@/pages/Home/Account')
const Friends = () => import('@/pages/Home/friends')

export default [
  {
    path: 'find',
    component: Find
  },
  {
    path: 'user',
    component: User
  },
  {
    path: 'account',
    component: Account
  },
  {
    path: 'friends',
    component: Friends
  }
]
