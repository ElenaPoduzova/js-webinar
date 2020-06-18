/**
 * Create Layout class, which represents a page of
 * the application, and
 * 
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("body")
 * 2. It has a URL (.url), e.g. "/home" or "https://epam.com"
 * 3. It has a name (.name), e.g. "Document Page"
 * 4. It cannot have a parent element
 * 5. It can have children Elements (.children)
 * 6. It has a method to retrieve the root protractor element
 *    by the locator (.get([name])) or a child element
 *    by name in any depth
 * 7. It has a method to load the page, i.e. Navigates to
 *    the URL of it (.load())
 */
'use strict';

class Layout {
    constructor(name, url, locator) {
        this.name = name;
        this.url = url;
        this.locator = locator;
        this.parent = null;
        this.children = {};
    }

    setParent(parent) {
        if (this.parent === null) {
            this.parent = parent;
        } else {
            throw new Error(`Element ${this.name} already has a parent!`);
        }
    }

    addChildren(child) {
        if (this.children[child.name]) {
            throw new Error(`Child ${child.name} is already attached`);
        }

        this.children[child.name] = child;
        this.setParent(this);
    }

    get(name) {
        if (!name) {
            return element(this.locator)
        }

        if (this.children[name]) {
            return this.children[name].get();
        }

        throw new Error(`Child ${name} wasn't found`);
    }

    load() {
        return this.url;
    }
}

module.exports = Layout;