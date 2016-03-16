var fs = require('fs');
var path = require('path');
var assert = require('assert');
var redpen = require('./redpen');

describe('redpen-test', function () {
    this.timeout(15000);

    it('test long_kanji_chain.js', function (done) {
        var request = {
            "document": "偶発的な障害事象発生を認めたので報告する。",
            "format": "json2",
            "documentParser": "PLAIN",
            "config": {
                "lang": "ja",
                "validators": {
		    "JavaScript":{"properties":{"script-path":null}}
                }
            }
        };
        var assertion = function (errorSentences) {
            // only one sentence contains error
            assert.equal(errorSentences.length, 1);
            firstErrorSentence = errorSentences[0];
            assert.equal(firstErrorSentence.sentence, '偶発的な障害事象発生を認めたので報告する。');
            assert.equal(1, firstErrorSentence.errors.length);
            assert.equal('[long_kanji_chain.js] 長い熟語 "障害事象発生" (6) が使われています。', firstErrorSentence.errors[0].message);
            done();
        };

	fs.realpath(path.join(__dirname, ".."), function (e, realpath) {
	    request['config']['validators']['JavaScript']['properties']['script-path'] = realpath;
            redpen.callRedPen(request, assertion);
	});
    });
});
