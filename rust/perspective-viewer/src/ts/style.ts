/******************************************************************************
 *
 * Copyright (c) 2018, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms
 * of the Apache License 2.0.  The full license can be found in the LICENSE
 * file.
 *
 */

import {PerspectiveColumnStyleElement} from "@finos/perspective-viewer/dist/pkg/perspective_viewer.js";

class HTMLPerspectiveColumnStyleElement extends HTMLElement {
    private instance: PerspectiveColumnStyleElement;

    constructor() {
        super();
    }

    async open(
        target: HTMLElement,
        config: any,
        default_config: any
    ): Promise<void> {
        if (this.instance) {
            this.instance.reset(config, default_config);
        } else {
            this.instance = new PerspectiveColumnStyleElement(
                this,
                config,
                default_config
            );
        }

        this.instance.open(target);
    }
}

if (
    document.createElement("perspective-column-style").constructor ===
    HTMLElement
) {
    window.customElements.define(
        "perspective-column-style",
        HTMLPerspectiveColumnStyleElement
    );
}