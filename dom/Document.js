defineLazyProperty(global, "Document", function() {
    return DOM.Document.interface;
}, true);

defineLazyProperty(DOM, "Document", function() {
    return implementIDLInterface({
        name: "Document",
        superclass: DOM.Node,
        init: function() { },
	members: {
	    // readonly attribute DOMImplementation implementation;
	    get implementation() { nyi(); },

            // attribute DOMString documentURI;
	    get documentURI() { nyi(); },
	    set documentURI(newval) { nyi(); },

	    // readonly attribute DOMString compatMode;
	    get compatMode() { return "CSS1Compat"; },

	    // readonly attribute DocumentType? doctype;
	    get doctype() { nyi(); },

	    // readonly attribute Element? documentElement;
	    get documentElement() { nyi(); },

	    // NodeList getElementsByTagName(DOMString qualifiedName);
	    getElementsByTagName: function getElementsByTagName(qname) {nyi();},
    
	    // NodeList getElementsByTagNameNS(DOMString namespace,
	    //                                 DOMString localName);
	    getElementsByTagNameNS: function getElementsByTagNameNS(ns, lname){
		nyi();
	    },

	    // NodeList getElementsByClassName(DOMString classNames);
	    getElementsByClassName: function getElementsByClassName(classes) {
		nyi();
	    },

	    // Element? getElementById(DOMString elementId);
	    getElementById: function getElementById(id) { nyi(); },

	    // Element createElement([TreatNullAs=EmptyString]
	    //                       DOMString localName);
	    createElement: function createElement(lname) {
		let root = unwrap(this);
		let tree = root.tree;
		let node = tree.element(lname);
		return wrap(node);
	    },
	    
	    // Element createElementNS(DOMString namespace,
	    //                         DOMString qualifiedName);
	    createElementNS: function createElementNS(ns, qname) { nyi(); },


	    // DocumentFragment createDocumentFragment();
	    createDocumentFragment: function createDocumentFragment() {nyi();},

	    // Text createTextNode(DOMString data);
	    createTextNode: function createTextNode(data) {
		let tree = unwrap(this);
		let node = tree.text(data);
		return wrap(node);
	    },

	    // Comment createComment(DOMString data);
	    createComment: function createComment(data) { nyi(); },

	    // ProcessingInstruction createProcessingInstruction(
	    //                            DOMString target, DOMString data);
	    createProcessingInstruction:
	      function createProcessingInstruction(target, data) {
		nyi();
	    },

	    // Node importNode(Node node, boolean deep);
	    importNode: function importNode(node, deep) {nyi();},

	    // Node adoptNode(Node node);
	    adoptNode: function adoptNode(node) {nyi();},

	    // Event createEvent(DOMString interface);
	    createEvent: function createEvent(interfaceName) { nyi(); },
	}
    });
});
