// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        mdi: ["user-circle", "register", "star"],
        "fluent-color": ["lightbulb-checkmark-32"],
        "icon-park-twotone": ["check-one"],
        "material-symbols": ["play-arrow-rounded"],
      },
    }),
  ],
});
