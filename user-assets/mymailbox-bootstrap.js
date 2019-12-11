setTimeout(function () {

    var nodes = document.body.childNodes;

    for(var i = 0; i < nodes.length; i++) {

        if (nodes[i].nodeName === "DIV") {

            nodes[i].parentElement.removeChild(nodes[i]);
        }
    }

    var container = document.createElement("div");
    container.id = "body";

    document.body.appendChild(container);

    const trigger = function() {
        if (typeof MyMailboxClientManager === "undefined") {

            setTimeout(trigger, 200);
            return;
        }

        MyMailboxClientManager.triggerBootstrap();
    };

    trigger();
}, 500);