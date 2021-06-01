
import Myprofile from './Myprofile';
import Myschedule from './Myschedule';
import Payment from './Payment';

export default [
  {
    name: '프로필수정', icon: 'user circle', as: 'myprofile', Comp: Myprofile,
  },
  {
    name: '일정관리', icon: 'calendar check', as: 'myschedule', Comp: Myschedule,
  },
  {
    name: '결제내역', icon: 'credit card', as: 'payment', Comp: Payment,
  },
]