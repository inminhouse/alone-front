import NoMatch from './container/NoMatch';
import IconElements from './view/IconElements';
import FadeImage from './view/FadeImage';
import BannerViewer from './view/BannerViewer';
import ImageCenterObject from './view/ImageCenterObject';
import DatePicker from './view/DatePicker';
import PartnerSearchForm from './view/PartnerSearchForm';
import PartnerSearchFormNew from './view/PartnerSearchFormNew';

import shareFunction from './utils/shareFunction';

const container = {
  NoMatch: NoMatch
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