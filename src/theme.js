import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

const getTheme = () => {
  let overwrites = {
    "palette": {
        "primary1Color": Colors.grey800,
        "accent1Color": Colors.purpleA100,
        "primary2Color": Colors.blueGrey700,
        "primary3Color": Colors.blueGrey400,
        "accent2Color": Colors.indigo100,
        "borderColor": Colors.blueGrey300
    }
};
  return getMuiTheme(baseTheme, overwrites);
}

export default getTheme;