import Loader from './container/Loader';
import NoMatch from './container/NoMatch';
import OAuth2RedirectHandler from './container/OAuth2RedirectHandler';

import IconElements from './view/IconElements';
import FadeImage from './view/FadeImage';
import BannerViewer from './view/BannerViewer';
import ImageCenterObject from './view/ImageCenterObject';
import DatePicker from './view/DatePicker';
import PartnerSearchForm from './view/PartnerSearchForm';
import PartnerSearchFormNew from './view/PartnerSearchFormNew';

import shareFunction from './utils/shareFunction';

const container = {
  Loader,
  NoMatch,
  OAuth2RedirectHandler
}

const view = {
  IconElements,
  FadeImage,
  BannerViewer,
  ImageCenterObject,
  DatePicker,
  PartnerSearchForm,
  PartnerSearchFormNew,
}


export {
  container,
  view,
  shareFunction,
}