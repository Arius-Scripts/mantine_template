fx_version 'cerulean'
use_experimental_fxv2_oal 'yes'
lua54 'yes'
game "gta5"

name 'ox_lib'
author 'Overextended'
version '3.30.6'
license 'LGPL-3.0-or-later'
repository 'https://github.com/overextended/ox_lib'
description 'A library of shared functions to utilise in other resources.'

dependencies {
    '/server:7290',
    '/onesync',
}

ui_page 'web/build/index.html'

files {

    'web/build/index.html',
    'web/build/**/*',
    'locales/*.json',
}



client_scripts {
    "init.lua"
}
