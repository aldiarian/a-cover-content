module.exports = function (comments, relatedLinks, image, bt) {
    var addClasses = '';

    if (comments) {
        addClasses += ' has-comments';
    }
    if (relatedLinks !== undefined && relatedLinks.length > 0) {
            addClasses += ' has-related-links';
    }
    if(image) {
        addClasses += ' has-image';
    }
    if(bt) {
        addClasses += ' ue-c-cover-content--is-bt-module';
    }
    return addClasses;
};
