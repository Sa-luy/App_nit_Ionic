var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var NativeStorageOriginal = /** @class */ (function (_super) {
    __extends(NativeStorageOriginal, _super);
    function NativeStorageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeStorageOriginal.prototype.initWithSuiteName = function (reference) { return cordova(this, "initWithSuiteName", { "platforms": ["iOS"] }, arguments); };
    NativeStorageOriginal.prototype.setItem = function (reference, value) { return cordova(this, "setItem", {}, arguments); };
    NativeStorageOriginal.prototype.getItem = function (reference) { return cordova(this, "getItem", {}, arguments); };
    NativeStorageOriginal.prototype.keys = function () { return cordova(this, "keys", {}, arguments); };
    NativeStorageOriginal.prototype.remove = function (reference) { return cordova(this, "remove", {}, arguments); };
    NativeStorageOriginal.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    NativeStorageOriginal.pluginName = "NativeStorage";
    NativeStorageOriginal.plugin = "cordova-plugin-nativestorage";
    NativeStorageOriginal.pluginRef = "NativeStorage";
    NativeStorageOriginal.repo = "https://github.com/TheCocoaProject/cordova-plugin-nativestorage";
    NativeStorageOriginal.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    return NativeStorageOriginal;
}(AwesomeCordovaNativePlugin));
var NativeStorage = new NativeStorageOriginal();
export { NativeStorage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlLXN0b3JhZ2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBbUN6RCxpQ0FBMEI7Ozs7SUFVM0QseUNBQWlCLGFBQUMsU0FBaUI7SUFZbkMsK0JBQU8sYUFBQyxTQUFpQixFQUFFLEtBQVU7SUFXckMsK0JBQU8sYUFBQyxTQUFpQjtJQVV6Qiw0QkFBSTtJQVdKLDhCQUFNLGFBQUMsU0FBaUI7SUFVeEIsNkJBQUs7Ozs7Ozt3QkFwR1A7RUFvQ21DLDBCQUEwQjtTQUFoRCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBOYXRpdmUgU3RvcmFnZVxuICogQHByZW1pZXIgbmF0aXZlc3RvcmFnZVxuICogQGRlc2NyaXB0aW9uIE5hdGl2ZSBzdG9yYWdlIG9mIHZhcmlhYmxlcyBpbiBBbmRyb2lkIGFuZCBpT1NcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmF0aXZlU3RvcmFnZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9uYXRpdmUtc3RvcmFnZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF0aXZlU3RvcmFnZTogTmF0aXZlU3RvcmFnZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5uYXRpdmVTdG9yYWdlLnNldEl0ZW0oJ215aXRlbScsIHtwcm9wZXJ0eTogJ3ZhbHVlJywgYW5vdGhlclByb3BlcnR5OiAnYW5vdGhlclZhbHVlJ30pXG4gKiAgIC50aGVuKFxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdTdG9yZWQgaXRlbSEnKSxcbiAqICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBzdG9yaW5nIGl0ZW0nLCBlcnJvcilcbiAqICAgKTtcbiAqXG4gKiB0aGlzLm5hdGl2ZVN0b3JhZ2UuZ2V0SXRlbSgnbXlpdGVtJylcbiAqICAgLnRoZW4oXG4gKiAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAqICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICogICApO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTmF0aXZlU3RvcmFnZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5hdGl2ZXN0b3JhZ2UnLFxuICBwbHVnaW5SZWY6ICdOYXRpdmVTdG9yYWdlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UaGVDb2NvYVByb2plY3QvY29yZG92YS1wbHVnaW4tbmF0aXZlc3RvcmFnZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ21hY09TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF0aXZlU3RvcmFnZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpc2VzIHNoYXJlZCBzdG9yYWdlIHdpdGggdGhlIHN1aXRlIG5hbWUgd2hlbiB1c2luZyBhcHAgZ3JvdXBzIGluIGlPU1xuICAgKlxuICAgKiBAcGFyYW0gcmVmZXJlbmNlIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgaW5pdFdpdGhTdWl0ZU5hbWUocmVmZXJlbmNlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIGEgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHJlZmVyZW5jZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0SXRlbShyZWZlcmVuY2U6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBzdG9yZWQgaXRlbVxuICAgKlxuICAgKiBAcGFyYW0gcmVmZXJlbmNlIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEl0ZW0ocmVmZXJlbmNlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2aW5nIGFsbCBrZXlzXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGtleXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHNpbmdsZSBzdG9yZWQgaXRlbVxuICAgKlxuICAgKiBAcGFyYW0gcmVmZXJlbmNlIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbW92ZShyZWZlcmVuY2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIHN0b3JlZCB2YWx1ZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=