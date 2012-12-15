var config = {
    baseUrl: './',
    paths: {
        'css!': 'styles', // default all css paths to this folder
    },
    pluginPath: 'plugins'
};

curl(config, ['css!widget.css'], init, error);

function init (widget) {
    console.log('styles should be loaded', widget);

    var widget = document.createElement('div');
        widget.className = 'widget';
        widget.innerHTML = 'My Dynamic Content';
        document.body.appendChild(widget);
}

function error (err) {
    console.warn(err);
}