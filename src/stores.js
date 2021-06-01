import login from './001_login';
import signUp from './002_signUp';
// import main from './003_main';
// import home from './004_home';
import main from './005_main';
import home from './006_home';
import chat from './007_chat';
import { searchStore } from './008_search';
import { mypageStore } from './009_mypage';

export default {
  loginStore: login.store,
  signUpStore: signUp.store,
  mainStore: main.store,
  homeStore: home.store,
  chatStore: chat.store,
  searchStore,
  mypageStore,
}