var Iconv = require('iconv').Iconv;

module.exports = {
    convertEncodingContentType: function(buffersConcatenated, contentType){
        var charsetMatch = contentType.match(/charset=(.+)/) || [];
        var charset = charsetMatch[1] || 'utf-8';
        try {
            var iconv = new Iconv(charset, 'utf-8');
            var convertedBuffer = iconv.convert(buffersConcatenated);
            return convertedBuffer.toString();
        } catch (e) {
//            console.warn("can't convert buffer", charset, buffersConcatenated.length);
            return null;
        }
    }
};
