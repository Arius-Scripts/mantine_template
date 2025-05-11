fx_version 'cerulean'
use_experimental_fxv2_oal 'yes'
lua54 'yes'
game "gta5"



ui_page 'web/build/index.html'

files {
    'web/build/index.html',
    'web/build/**/*',
    'locales/*.json',
}



client_scripts {
    "init.lua"
}


dependencies {
    '/server:7290',
    '/onesync',
}
