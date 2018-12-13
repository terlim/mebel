module.exports = {

    source:{
        html        : 'src/html/*.html',
        html_src    : 'src/blocks/**/*.html',
        scss        : 'src/**/*.scss',
        fonts       : 'src/fonts/**/*.*',
        img         : 'src/images/',
        css         : 'src/css/*.css',
        assets_css  : 'src/**/*.css',
        icon        : 'src/icons/**/*.svg',
        icon_template_path: 'src/fonts/icons/_icons_template.scss',
        icon_font_path:     '../../../src/common.blocks/icons/_icons.scss',
        js          : 'src/js/*.js'
    },

    build:{
        html        : 'build/',
        fonts       : 'build/assets/template-site/font/',
        css         : 'build/assets/template-site/css/',
        js          : 'build/assets/template-site/js/',
        img         : 'build/assets/template-site/img/',
    }

};