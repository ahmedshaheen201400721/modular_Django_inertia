import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import './app.css'
import Layout from "./layouts/Layout";


document.addEventListener('DOMContentLoaded', () => {
    createInertiaApp({
      resolve: (name) => {
        const pages = import.meta.glob( "../../*/pages/**/*.tsx",{ eager: true });
        const regex = /([^:]+)::(.+)/;
        const matches = regex.exec(name);
        const module = matches[1]
        const pageName = matches[2];

        let page = pages[`../../${module}/pages/${pageName}.tsx`]
        page.default.layout = page.default.layout || (page => <Layout children={page} />)
        return page;
      },

      setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
      }
    }).then(() => {});
  });
  