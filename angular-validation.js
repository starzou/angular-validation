/**
 * @module ngValidation
 * @description A high-performance and high-availability form validation component based on AngularJS
 * @author StarZou
 * @email tongyuanzou@gmail.com
 * @time 2015
 * @license MIT
 **/
(function (window, angular, undefined) {
    'use strict';

    /**
     * 需要验证的表单 元素
     * @param element
     * @param controller
     * @constructor
     */
    function ValidationForm(element, controller, fields) {
        this.element = element;
        this.controller = controller;
        this.fields = fields || [];
    }

    // 注册字段
    ValidationForm.prototype.register = function (field) {
        this.fields.push(field);
    };

    // 解绑字段
    ValidationForm.prototype.unregister = function (field) {
        var index = this.fields.indexOf(field);
        this.fields.splice(index, 1);
    };

    /**
     * 需要验证的字段 元素
     * @param element
     * @param controller
     * @constructor
     */
    function ValidationField(element, controller) {
        this.element = element;
        this.controller = controller;
    }

    angular.module('ngValidation', ['ng']).

        provider('validationMessage', function () {
            var defaults = this.defaults = {
                messages: {
                    required : '必填！',
                    number   : '必须为数字！',
                    minlength: '太短！',
                    maxlength: '太长！',
                    email    : 'Email无效！',
                    url      : 'URL无效！',
                    pattern  : '格式不正确！'
                }
            };

            this.$get = [function () {
                return defaults;
            }];

        }).

        provider('validator', function () {

            this.$get = [function () {
                var validator = {};

                return validator;
            }];

        }).

        directive('validationForm', [function () {

            return {
                restrict: 'A',
                require : 'form',
                compile : function compile($element, $attrs) {

                    return function postLink($scope, $element, $attrs, ngFormController) {

                    };
                }
            }

        }]).

        directive('validationField', [function () {

        }]);

})(window, window.angular);