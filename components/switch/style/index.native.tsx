import variables from '../../style/themes/default.native';
import { PixelRatio } from 'react-native';
export default {
  wrapperStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: variables.switch_width,
    height: variables.switch_height,
    borderRadius: variables.switch_height / 2,
    backgroundColor: variables.switch_background,
  },
  disabledWrapperStyle: {
    opacity: 0.5,
  },
  wrapperInActive: {
    borderWidth:  3 /  PixelRatio.get(),
    borderColor: variables.switch_border_color,
    backgroundColor: variables.switch_background,
  },
  wrapperActive: {
    borderWidth: 0,
    backgroundColor: variables.theme_success,
  },
  circleStyle: {
    width: variables.circle_in_active_size,
    height: variables.circle_in_active_size,
    borderRadius: variables.circle_in_active_size / 2,
    backgroundColor: variables.switch_background,
  },
  circleInActive: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: variables.circle_in_active_shadow_color,
  },
  circleActive: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowColor: variables.circle_active_shadow_color,
  },
};
