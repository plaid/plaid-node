"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.19.12
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredError = exports.BaseAPI = exports.COLLECTION_FORMATS = exports.BASE_PATH = void 0;
// Some imports not used depending on template conditions
// @ts-ignore
const axios_1 = __importDefault(require("axios"));
exports.BASE_PATH = "https://production.plaid.com".replace(/\/+$/, "");
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
/**
 *
 * @export
 * @class BaseAPI
 */
class BaseAPI {
    constructor(configuration, basePath = exports.BASE_PATH, axios = axios_1.default) {
        this.basePath = basePath;
        this.axios = axios;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}
exports.BaseAPI = BaseAPI;
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
exports.RequiredError = RequiredError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEI7Ozs7Ozs7Ozs7R0FVRzs7Ozs7O0FBSUgseURBQXlEO0FBQ3pELGFBQWE7QUFDYixrREFBaUU7QUFFcEQsUUFBQSxTQUFTLEdBQUcsOEJBQThCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUU1RTs7O0dBR0c7QUFDVSxRQUFBLGtCQUFrQixHQUFHO0lBQzlCLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEtBQUssRUFBRSxHQUFHO0NBQ2IsQ0FBQztBQVlGOzs7O0dBSUc7QUFDSCxNQUFhLE9BQU87SUFHaEIsWUFBWSxhQUE2QixFQUFZLFdBQW1CLGlCQUFTLEVBQVksUUFBdUIsZUFBVztRQUExRSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUFZLFVBQUssR0FBTCxLQUFLLENBQTZCO1FBQzNILElBQUksYUFBYSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDM0Q7SUFDTCxDQUFDO0NBQ0o7QUFURCwwQkFTQztBQUFBLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILE1BQWEsYUFBYyxTQUFRLEtBQUs7SUFFcEMsWUFBbUIsS0FBYSxFQUFFLEdBQVk7UUFDMUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBREksVUFBSyxHQUFMLEtBQUssQ0FBUTtRQURoQyxTQUFJLEdBQW9CLGVBQWUsQ0FBQztJQUd4QyxDQUFDO0NBQ0o7QUFMRCxzQ0FLQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBUaGUgUGxhaWQgQVBJXG4gKiBUaGUgUGxhaWQgUkVTVCBBUEkuIFBsZWFzZSBzZWUgaHR0cHM6Ly9wbGFpZC5jb20vZG9jcy9hcGkgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMjAyMC0wOS0xNF8xLjE5LjEyXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vY29uZmlndXJhdGlvblwiO1xuLy8gU29tZSBpbXBvcnRzIG5vdCB1c2VkIGRlcGVuZGluZyBvbiB0ZW1wbGF0ZSBjb25kaXRpb25zXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgZ2xvYmFsQXhpb3MsIHsgQXhpb3NQcm9taXNlLCBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgQkFTRV9QQVRIID0gXCJodHRwczovL3Byb2R1Y3Rpb24ucGxhaWQuY29tXCIucmVwbGFjZSgvXFwvKyQvLCBcIlwiKTtcblxuLyoqXG4gKlxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgQ09MTEVDVElPTl9GT1JNQVRTID0ge1xuICAgIGNzdjogXCIsXCIsXG4gICAgc3N2OiBcIiBcIixcbiAgICB0c3Y6IFwiXFx0XCIsXG4gICAgcGlwZXM6IFwifFwiLFxufTtcblxuLyoqXG4gKlxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBSZXF1ZXN0QXJnc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBcmdzIHtcbiAgICB1cmw6IHN0cmluZztcbiAgICBvcHRpb25zOiBhbnk7XG59XG5cbi8qKlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCYXNlQVBJXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlQVBJIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBwcm90ZWN0ZWQgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCwgcHJvdGVjdGVkIGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MpIHtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICB0aGlzLmJhc2VQYXRoID0gY29uZmlndXJhdGlvbi5iYXNlUGF0aCB8fCB0aGlzLmJhc2VQYXRoO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIFJlcXVpcmVkRXJyb3JcbiAqIEBleHRlbmRzIHtFcnJvcn1cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcXVpcmVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgbmFtZTogXCJSZXF1aXJlZEVycm9yXCIgPSBcIlJlcXVpcmVkRXJyb3JcIjtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZmllbGQ6IHN0cmluZywgbXNnPzogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG1zZyk7XG4gICAgfVxufVxuIl19