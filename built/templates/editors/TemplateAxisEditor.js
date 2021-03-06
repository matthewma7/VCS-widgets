'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _TemplateAxisSettings = require('./TemplateAxisSettings');

var _TemplateAxisSettings2 = _interopRequireDefault(_TemplateAxisSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var x1 = ["xlabel1", "xtic1", "xmintic1"];
var x2 = ["xlabel2", "xtic2", "xmintic2"];
var y1 = ["ylabel1", "ytic1", "ymintic1"];
var y2 = ["ylabel2", "ytic2", "ymintic2"];

var TemplateAxisEditor = _react2.default.createClass({
    displayName: 'TemplateAxisEditor',

    propTypes: {
        template: _react2.default.PropTypes.object,
        updateTemplate: _react2.default.PropTypes.func
    },
    updateTemplateAttribute: function updateTemplateAttribute(attribute) {
        var self = this;
        return function (key, value) {
            self.props.updateTemplate(attribute, key, value);
        };
    },
    getInitialState: function getInitialState() {
        key: 1;
        return { workingTemplate: $.extend({}, this.props.template) };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({ workingTemplate: $.extend({}, nextProps.template) });
    },
    handleSelect: function handleSelect(key) {
        this.setState({ key: key });
    },
    render: function render() {
        var template = this.state.workingTemplate;
        var self = this;
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _reactBootstrap.Tabs,
                { activeKey: this.state.key, onSelect: this.handleSelect, id: 'templateAxisEditors' },
                _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 1, title: 'First Set X' },
                    x1.map(function (axis_name) {
                        return _react2.default.createElement(_TemplateAxisSettings2.default, { key: axis_name, axis: template[axis_name], page: '1',
                            update: self.updateTemplateAttribute(axis_name) });
                    })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 2, title: 'Second Set X' },
                    x2.map(function (axis_name) {
                        return _react2.default.createElement(_TemplateAxisSettings2.default, { key: axis_name, axis: template[axis_name], page: '2',
                            update: self.updateTemplateAttribute(axis_name) });
                    })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 3, title: 'First Set Y' },
                    y1.map(function (axis_name) {
                        return _react2.default.createElement(_TemplateAxisSettings2.default, { key: axis_name, axis: template[axis_name], page: '3',
                            update: self.updateTemplateAttribute(axis_name) });
                    })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Tab,
                    { eventKey: 4, title: 'Second Set Y' },
                    y2.map(function (axis_name) {
                        return _react2.default.createElement(_TemplateAxisSettings2.default, { key: axis_name, axis: template[axis_name], page: '4',
                            update: self.updateTemplateAttribute(axis_name) });
                    })
                )
            )
        );
    }
});

exports.default = TemplateAxisEditor;
//# sourceMappingURL=TemplateAxisEditor.js.map