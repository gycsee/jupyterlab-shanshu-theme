import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-shanshu-theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-shanshu-theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab-shanshu-theme is activated!');
    const style = 'jupyterlab-shanshu-theme/index.css';

    manager.register({
      name: 'jupyterlab-shanshu-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
