/**
 * Create Elements class, which represents a collection of
 * elements of the application, and
 * 
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("h1.title")
 * 2. It has a name (.name), e.g. "Document Title"
 * 3. It can have a parent Element, 
 *    which is the context of the element (.parent)
 * 4. It cannot have children elements
 * 5. It has a method to retrieve all protractor elements
 *    in the collection by the locator (.all()) in it's context
 * 6. It has a method to retrieve one element from the collection
 *    by the locator (.get(n)) in it's context
 */
const ElementFinder = require('../test/mock/ElementFinder');
const ElementArrayFinder = require('../test/mock/ElementArrayFinder');

'use strict';

class Elements {
    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
        this.parent = null;
        this.children = null;
    }

    setParent(parent) {
        this.parent = parent;
    }

    addChildren(child) {
        if (this.children[child.name]) {
            throw new Error(`Child ${child.name} is already attached`);
        }

        this.children[child.name] = child;
        this.setParent(this);
    }

    get(count) {
        return new ElementArrayFinder().get(count)
    }

    all() {
        return new ElementArrayFinder().all(this.locator)
    }
}

module.exports = Elements;