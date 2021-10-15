const rewire = require("rewire")
const app = rewire("./app")
const validateId = app.__get__("validateId")
// @ponicode
describe("validateId", () => {
    test("0", () => {
        let object = [["http://base.com", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "ponicode.com"], ["https://accounts.google.com/o/oauth2/revoke?token=%s", "Www.GooGle.com", "https://api.telegram.org/"], ["http://base.com", "https://croplands.org/app/a/reset?token=", "https://twitter.com/path?abc"]]
        let callFunction = () => {
            validateId({ params: object }, { send: () => true }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["https://", "www.google.com", "http://www.example.com/route/123?foo=bar"], ["http://www.croplands.org/account/confirm?t=", "https://api.telegram.org/", "https://croplands.org/app/a/confirm?t="], ["https://", "https://croplands.org/app/a/reset?token=", "http://www.example.com/route/123?foo=bar"]]
        let callFunction = () => {
            validateId({ params: object }, { send: () => false }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["https://croplands.org/app/a/reset?token=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://www.croplands.org/account/confirm?t="], ["http://www.croplands.org/account/confirm?t=", "ponicode.com", "http://base.com"], ["Www.GooGle.com", "https://", "www.google.com"]]
        let callFunction = () => {
            validateId({ params: object }, { send: () => false }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["https://croplands.org/app/a/reset?token=", "https://croplands.org/app/a/reset?token=", "http://base.com"], ["https://twitter.com/path?abc", "https://croplands.org/app/a/reset?token=", "http://www.croplands.org/account/confirm?t="], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://api.telegram.org/bot", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"]]
        let callFunction = () => {
            validateId({ params: object }, { send: () => false }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["ponicode.com", "Www.GooGle.com", "https://croplands.org/app/a/confirm?t="], ["https://api.telegram.org/bot", "https://api.telegram.org/", "http://www.example.com/route/123?foo=bar"], ["https://", "http://www.example.com/route/123?foo=bar", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"]]
        let callFunction = () => {
            validateId({ params: object }, { send: () => false }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            validateId(undefined, { send: () => false }, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
